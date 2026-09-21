import * as cdktf from 'cdktf';
export interface GoogleChronicleFeedDetailsAmazonKinesisFirehoseSettings {
}

export function googleChronicleFeedDetailsAmazonKinesisFirehoseSettingsToTerraform(struct?: GoogleChronicleFeedDetailsAmazonKinesisFirehoseSettingsOutputReference | GoogleChronicleFeedDetailsAmazonKinesisFirehoseSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleChronicleFeedDetailsAmazonKinesisFirehoseSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsAmazonKinesisFirehoseSettingsOutputReference | GoogleChronicleFeedDetailsAmazonKinesisFirehoseSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleChronicleFeedDetailsAmazonKinesisFirehoseSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAmazonKinesisFirehoseSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAmazonKinesisFirehoseSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleChronicleFeedDetailsAmazonS3SettingsAuthentication {
  /**
  * Access key ID. Used when using access key auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#access_key_id GoogleChronicleFeed#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Client ID. Used when using OAuth auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_id GoogleChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret. Used when using OAuth auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_secret GoogleChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Refresh URI. Used when using OAuth auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#refresh_uri GoogleChronicleFeed#refresh_uri}
  */
  readonly refreshUri?: string;
  /**
  * Possible values:
  * US_EAST_1
  * US_EAST_2
  * US_WEST_1
  * US_WEST_2
  * US_GOV_CLOUD
  * US_GOV_EAST_1
  * EU_WEST_1
  * EU_WEST_2
  * EU_WEST_3
  * EU_CENTRAL_1
  * EU_NORTH_1
  * EU_SOUTH_1
  * AP_SOUTH_1
  * AP_SOUTHEAST_1
  * AP_SOUTHEAST_2
  * AP_SOUTHEAST_3
  * AP_NORTHEAST_1
  * AP_NORTHEAST_2
  * AP_NORTHEAST_3
  * AP_EAST_1
  * SA_EAST_1
  * CN_NORTH_1
  * CN_NORTHWEST_1
  * CA_CENTRAL_1
  * AF_SOUTH_1
  * ME_SOUTH_1
  * AP_SOUTH_2
  * AP_SOUTHEAST_4
  * CA_WEST_1
  * EU_SOUTH_2
  * EU_CENTRAL_2
  * IL_CENTRAL_1
  * ME_CENTRAL_1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#region GoogleChronicleFeed#region}
  */
  readonly region: string;
  /**
  * Secret access key. Used when using access key auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret_access_key GoogleChronicleFeed#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function googleChronicleFeedDetailsAmazonS3SettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsAmazonS3SettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAmazonS3SettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    refresh_uri: cdktf.stringToTerraform(struct!.refreshUri),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function googleChronicleFeedDetailsAmazonS3SettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsAmazonS3SettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAmazonS3SettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    refresh_uri: {
      value: cdktf.stringToHclTerraform(struct!.refreshUri),
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
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAmazonS3SettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAmazonS3SettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._refreshUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshUri = this._refreshUri;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAmazonS3SettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._refreshUri = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._refreshUri = value.refreshUri;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
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

  // refresh_uri - computed: false, optional: true, required: false
  private _refreshUri?: string; 
  public get refreshUri() {
    return this.getStringAttribute('refresh_uri');
  }
  public set refreshUri(value: string) {
    this._refreshUri = value;
  }
  public resetRefreshUri() {
    this._refreshUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshUriInput() {
    return this._refreshUri;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface GoogleChronicleFeedDetailsAmazonS3Settings {
  /**
  * S3 URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#s3_uri GoogleChronicleFeed#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * Possible values:
  * SOURCE_DELETION_NEVER
  * SOURCE_DELETION_ON_SUCCESS
  * SOURCE_DELETION_ON_SUCCESS_FILES_ONLY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#source_deletion_option GoogleChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption: string;
  /**
  * Possible values:
  * FILES
  * FOLDERS
  * FOLDERS_RECURSIVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#source_type GoogleChronicleFeed#source_type}
  */
  readonly sourceType: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsAmazonS3SettingsAuthentication;
}

export function googleChronicleFeedDetailsAmazonS3SettingsToTerraform(struct?: GoogleChronicleFeedDetailsAmazonS3SettingsOutputReference | GoogleChronicleFeedDetailsAmazonS3Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
    source_deletion_option: cdktf.stringToTerraform(struct!.sourceDeletionOption),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    authentication: googleChronicleFeedDetailsAmazonS3SettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsAmazonS3SettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsAmazonS3SettingsOutputReference | GoogleChronicleFeedDetailsAmazonS3Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_deletion_option: {
      value: cdktf.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsAmazonS3SettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAmazonS3SettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAmazonS3SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAmazonS3Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAmazonS3Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Uri = undefined;
      this._sourceDeletionOption = undefined;
      this._sourceType = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Uri = value.s3Uri;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._sourceType = value.sourceType;
      this._authentication.internalValue = value.authentication;
    }
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // source_deletion_option - computed: false, optional: false, required: true
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsAmazonS3SettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsAmazonS3SettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuth {
  /**
  * Access Key ID for an AWS account (a 20-character, alphanumeric string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#access_key_id GoogleChronicleFeed#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Secret Access Key for an AWS account (a 40-character string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret_access_key GoogleChronicleFeed#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function googleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthToTerraform(struct?: GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthOutputReference | GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function googleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthToHclTerraform(struct?: GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthOutputReference | GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuth {
  /**
  * AWS IAM Role for Identity Federation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#aws_iam_role_arn GoogleChronicleFeed#aws_iam_role_arn}
  */
  readonly awsIamRoleArn?: string;
  /**
  * Subject ID to use for S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#subject_id GoogleChronicleFeed#subject_id}
  */
  readonly subjectId?: string;
}

export function googleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthToTerraform(struct?: GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthOutputReference | GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_iam_role_arn: cdktf.stringToTerraform(struct!.awsIamRoleArn),
    subject_id: cdktf.stringToTerraform(struct!.subjectId),
  }
}


export function googleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthToHclTerraform(struct?: GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthOutputReference | GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_iam_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsIamRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_id: {
      value: cdktf.stringToHclTerraform(struct!.subjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsIamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIamRoleArn = this._awsIamRoleArn;
    }
    if (this._subjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectId = this._subjectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsIamRoleArn = undefined;
      this._subjectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsIamRoleArn = value.awsIamRoleArn;
      this._subjectId = value.subjectId;
    }
  }

  // aws_iam_role_arn - computed: false, optional: true, required: false
  private _awsIamRoleArn?: string; 
  public get awsIamRoleArn() {
    return this.getStringAttribute('aws_iam_role_arn');
  }
  public set awsIamRoleArn(value: string) {
    this._awsIamRoleArn = value;
  }
  public resetAwsIamRoleArn() {
    this._awsIamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleArnInput() {
    return this._awsIamRoleArn;
  }

  // subject_id - computed: false, optional: true, required: false
  private _subjectId?: string; 
  public get subjectId() {
    return this.getStringAttribute('subject_id');
  }
  public set subjectId(value: string) {
    this._subjectId = value;
  }
  public resetSubjectId() {
    this._subjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectIdInput() {
    return this._subjectId;
  }
}
export interface GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthentication {
  /**
  * access_key_secret_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#access_key_secret_auth GoogleChronicleFeed#access_key_secret_auth}
  */
  readonly accessKeySecretAuth?: GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuth;
  /**
  * aws_iam_role_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#aws_iam_role_auth GoogleChronicleFeed#aws_iam_role_auth}
  */
  readonly awsIamRoleAuth?: GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuth;
}

export function googleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_secret_auth: googleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthToTerraform(struct!.accessKeySecretAuth),
    aws_iam_role_auth: googleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthToTerraform(struct!.awsIamRoleAuth),
  }
}


export function googleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_secret_auth: {
      value: googleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthToHclTerraform(struct!.accessKeySecretAuth),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthList",
    },
    aws_iam_role_auth: {
      value: googleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthToHclTerraform(struct!.awsIamRoleAuth),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeySecretAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeySecretAuth = this._accessKeySecretAuth?.internalValue;
    }
    if (this._awsIamRoleAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIamRoleAuth = this._awsIamRoleAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeySecretAuth.internalValue = undefined;
      this._awsIamRoleAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeySecretAuth.internalValue = value.accessKeySecretAuth;
      this._awsIamRoleAuth.internalValue = value.awsIamRoleAuth;
    }
  }

  // access_key_secret_auth - computed: false, optional: true, required: false
  private _accessKeySecretAuth = new GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthOutputReference(this, "access_key_secret_auth");
  public get accessKeySecretAuth() {
    return this._accessKeySecretAuth;
  }
  public putAccessKeySecretAuth(value: GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuth) {
    this._accessKeySecretAuth.internalValue = value;
  }
  public resetAccessKeySecretAuth() {
    this._accessKeySecretAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeySecretAuthInput() {
    return this._accessKeySecretAuth.internalValue;
  }

  // aws_iam_role_auth - computed: false, optional: true, required: false
  private _awsIamRoleAuth = new GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthOutputReference(this, "aws_iam_role_auth");
  public get awsIamRoleAuth() {
    return this._awsIamRoleAuth;
  }
  public putAwsIamRoleAuth(value: GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuth) {
    this._awsIamRoleAuth.internalValue = value;
  }
  public resetAwsIamRoleAuth() {
    this._awsIamRoleAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleAuthInput() {
    return this._awsIamRoleAuth.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAmazonS3V2Settings {
  /**
  * Maximum File Age to ingest in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#max_lookback_days GoogleChronicleFeed#max_lookback_days}
  */
  readonly maxLookbackDays?: number;
  /**
  * S3 URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#s3_uri GoogleChronicleFeed#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * Possible values:
  * NEVER
  * ON_SUCCESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#source_deletion_option GoogleChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication: GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthentication;
}

export function googleChronicleFeedDetailsAmazonS3V2SettingsToTerraform(struct?: GoogleChronicleFeedDetailsAmazonS3V2SettingsOutputReference | GoogleChronicleFeedDetailsAmazonS3V2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_lookback_days: cdktf.numberToTerraform(struct!.maxLookbackDays),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
    source_deletion_option: cdktf.stringToTerraform(struct!.sourceDeletionOption),
    authentication: googleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsAmazonS3V2SettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsAmazonS3V2SettingsOutputReference | GoogleChronicleFeedDetailsAmazonS3V2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_lookback_days: {
      value: cdktf.numberToHclTerraform(struct!.maxLookbackDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_deletion_option: {
      value: cdktf.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAmazonS3V2SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAmazonS3V2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxLookbackDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLookbackDays = this._maxLookbackDays;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAmazonS3V2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxLookbackDays = undefined;
      this._s3Uri = undefined;
      this._sourceDeletionOption = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxLookbackDays = value.maxLookbackDays;
      this._s3Uri = value.s3Uri;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._authentication.internalValue = value.authentication;
    }
  }

  // chronicle_service_account - computed: true, optional: false, required: false
  public get chronicleServiceAccount() {
    return this.getStringAttribute('chronicle_service_account');
  }

  // max_lookback_days - computed: false, optional: true, required: false
  private _maxLookbackDays?: number; 
  public get maxLookbackDays() {
    return this.getNumberAttribute('max_lookback_days');
  }
  public set maxLookbackDays(value: number) {
    this._maxLookbackDays = value;
  }
  public resetMaxLookbackDays() {
    this._maxLookbackDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLookbackDaysInput() {
    return this._maxLookbackDays;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication = new GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsAmazonS3V2SettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuth {
  /**
  * Access key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#access_key_id GoogleChronicleFeed#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret_access_key GoogleChronicleFeed#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function googleChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthToTerraform(struct?: GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthOutputReference | GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function googleChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthToHclTerraform(struct?: GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthOutputReference | GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuth {
  /**
  * Access key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#access_key_id GoogleChronicleFeed#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret_access_key GoogleChronicleFeed#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function googleChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthToTerraform(struct?: GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthOutputReference | GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function googleChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthToHclTerraform(struct?: GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthOutputReference | GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface GoogleChronicleFeedDetailsAmazonSqsSettingsAuthentication {
  /**
  * additional_s3_access_key_secret_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#additional_s3_access_key_secret_auth GoogleChronicleFeed#additional_s3_access_key_secret_auth}
  */
  readonly additionalS3AccessKeySecretAuth?: GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuth;
  /**
  * sqs_access_key_secret_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#sqs_access_key_secret_auth GoogleChronicleFeed#sqs_access_key_secret_auth}
  */
  readonly sqsAccessKeySecretAuth?: GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuth;
}

export function googleChronicleFeedDetailsAmazonSqsSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAmazonSqsSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_s3_access_key_secret_auth: googleChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthToTerraform(struct!.additionalS3AccessKeySecretAuth),
    sqs_access_key_secret_auth: googleChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthToTerraform(struct!.sqsAccessKeySecretAuth),
  }
}


export function googleChronicleFeedDetailsAmazonSqsSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAmazonSqsSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_s3_access_key_secret_auth: {
      value: googleChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthToHclTerraform(struct!.additionalS3AccessKeySecretAuth),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthList",
    },
    sqs_access_key_secret_auth: {
      value: googleChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthToHclTerraform(struct!.sqsAccessKeySecretAuth),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAmazonSqsSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalS3AccessKeySecretAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalS3AccessKeySecretAuth = this._additionalS3AccessKeySecretAuth?.internalValue;
    }
    if (this._sqsAccessKeySecretAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsAccessKeySecretAuth = this._sqsAccessKeySecretAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAmazonSqsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalS3AccessKeySecretAuth.internalValue = undefined;
      this._sqsAccessKeySecretAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalS3AccessKeySecretAuth.internalValue = value.additionalS3AccessKeySecretAuth;
      this._sqsAccessKeySecretAuth.internalValue = value.sqsAccessKeySecretAuth;
    }
  }

  // additional_s3_access_key_secret_auth - computed: false, optional: true, required: false
  private _additionalS3AccessKeySecretAuth = new GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthOutputReference(this, "additional_s3_access_key_secret_auth");
  public get additionalS3AccessKeySecretAuth() {
    return this._additionalS3AccessKeySecretAuth;
  }
  public putAdditionalS3AccessKeySecretAuth(value: GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuth) {
    this._additionalS3AccessKeySecretAuth.internalValue = value;
  }
  public resetAdditionalS3AccessKeySecretAuth() {
    this._additionalS3AccessKeySecretAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalS3AccessKeySecretAuthInput() {
    return this._additionalS3AccessKeySecretAuth.internalValue;
  }

  // sqs_access_key_secret_auth - computed: false, optional: true, required: false
  private _sqsAccessKeySecretAuth = new GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthOutputReference(this, "sqs_access_key_secret_auth");
  public get sqsAccessKeySecretAuth() {
    return this._sqsAccessKeySecretAuth;
  }
  public putSqsAccessKeySecretAuth(value: GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuth) {
    this._sqsAccessKeySecretAuth.internalValue = value;
  }
  public resetSqsAccessKeySecretAuth() {
    this._sqsAccessKeySecretAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsAccessKeySecretAuthInput() {
    return this._sqsAccessKeySecretAuth.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAmazonSqsSettings {
  /**
  * Account number of the owner of the queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#account_number GoogleChronicleFeed#account_number}
  */
  readonly accountNumber?: string;
  /**
  * Name of the queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#queue GoogleChronicleFeed#queue}
  */
  readonly queue?: string;
  /**
  * Possible values:
  * US_EAST_1
  * US_EAST_2
  * US_WEST_1
  * US_WEST_2
  * US_GOV_CLOUD
  * US_GOV_EAST_1
  * EU_WEST_1
  * EU_WEST_2
  * EU_WEST_3
  * EU_CENTRAL_1
  * EU_NORTH_1
  * EU_SOUTH_1
  * AP_SOUTH_1
  * AP_SOUTHEAST_1
  * AP_SOUTHEAST_2
  * AP_SOUTHEAST_3
  * AP_NORTHEAST_1
  * AP_NORTHEAST_2
  * AP_NORTHEAST_3
  * AP_EAST_1
  * SA_EAST_1
  * CN_NORTH_1
  * CN_NORTHWEST_1
  * CA_CENTRAL_1
  * AF_SOUTH_1
  * ME_SOUTH_1
  * AP_SOUTH_2
  * AP_SOUTHEAST_4
  * CA_WEST_1
  * EU_SOUTH_2
  * EU_CENTRAL_2
  * IL_CENTRAL_1
  * ME_CENTRAL_1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#region GoogleChronicleFeed#region}
  */
  readonly region?: string;
  /**
  * Possible values:
  * SOURCE_DELETION_NEVER
  * SOURCE_DELETION_ON_SUCCESS
  * SOURCE_DELETION_ON_SUCCESS_FILES_ONLY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#source_deletion_option GoogleChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsAmazonSqsSettingsAuthentication;
}

export function googleChronicleFeedDetailsAmazonSqsSettingsToTerraform(struct?: GoogleChronicleFeedDetailsAmazonSqsSettingsOutputReference | GoogleChronicleFeedDetailsAmazonSqsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_number: cdktf.stringToTerraform(struct!.accountNumber),
    queue: cdktf.stringToTerraform(struct!.queue),
    region: cdktf.stringToTerraform(struct!.region),
    source_deletion_option: cdktf.stringToTerraform(struct!.sourceDeletionOption),
    authentication: googleChronicleFeedDetailsAmazonSqsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsAmazonSqsSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsAmazonSqsSettingsOutputReference | GoogleChronicleFeedDetailsAmazonSqsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_number: {
      value: cdktf.stringToHclTerraform(struct!.accountNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue: {
      value: cdktf.stringToHclTerraform(struct!.queue),
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
    source_deletion_option: {
      value: cdktf.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsAmazonSqsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAmazonSqsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAmazonSqsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountNumber = this._accountNumber;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAmazonSqsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountNumber = undefined;
      this._queue = undefined;
      this._region = undefined;
      this._sourceDeletionOption = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountNumber = value.accountNumber;
      this._queue = value.queue;
      this._region = value.region;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._authentication.internalValue = value.authentication;
    }
  }

  // account_number - computed: false, optional: true, required: false
  private _accountNumber?: string; 
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }
  public set accountNumber(value: string) {
    this._accountNumber = value;
  }
  public resetAccountNumber() {
    this._accountNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
  }

  // queue - computed: false, optional: true, required: false
  private _queue?: string; 
  public get queue() {
    return this.getStringAttribute('queue');
  }
  public set queue(value: string) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
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

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsAmazonSqsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsAmazonSqsSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuth {
  /**
  * AWS IAM Role for Identity Federation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#aws_iam_role_arn GoogleChronicleFeed#aws_iam_role_arn}
  */
  readonly awsIamRoleArn?: string;
  /**
  * Subject ID to use for SQS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#subject_id GoogleChronicleFeed#subject_id}
  */
  readonly subjectId?: string;
}

export function googleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthToTerraform(struct?: GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthOutputReference | GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_iam_role_arn: cdktf.stringToTerraform(struct!.awsIamRoleArn),
    subject_id: cdktf.stringToTerraform(struct!.subjectId),
  }
}


export function googleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthToHclTerraform(struct?: GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthOutputReference | GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_iam_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsIamRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_id: {
      value: cdktf.stringToHclTerraform(struct!.subjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsIamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIamRoleArn = this._awsIamRoleArn;
    }
    if (this._subjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectId = this._subjectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsIamRoleArn = undefined;
      this._subjectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsIamRoleArn = value.awsIamRoleArn;
      this._subjectId = value.subjectId;
    }
  }

  // aws_iam_role_arn - computed: false, optional: true, required: false
  private _awsIamRoleArn?: string; 
  public get awsIamRoleArn() {
    return this.getStringAttribute('aws_iam_role_arn');
  }
  public set awsIamRoleArn(value: string) {
    this._awsIamRoleArn = value;
  }
  public resetAwsIamRoleArn() {
    this._awsIamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleArnInput() {
    return this._awsIamRoleArn;
  }

  // subject_id - computed: false, optional: true, required: false
  private _subjectId?: string; 
  public get subjectId() {
    return this.getStringAttribute('subject_id');
  }
  public set subjectId(value: string) {
    this._subjectId = value;
  }
  public resetSubjectId() {
    this._subjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectIdInput() {
    return this._subjectId;
  }
}
export interface GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuth {
  /**
  * Access key ID of the S3 bucket.  Ex: AKIABCDEFGHIJKL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#access_key_id GoogleChronicleFeed#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Secret access key to access the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret_access_key GoogleChronicleFeed#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function googleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthToTerraform(struct?: GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthOutputReference | GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function googleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthToHclTerraform(struct?: GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthOutputReference | GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthentication {
  /**
  * aws_iam_role_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#aws_iam_role_auth GoogleChronicleFeed#aws_iam_role_auth}
  */
  readonly awsIamRoleAuth: GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuth;
  /**
  * sqs_v2_access_key_secret_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#sqs_v2_access_key_secret_auth GoogleChronicleFeed#sqs_v2_access_key_secret_auth}
  */
  readonly sqsV2AccessKeySecretAuth: GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuth;
}

export function googleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_iam_role_auth: googleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthToTerraform(struct!.awsIamRoleAuth),
    sqs_v2_access_key_secret_auth: googleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthToTerraform(struct!.sqsV2AccessKeySecretAuth),
  }
}


export function googleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_iam_role_auth: {
      value: googleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthToHclTerraform(struct!.awsIamRoleAuth),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthList",
    },
    sqs_v2_access_key_secret_auth: {
      value: googleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthToHclTerraform(struct!.sqsV2AccessKeySecretAuth),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsIamRoleAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIamRoleAuth = this._awsIamRoleAuth?.internalValue;
    }
    if (this._sqsV2AccessKeySecretAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsV2AccessKeySecretAuth = this._sqsV2AccessKeySecretAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsIamRoleAuth.internalValue = undefined;
      this._sqsV2AccessKeySecretAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsIamRoleAuth.internalValue = value.awsIamRoleAuth;
      this._sqsV2AccessKeySecretAuth.internalValue = value.sqsV2AccessKeySecretAuth;
    }
  }

  // aws_iam_role_auth - computed: false, optional: false, required: true
  private _awsIamRoleAuth = new GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthOutputReference(this, "aws_iam_role_auth");
  public get awsIamRoleAuth() {
    return this._awsIamRoleAuth;
  }
  public putAwsIamRoleAuth(value: GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuth) {
    this._awsIamRoleAuth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleAuthInput() {
    return this._awsIamRoleAuth.internalValue;
  }

  // sqs_v2_access_key_secret_auth - computed: false, optional: false, required: true
  private _sqsV2AccessKeySecretAuth = new GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthOutputReference(this, "sqs_v2_access_key_secret_auth");
  public get sqsV2AccessKeySecretAuth() {
    return this._sqsV2AccessKeySecretAuth;
  }
  public putSqsV2AccessKeySecretAuth(value: GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuth) {
    this._sqsV2AccessKeySecretAuth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsV2AccessKeySecretAuthInput() {
    return this._sqsV2AccessKeySecretAuth.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAmazonSqsV2Settings {
  /**
  * Maximum File Age to ingest in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#max_lookback_days GoogleChronicleFeed#max_lookback_days}
  */
  readonly maxLookbackDays?: number;
  /**
  * Amazon Resource Name(ARN) of the queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#queue GoogleChronicleFeed#queue}
  */
  readonly queue: string;
  /**
  * S3 URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#s3_uri GoogleChronicleFeed#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * Possible values:
  * NEVER
  * ON_SUCCESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#source_deletion_option GoogleChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication: GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthentication;
}

export function googleChronicleFeedDetailsAmazonSqsV2SettingsToTerraform(struct?: GoogleChronicleFeedDetailsAmazonSqsV2SettingsOutputReference | GoogleChronicleFeedDetailsAmazonSqsV2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_lookback_days: cdktf.numberToTerraform(struct!.maxLookbackDays),
    queue: cdktf.stringToTerraform(struct!.queue),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
    source_deletion_option: cdktf.stringToTerraform(struct!.sourceDeletionOption),
    authentication: googleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsAmazonSqsV2SettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsAmazonSqsV2SettingsOutputReference | GoogleChronicleFeedDetailsAmazonSqsV2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_lookback_days: {
      value: cdktf.numberToHclTerraform(struct!.maxLookbackDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue: {
      value: cdktf.stringToHclTerraform(struct!.queue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_deletion_option: {
      value: cdktf.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAmazonSqsV2SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAmazonSqsV2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxLookbackDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLookbackDays = this._maxLookbackDays;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAmazonSqsV2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxLookbackDays = undefined;
      this._queue = undefined;
      this._s3Uri = undefined;
      this._sourceDeletionOption = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxLookbackDays = value.maxLookbackDays;
      this._queue = value.queue;
      this._s3Uri = value.s3Uri;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._authentication.internalValue = value.authentication;
    }
  }

  // chronicle_service_account - computed: true, optional: false, required: false
  public get chronicleServiceAccount() {
    return this.getStringAttribute('chronicle_service_account');
  }

  // max_lookback_days - computed: false, optional: true, required: false
  private _maxLookbackDays?: number; 
  public get maxLookbackDays() {
    return this.getNumberAttribute('max_lookback_days');
  }
  public set maxLookbackDays(value: number) {
    this._maxLookbackDays = value;
  }
  public resetMaxLookbackDays() {
    this._maxLookbackDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLookbackDaysInput() {
    return this._maxLookbackDays;
  }

  // queue - computed: false, optional: false, required: true
  private _queue?: string; 
  public get queue() {
    return this.getStringAttribute('queue');
  }
  public set queue(value: string) {
    this._queue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication = new GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsAmazonSqsV2SettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAnomaliSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret GoogleChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#user GoogleChronicleFeed#user}
  */
  readonly user?: string;
}

export function googleChronicleFeedDetailsAnomaliSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsAnomaliSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAnomaliSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsAnomaliSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsAnomaliSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAnomaliSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAnomaliSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAnomaliSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAnomaliSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface GoogleChronicleFeedDetailsAnomaliSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsAnomaliSettingsAuthentication;
}

export function googleChronicleFeedDetailsAnomaliSettingsToTerraform(struct?: GoogleChronicleFeedDetailsAnomaliSettingsOutputReference | GoogleChronicleFeedDetailsAnomaliSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: googleChronicleFeedDetailsAnomaliSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsAnomaliSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsAnomaliSettingsOutputReference | GoogleChronicleFeedDetailsAnomaliSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: googleChronicleFeedDetailsAnomaliSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAnomaliSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAnomaliSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAnomaliSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAnomaliSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsAnomaliSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsAnomaliSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAwsEc2HostsSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret GoogleChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#user GoogleChronicleFeed#user}
  */
  readonly user?: string;
}

export function googleChronicleFeedDetailsAwsEc2HostsSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsAwsEc2HostsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAwsEc2HostsSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsAwsEc2HostsSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsAwsEc2HostsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAwsEc2HostsSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAwsEc2HostsSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAwsEc2HostsSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAwsEc2HostsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface GoogleChronicleFeedDetailsAwsEc2HostsSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsAwsEc2HostsSettingsAuthentication;
}

export function googleChronicleFeedDetailsAwsEc2HostsSettingsToTerraform(struct?: GoogleChronicleFeedDetailsAwsEc2HostsSettingsOutputReference | GoogleChronicleFeedDetailsAwsEc2HostsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: googleChronicleFeedDetailsAwsEc2HostsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsAwsEc2HostsSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsAwsEc2HostsSettingsOutputReference | GoogleChronicleFeedDetailsAwsEc2HostsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: googleChronicleFeedDetailsAwsEc2HostsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAwsEc2HostsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAwsEc2HostsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAwsEc2HostsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAwsEc2HostsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsAwsEc2HostsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsAwsEc2HostsSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAwsEc2InstancesSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret GoogleChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#user GoogleChronicleFeed#user}
  */
  readonly user?: string;
}

export function googleChronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAwsEc2InstancesSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAwsEc2InstancesSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAwsEc2InstancesSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAwsEc2InstancesSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface GoogleChronicleFeedDetailsAwsEc2InstancesSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsAwsEc2InstancesSettingsAuthentication;
}

export function googleChronicleFeedDetailsAwsEc2InstancesSettingsToTerraform(struct?: GoogleChronicleFeedDetailsAwsEc2InstancesSettingsOutputReference | GoogleChronicleFeedDetailsAwsEc2InstancesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: googleChronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsAwsEc2InstancesSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsAwsEc2InstancesSettingsOutputReference | GoogleChronicleFeedDetailsAwsEc2InstancesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: googleChronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAwsEc2InstancesSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAwsEc2InstancesSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAwsEc2InstancesSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsAwsEc2InstancesSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAwsEc2VpcsSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret GoogleChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#user GoogleChronicleFeed#user}
  */
  readonly user?: string;
}

export function googleChronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAwsEc2VpcsSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAwsEc2VpcsSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAwsEc2VpcsSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAwsEc2VpcsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface GoogleChronicleFeedDetailsAwsEc2VpcsSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsAwsEc2VpcsSettingsAuthentication;
}

export function googleChronicleFeedDetailsAwsEc2VpcsSettingsToTerraform(struct?: GoogleChronicleFeedDetailsAwsEc2VpcsSettingsOutputReference | GoogleChronicleFeedDetailsAwsEc2VpcsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: googleChronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsAwsEc2VpcsSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsAwsEc2VpcsSettingsOutputReference | GoogleChronicleFeedDetailsAwsEc2VpcsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: googleChronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAwsEc2VpcsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAwsEc2VpcsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAwsEc2VpcsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsAwsEc2VpcsSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAwsIamSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret GoogleChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#user GoogleChronicleFeed#user}
  */
  readonly user?: string;
}

export function googleChronicleFeedDetailsAwsIamSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsAwsIamSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAwsIamSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsAwsIamSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsAwsIamSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAwsIamSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAwsIamSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAwsIamSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAwsIamSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface GoogleChronicleFeedDetailsAwsIamSettings {
  /**
  * Supported AWS IAM api type.
  * Possible values:
  * USERS
  * ROLES
  * GROUPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#api_type GoogleChronicleFeed#api_type}
  */
  readonly apiType?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsAwsIamSettingsAuthentication;
}

export function googleChronicleFeedDetailsAwsIamSettingsToTerraform(struct?: GoogleChronicleFeedDetailsAwsIamSettingsOutputReference | GoogleChronicleFeedDetailsAwsIamSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_type: cdktf.stringToTerraform(struct!.apiType),
    authentication: googleChronicleFeedDetailsAwsIamSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsAwsIamSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsAwsIamSettingsOutputReference | GoogleChronicleFeedDetailsAwsIamSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_type: {
      value: cdktf.stringToHclTerraform(struct!.apiType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsAwsIamSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAwsIamSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAwsIamSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAwsIamSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiType !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiType = this._apiType;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAwsIamSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiType = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiType = value.apiType;
      this._authentication.internalValue = value.authentication;
    }
  }

  // api_type - computed: false, optional: true, required: false
  private _apiType?: string; 
  public get apiType() {
    return this.getStringAttribute('api_type');
  }
  public set apiType(value: string) {
    this._apiType = value;
  }
  public resetApiType() {
    this._apiType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTypeInput() {
    return this._apiType;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsAwsIamSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsAwsIamSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAzureAdAuditSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_id GoogleChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_secret GoogleChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
}

export function googleChronicleFeedDetailsAzureAdAuditSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsAzureAdAuditSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAzureAdAuditSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function googleChronicleFeedDetailsAzureAdAuditSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsAzureAdAuditSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAzureAdAuditSettingsAuthentication): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAzureAdAuditSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAzureAdAuditSettingsAuthentication | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAzureAdAuditSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface GoogleChronicleFeedDetailsAzureAdAuditSettings {
  /**
  * API Auth Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#auth_endpoint GoogleChronicleFeed#auth_endpoint}
  */
  readonly authEndpoint?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#tenant_id GoogleChronicleFeed#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsAzureAdAuditSettingsAuthentication;
}

export function googleChronicleFeedDetailsAzureAdAuditSettingsToTerraform(struct?: GoogleChronicleFeedDetailsAzureAdAuditSettingsOutputReference | GoogleChronicleFeedDetailsAzureAdAuditSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_endpoint: cdktf.stringToTerraform(struct!.authEndpoint),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    authentication: googleChronicleFeedDetailsAzureAdAuditSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsAzureAdAuditSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsAzureAdAuditSettingsOutputReference | GoogleChronicleFeedDetailsAzureAdAuditSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authEndpoint),
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
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsAzureAdAuditSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAzureAdAuditSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAzureAdAuditSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAzureAdAuditSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAzureAdAuditSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authEndpoint = undefined;
      this._hostname = undefined;
      this._tenantId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authEndpoint = value.authEndpoint;
      this._hostname = value.hostname;
      this._tenantId = value.tenantId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // auth_endpoint - computed: false, optional: true, required: false
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  public resetAuthEndpoint() {
    this._authEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsAzureAdAuditSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsAzureAdAuditSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAzureAdContextSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_id GoogleChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_secret GoogleChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
}

export function googleChronicleFeedDetailsAzureAdContextSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsAzureAdContextSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAzureAdContextSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function googleChronicleFeedDetailsAzureAdContextSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsAzureAdContextSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAzureAdContextSettingsAuthentication): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAzureAdContextSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAzureAdContextSettingsAuthentication | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAzureAdContextSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface GoogleChronicleFeedDetailsAzureAdContextSettings {
  /**
  * API Auth Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#auth_endpoint GoogleChronicleFeed#auth_endpoint}
  */
  readonly authEndpoint?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Whether to retrieve device information in user context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#retrieve_devices GoogleChronicleFeed#retrieve_devices}
  */
  readonly retrieveDevices?: boolean | cdktf.IResolvable;
  /**
  * Whether to retrieve group information in user context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#retrieve_groups GoogleChronicleFeed#retrieve_groups}
  */
  readonly retrieveGroups?: boolean | cdktf.IResolvable;
  /**
  * Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#tenant_id GoogleChronicleFeed#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsAzureAdContextSettingsAuthentication;
}

export function googleChronicleFeedDetailsAzureAdContextSettingsToTerraform(struct?: GoogleChronicleFeedDetailsAzureAdContextSettingsOutputReference | GoogleChronicleFeedDetailsAzureAdContextSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_endpoint: cdktf.stringToTerraform(struct!.authEndpoint),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    retrieve_devices: cdktf.booleanToTerraform(struct!.retrieveDevices),
    retrieve_groups: cdktf.booleanToTerraform(struct!.retrieveGroups),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    authentication: googleChronicleFeedDetailsAzureAdContextSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsAzureAdContextSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsAzureAdContextSettingsOutputReference | GoogleChronicleFeedDetailsAzureAdContextSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authEndpoint),
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
    retrieve_devices: {
      value: cdktf.booleanToHclTerraform(struct!.retrieveDevices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retrieve_groups: {
      value: cdktf.booleanToHclTerraform(struct!.retrieveGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsAzureAdContextSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAzureAdContextSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAzureAdContextSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAzureAdContextSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._retrieveDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrieveDevices = this._retrieveDevices;
    }
    if (this._retrieveGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrieveGroups = this._retrieveGroups;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAzureAdContextSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authEndpoint = undefined;
      this._hostname = undefined;
      this._retrieveDevices = undefined;
      this._retrieveGroups = undefined;
      this._tenantId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authEndpoint = value.authEndpoint;
      this._hostname = value.hostname;
      this._retrieveDevices = value.retrieveDevices;
      this._retrieveGroups = value.retrieveGroups;
      this._tenantId = value.tenantId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // auth_endpoint - computed: false, optional: true, required: false
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  public resetAuthEndpoint() {
    this._authEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // retrieve_devices - computed: false, optional: true, required: false
  private _retrieveDevices?: boolean | cdktf.IResolvable; 
  public get retrieveDevices() {
    return this.getBooleanAttribute('retrieve_devices');
  }
  public set retrieveDevices(value: boolean | cdktf.IResolvable) {
    this._retrieveDevices = value;
  }
  public resetRetrieveDevices() {
    this._retrieveDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveDevicesInput() {
    return this._retrieveDevices;
  }

  // retrieve_groups - computed: false, optional: true, required: false
  private _retrieveGroups?: boolean | cdktf.IResolvable; 
  public get retrieveGroups() {
    return this.getBooleanAttribute('retrieve_groups');
  }
  public set retrieveGroups(value: boolean | cdktf.IResolvable) {
    this._retrieveGroups = value;
  }
  public resetRetrieveGroups() {
    this._retrieveGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveGroupsInput() {
    return this._retrieveGroups;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsAzureAdContextSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsAzureAdContextSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAzureAdSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_id GoogleChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_secret GoogleChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
}

export function googleChronicleFeedDetailsAzureAdSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsAzureAdSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAzureAdSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function googleChronicleFeedDetailsAzureAdSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsAzureAdSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAzureAdSettingsAuthentication): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAzureAdSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAzureAdSettingsAuthentication | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAzureAdSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface GoogleChronicleFeedDetailsAzureAdSettings {
  /**
  * API Auth Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#auth_endpoint GoogleChronicleFeed#auth_endpoint}
  */
  readonly authEndpoint?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#tenant_id GoogleChronicleFeed#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsAzureAdSettingsAuthentication;
}

export function googleChronicleFeedDetailsAzureAdSettingsToTerraform(struct?: GoogleChronicleFeedDetailsAzureAdSettingsOutputReference | GoogleChronicleFeedDetailsAzureAdSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_endpoint: cdktf.stringToTerraform(struct!.authEndpoint),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    authentication: googleChronicleFeedDetailsAzureAdSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsAzureAdSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsAzureAdSettingsOutputReference | GoogleChronicleFeedDetailsAzureAdSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authEndpoint),
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
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsAzureAdSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAzureAdSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAzureAdSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAzureAdSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAzureAdSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authEndpoint = undefined;
      this._hostname = undefined;
      this._tenantId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authEndpoint = value.authEndpoint;
      this._hostname = value.hostname;
      this._tenantId = value.tenantId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // auth_endpoint - computed: false, optional: true, required: false
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  public resetAuthEndpoint() {
    this._authEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsAzureAdSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsAzureAdSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAzureBlobStoreSettingsAuthentication {
  /**
  * SAS Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#sas_token GoogleChronicleFeed#sas_token}
  */
  readonly sasToken?: string;
  /**
  * Shared Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#shared_key GoogleChronicleFeed#shared_key}
  */
  readonly sharedKey?: string;
}

export function googleChronicleFeedDetailsAzureBlobStoreSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsAzureBlobStoreSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAzureBlobStoreSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sas_token: cdktf.stringToTerraform(struct!.sasToken),
    shared_key: cdktf.stringToTerraform(struct!.sharedKey),
  }
}


export function googleChronicleFeedDetailsAzureBlobStoreSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsAzureBlobStoreSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAzureBlobStoreSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sas_token: {
      value: cdktf.stringToHclTerraform(struct!.sasToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_key: {
      value: cdktf.stringToHclTerraform(struct!.sharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAzureBlobStoreSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAzureBlobStoreSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sasToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasToken = this._sasToken;
    }
    if (this._sharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedKey = this._sharedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAzureBlobStoreSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sasToken = undefined;
      this._sharedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sasToken = value.sasToken;
      this._sharedKey = value.sharedKey;
    }
  }

  // sas_token - computed: false, optional: true, required: false
  private _sasToken?: string; 
  public get sasToken() {
    return this.getStringAttribute('sas_token');
  }
  public set sasToken(value: string) {
    this._sasToken = value;
  }
  public resetSasToken() {
    this._sasToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTokenInput() {
    return this._sasToken;
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
  }
}
export interface GoogleChronicleFeedDetailsAzureBlobStoreSettings {
  /**
  * Azure URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#azure_uri GoogleChronicleFeed#azure_uri}
  */
  readonly azureUri?: string;
  /**
  * Possible values:
  * SOURCE_DELETION_NEVER
  * SOURCE_DELETION_ON_SUCCESS
  * SOURCE_DELETION_ON_SUCCESS_FILES_ONLY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#source_deletion_option GoogleChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
  /**
  * Possible values:
  * FILES
  * FOLDERS
  * FOLDERS_RECURSIVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#source_type GoogleChronicleFeed#source_type}
  */
  readonly sourceType?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsAzureBlobStoreSettingsAuthentication;
}

export function googleChronicleFeedDetailsAzureBlobStoreSettingsToTerraform(struct?: GoogleChronicleFeedDetailsAzureBlobStoreSettingsOutputReference | GoogleChronicleFeedDetailsAzureBlobStoreSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_uri: cdktf.stringToTerraform(struct!.azureUri),
    source_deletion_option: cdktf.stringToTerraform(struct!.sourceDeletionOption),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    authentication: googleChronicleFeedDetailsAzureBlobStoreSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsAzureBlobStoreSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsAzureBlobStoreSettingsOutputReference | GoogleChronicleFeedDetailsAzureBlobStoreSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_uri: {
      value: cdktf.stringToHclTerraform(struct!.azureUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_deletion_option: {
      value: cdktf.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsAzureBlobStoreSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAzureBlobStoreSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAzureBlobStoreSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAzureBlobStoreSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureUri = this._azureUri;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAzureBlobStoreSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureUri = undefined;
      this._sourceDeletionOption = undefined;
      this._sourceType = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureUri = value.azureUri;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._sourceType = value.sourceType;
      this._authentication.internalValue = value.authentication;
    }
  }

  // azure_uri - computed: false, optional: true, required: false
  private _azureUri?: string; 
  public get azureUri() {
    return this.getStringAttribute('azure_uri');
  }
  public set azureUri(value: string) {
    this._azureUri = value;
  }
  public resetAzureUri() {
    this._azureUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureUriInput() {
    return this._azureUri;
  }

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsAzureBlobStoreSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsAzureBlobStoreSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederation {
  /**
  * OAuth client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_id GoogleChronicleFeed#client_id}
  */
  readonly clientId: string;
  /**
  * Subject ID of the Azure subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#subject_id GoogleChronicleFeed#subject_id}
  */
  readonly subjectId: string;
  /**
  * Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#tenant_id GoogleChronicleFeed#tenant_id}
  */
  readonly tenantId: string;
}

export function googleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationToTerraform(struct?: GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationOutputReference | GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    subject_id: cdktf.stringToTerraform(struct!.subjectId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function googleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationToHclTerraform(struct?: GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationOutputReference | GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederation): any {
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
    subject_id: {
      value: cdktf.stringToHclTerraform(struct!.subjectId),
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

export class GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._subjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectId = this._subjectId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._subjectId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._subjectId = value.subjectId;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // subject_id - computed: false, optional: false, required: true
  private _subjectId?: string; 
  public get subjectId() {
    return this.getStringAttribute('subject_id');
  }
  public set subjectId(value: string) {
    this._subjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectIdInput() {
    return this._subjectId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthentication {
  /**
  * Access Key also known as shared key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#access_key GoogleChronicleFeed#access_key}
  */
  readonly accessKey: string;
  /**
  * SAS Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#sas_token GoogleChronicleFeed#sas_token}
  */
  readonly sasToken: string;
  /**
  * azure_v2_workload_identity_federation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#azure_v2_workload_identity_federation GoogleChronicleFeed#azure_v2_workload_identity_federation}
  */
  readonly azureV2WorkloadIdentityFederation: GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederation;
}

export function googleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    sas_token: cdktf.stringToTerraform(struct!.sasToken),
    azure_v2_workload_identity_federation: googleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationToTerraform(struct!.azureV2WorkloadIdentityFederation),
  }
}


export function googleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sas_token: {
      value: cdktf.stringToHclTerraform(struct!.sasToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_v2_workload_identity_federation: {
      value: googleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationToHclTerraform(struct!.azureV2WorkloadIdentityFederation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._sasToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasToken = this._sasToken;
    }
    if (this._azureV2WorkloadIdentityFederation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureV2WorkloadIdentityFederation = this._azureV2WorkloadIdentityFederation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._sasToken = undefined;
      this._azureV2WorkloadIdentityFederation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._sasToken = value.sasToken;
      this._azureV2WorkloadIdentityFederation.internalValue = value.azureV2WorkloadIdentityFederation;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // sas_token - computed: false, optional: false, required: true
  private _sasToken?: string; 
  public get sasToken() {
    return this.getStringAttribute('sas_token');
  }
  public set sasToken(value: string) {
    this._sasToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTokenInput() {
    return this._sasToken;
  }

  // azure_v2_workload_identity_federation - computed: false, optional: false, required: true
  private _azureV2WorkloadIdentityFederation = new GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationOutputReference(this, "azure_v2_workload_identity_federation");
  public get azureV2WorkloadIdentityFederation() {
    return this._azureV2WorkloadIdentityFederation;
  }
  public putAzureV2WorkloadIdentityFederation(value: GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederation) {
    this._azureV2WorkloadIdentityFederation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureV2WorkloadIdentityFederationInput() {
    return this._azureV2WorkloadIdentityFederation.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAzureBlobStoreV2Settings {
  /**
  * Azure URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#azure_uri GoogleChronicleFeed#azure_uri}
  */
  readonly azureUri: string;
  /**
  * Maximum File Age to ingest in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#max_lookback_days GoogleChronicleFeed#max_lookback_days}
  */
  readonly maxLookbackDays?: number;
  /**
  * Possible values:
  * NEVER
  * ON_SUCCESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#source_deletion_option GoogleChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication: GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthentication;
}

export function googleChronicleFeedDetailsAzureBlobStoreV2SettingsToTerraform(struct?: GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsOutputReference | GoogleChronicleFeedDetailsAzureBlobStoreV2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_uri: cdktf.stringToTerraform(struct!.azureUri),
    max_lookback_days: cdktf.numberToTerraform(struct!.maxLookbackDays),
    source_deletion_option: cdktf.stringToTerraform(struct!.sourceDeletionOption),
    authentication: googleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsAzureBlobStoreV2SettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsOutputReference | GoogleChronicleFeedDetailsAzureBlobStoreV2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_uri: {
      value: cdktf.stringToHclTerraform(struct!.azureUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_lookback_days: {
      value: cdktf.numberToHclTerraform(struct!.maxLookbackDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_deletion_option: {
      value: cdktf.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAzureBlobStoreV2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureUri = this._azureUri;
    }
    if (this._maxLookbackDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLookbackDays = this._maxLookbackDays;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAzureBlobStoreV2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureUri = undefined;
      this._maxLookbackDays = undefined;
      this._sourceDeletionOption = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureUri = value.azureUri;
      this._maxLookbackDays = value.maxLookbackDays;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._authentication.internalValue = value.authentication;
    }
  }

  // azure_uri - computed: false, optional: false, required: true
  private _azureUri?: string; 
  public get azureUri() {
    return this.getStringAttribute('azure_uri');
  }
  public set azureUri(value: string) {
    this._azureUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureUriInput() {
    return this._azureUri;
  }

  // chronicle_service_account - computed: true, optional: false, required: false
  public get chronicleServiceAccount() {
    return this.getStringAttribute('chronicle_service_account');
  }

  // max_lookback_days - computed: false, optional: true, required: false
  private _maxLookbackDays?: number; 
  public get maxLookbackDays() {
    return this.getNumberAttribute('max_lookback_days');
  }
  public set maxLookbackDays(value: number) {
    this._maxLookbackDays = value;
  }
  public resetMaxLookbackDays() {
    this._maxLookbackDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLookbackDaysInput() {
    return this._maxLookbackDays;
  }

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication = new GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsAzureEventHubSettings {
  /**
  * SAS token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#azure_sas_token GoogleChronicleFeed#azure_sas_token}
  */
  readonly azureSasToken?: string;
  /**
  * Blob store connection string for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#azure_storage_connection_string GoogleChronicleFeed#azure_storage_connection_string}
  */
  readonly azureStorageConnectionString?: string;
  /**
  * Blob storage container name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#azure_storage_container GoogleChronicleFeed#azure_storage_container}
  */
  readonly azureStorageContainer?: string;
  /**
  * Event hub consumer group to read from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#consumer_group GoogleChronicleFeed#consumer_group}
  */
  readonly consumerGroup: string;
  /**
  * Event hub connection string for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#event_hub_connection_string GoogleChronicleFeed#event_hub_connection_string}
  */
  readonly eventHubConnectionString: string;
  /**
  * Event hub to read from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#name GoogleChronicleFeed#name}
  */
  readonly name: string;
}

export function googleChronicleFeedDetailsAzureEventHubSettingsToTerraform(struct?: GoogleChronicleFeedDetailsAzureEventHubSettingsOutputReference | GoogleChronicleFeedDetailsAzureEventHubSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_sas_token: cdktf.stringToTerraform(struct!.azureSasToken),
    azure_storage_connection_string: cdktf.stringToTerraform(struct!.azureStorageConnectionString),
    azure_storage_container: cdktf.stringToTerraform(struct!.azureStorageContainer),
    consumer_group: cdktf.stringToTerraform(struct!.consumerGroup),
    event_hub_connection_string: cdktf.stringToTerraform(struct!.eventHubConnectionString),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleChronicleFeedDetailsAzureEventHubSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsAzureEventHubSettingsOutputReference | GoogleChronicleFeedDetailsAzureEventHubSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_sas_token: {
      value: cdktf.stringToHclTerraform(struct!.azureSasToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_storage_connection_string: {
      value: cdktf.stringToHclTerraform(struct!.azureStorageConnectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_storage_container: {
      value: cdktf.stringToHclTerraform(struct!.azureStorageContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_group: {
      value: cdktf.stringToHclTerraform(struct!.consumerGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_hub_connection_string: {
      value: cdktf.stringToHclTerraform(struct!.eventHubConnectionString),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAzureEventHubSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAzureEventHubSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureSasToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSasToken = this._azureSasToken;
    }
    if (this._azureStorageConnectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStorageConnectionString = this._azureStorageConnectionString;
    }
    if (this._azureStorageContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStorageContainer = this._azureStorageContainer;
    }
    if (this._consumerGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroup = this._consumerGroup;
    }
    if (this._eventHubConnectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventHubConnectionString = this._eventHubConnectionString;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAzureEventHubSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureSasToken = undefined;
      this._azureStorageConnectionString = undefined;
      this._azureStorageContainer = undefined;
      this._consumerGroup = undefined;
      this._eventHubConnectionString = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureSasToken = value.azureSasToken;
      this._azureStorageConnectionString = value.azureStorageConnectionString;
      this._azureStorageContainer = value.azureStorageContainer;
      this._consumerGroup = value.consumerGroup;
      this._eventHubConnectionString = value.eventHubConnectionString;
      this._name = value.name;
    }
  }

  // azure_sas_token - computed: false, optional: true, required: false
  private _azureSasToken?: string; 
  public get azureSasToken() {
    return this.getStringAttribute('azure_sas_token');
  }
  public set azureSasToken(value: string) {
    this._azureSasToken = value;
  }
  public resetAzureSasToken() {
    this._azureSasToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSasTokenInput() {
    return this._azureSasToken;
  }

  // azure_storage_connection_string - computed: false, optional: true, required: false
  private _azureStorageConnectionString?: string; 
  public get azureStorageConnectionString() {
    return this.getStringAttribute('azure_storage_connection_string');
  }
  public set azureStorageConnectionString(value: string) {
    this._azureStorageConnectionString = value;
  }
  public resetAzureStorageConnectionString() {
    this._azureStorageConnectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageConnectionStringInput() {
    return this._azureStorageConnectionString;
  }

  // azure_storage_container - computed: false, optional: true, required: false
  private _azureStorageContainer?: string; 
  public get azureStorageContainer() {
    return this.getStringAttribute('azure_storage_container');
  }
  public set azureStorageContainer(value: string) {
    this._azureStorageContainer = value;
  }
  public resetAzureStorageContainer() {
    this._azureStorageContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageContainerInput() {
    return this._azureStorageContainer;
  }

  // consumer_group - computed: false, optional: false, required: true
  private _consumerGroup?: string; 
  public get consumerGroup() {
    return this.getStringAttribute('consumer_group');
  }
  public set consumerGroup(value: string) {
    this._consumerGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupInput() {
    return this._consumerGroup;
  }

  // event_hub_connection_string - computed: false, optional: false, required: true
  private _eventHubConnectionString?: string; 
  public get eventHubConnectionString() {
    return this.getStringAttribute('event_hub_connection_string');
  }
  public set eventHubConnectionString(value: string) {
    this._eventHubConnectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubConnectionStringInput() {
    return this._eventHubConnectionString;
  }

  // event_hub_namespace - computed: true, optional: false, required: false
  public get eventHubNamespace() {
    return this.getStringAttribute('event_hub_namespace');
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
}
export interface GoogleChronicleFeedDetailsAzureMdmIntuneSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_id GoogleChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_secret GoogleChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
}

export function googleChronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAzureMdmIntuneSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function googleChronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsAzureMdmIntuneSettingsAuthentication): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAzureMdmIntuneSettingsAuthentication | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAzureMdmIntuneSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface GoogleChronicleFeedDetailsAzureMdmIntuneSettings {
  /**
  * API Auth Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#auth_endpoint GoogleChronicleFeed#auth_endpoint}
  */
  readonly authEndpoint?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#tenant_id GoogleChronicleFeed#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsAzureMdmIntuneSettingsAuthentication;
}

export function googleChronicleFeedDetailsAzureMdmIntuneSettingsToTerraform(struct?: GoogleChronicleFeedDetailsAzureMdmIntuneSettingsOutputReference | GoogleChronicleFeedDetailsAzureMdmIntuneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_endpoint: cdktf.stringToTerraform(struct!.authEndpoint),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    authentication: googleChronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsAzureMdmIntuneSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsAzureMdmIntuneSettingsOutputReference | GoogleChronicleFeedDetailsAzureMdmIntuneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authEndpoint),
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
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsAzureMdmIntuneSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsAzureMdmIntuneSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsAzureMdmIntuneSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authEndpoint = undefined;
      this._hostname = undefined;
      this._tenantId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authEndpoint = value.authEndpoint;
      this._hostname = value.hostname;
      this._tenantId = value.tenantId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // auth_endpoint - computed: false, optional: true, required: false
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  public resetAuthEndpoint() {
    this._authEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsAzureMdmIntuneSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsCloudPassageSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret GoogleChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#user GoogleChronicleFeed#user}
  */
  readonly user?: string;
}

export function googleChronicleFeedDetailsCloudPassageSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsCloudPassageSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsCloudPassageSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsCloudPassageSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsCloudPassageSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsCloudPassageSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsCloudPassageSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsCloudPassageSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsCloudPassageSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface GoogleChronicleFeedDetailsCloudPassageSettings {
  /**
  * Event types filter for the events API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#event_types GoogleChronicleFeed#event_types}
  */
  readonly eventTypes?: string[];
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsCloudPassageSettingsAuthentication;
}

export function googleChronicleFeedDetailsCloudPassageSettingsToTerraform(struct?: GoogleChronicleFeedDetailsCloudPassageSettingsOutputReference | GoogleChronicleFeedDetailsCloudPassageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventTypes),
    authentication: googleChronicleFeedDetailsCloudPassageSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsCloudPassageSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsCloudPassageSettingsOutputReference | GoogleChronicleFeedDetailsCloudPassageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    authentication: {
      value: googleChronicleFeedDetailsCloudPassageSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsCloudPassageSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsCloudPassageSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsCloudPassageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTypes = this._eventTypes;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsCloudPassageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventTypes = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventTypes = value.eventTypes;
      this._authentication.internalValue = value.authentication;
    }
  }

  // event_types - computed: false, optional: true, required: false
  private _eventTypes?: string[]; 
  public get eventTypes() {
    return this.getListAttribute('event_types');
  }
  public set eventTypes(value: string[]) {
    this._eventTypes = value;
  }
  public resetEventTypes() {
    this._eventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypesInput() {
    return this._eventTypes;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsCloudPassageSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsCloudPassageSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#key GoogleChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#value GoogleChronicleFeed#value}
  */
  readonly value?: string;
}

export function googleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleFeedDetailsCortexXdrSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#header_key_values GoogleChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable;
}

export function googleChronicleFeedDetailsCortexXdrSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsCortexXdrSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_key_values: cdktf.listMapper(googleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function googleChronicleFeedDetailsCortexXdrSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsCortexXdrSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_key_values: {
      value: cdktf.listMapperHcl(googleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsCortexXdrSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsCortexXdrSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsCortexXdrSettings {
  /**
  * API Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#endpoint GoogleChronicleFeed#endpoint}
  */
  readonly endpoint?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsCortexXdrSettingsAuthentication;
}

export function googleChronicleFeedDetailsCortexXdrSettingsToTerraform(struct?: GoogleChronicleFeedDetailsCortexXdrSettingsOutputReference | GoogleChronicleFeedDetailsCortexXdrSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    authentication: googleChronicleFeedDetailsCortexXdrSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsCortexXdrSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsCortexXdrSettingsOutputReference | GoogleChronicleFeedDetailsCortexXdrSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
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
    authentication: {
      value: googleChronicleFeedDetailsCortexXdrSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsCortexXdrSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsCortexXdrSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsCortexXdrSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsCortexXdrSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsCortexXdrSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_id GoogleChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_secret GoogleChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#token_endpoint GoogleChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
}

export function googleChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function googleChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthentication): any {
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
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthentication | undefined {
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
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tokenEndpoint = value.tokenEndpoint;
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

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface GoogleChronicleFeedDetailsCrowdstrikeAlertsSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname: string;
  /**
  * Ingestion Type.
  * Possible values:
  * BRING_ALL_ALERTS
  * BRING_ONLY_NEW_ALERTS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#ingestion_type GoogleChronicleFeed#ingestion_type}
  */
  readonly ingestionType?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication: GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthentication;
}

export function googleChronicleFeedDetailsCrowdstrikeAlertsSettingsToTerraform(struct?: GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsOutputReference | GoogleChronicleFeedDetailsCrowdstrikeAlertsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ingestion_type: cdktf.stringToTerraform(struct!.ingestionType),
    authentication: googleChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsCrowdstrikeAlertsSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsOutputReference | GoogleChronicleFeedDetailsCrowdstrikeAlertsSettings): any {
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
    ingestion_type: {
      value: cdktf.stringToHclTerraform(struct!.ingestionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsCrowdstrikeAlertsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ingestionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionType = this._ingestionType;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsCrowdstrikeAlertsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._ingestionType = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._ingestionType = value.ingestionType;
      this._authentication.internalValue = value.authentication;
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

  // ingestion_type - computed: false, optional: true, required: false
  private _ingestionType?: string; 
  public get ingestionType() {
    return this.getStringAttribute('ingestion_type');
  }
  public set ingestionType(value: string) {
    this._ingestionType = value;
  }
  public resetIngestionType() {
    this._ingestionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionTypeInput() {
    return this._ingestionType;
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication = new GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_id GoogleChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_secret GoogleChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#token_endpoint GoogleChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
}

export function googleChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function googleChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthentication): any {
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
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthentication | undefined {
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
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tokenEndpoint = value.tokenEndpoint;
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

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface GoogleChronicleFeedDetailsCrowdstrikeDetectsSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Ingestion Type.
  * Possible values:
  * BRING_ONLY_NEW_DETECTIONS
  * BRING_ALL_DETECTIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#ingestion_type GoogleChronicleFeed#ingestion_type}
  */
  readonly ingestionType?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthentication;
}

export function googleChronicleFeedDetailsCrowdstrikeDetectsSettingsToTerraform(struct?: GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsOutputReference | GoogleChronicleFeedDetailsCrowdstrikeDetectsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ingestion_type: cdktf.stringToTerraform(struct!.ingestionType),
    authentication: googleChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsCrowdstrikeDetectsSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsOutputReference | GoogleChronicleFeedDetailsCrowdstrikeDetectsSettings): any {
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
    ingestion_type: {
      value: cdktf.stringToHclTerraform(struct!.ingestionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsCrowdstrikeDetectsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ingestionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionType = this._ingestionType;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsCrowdstrikeDetectsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._ingestionType = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._ingestionType = value.ingestionType;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ingestion_type - computed: false, optional: true, required: false
  private _ingestionType?: string; 
  public get ingestionType() {
    return this.getStringAttribute('ingestion_type');
  }
  public set ingestionType(value: string) {
    this._ingestionType = value;
  }
  public resetIngestionType() {
    this._ingestionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionTypeInput() {
    return this._ingestionType;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#key GoogleChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#value GoogleChronicleFeed#value}
  */
  readonly value?: string;
}

export function googleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#header_key_values GoogleChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable;
}

export function googleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_key_values: cdktf.listMapper(googleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function googleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_key_values: {
      value: cdktf.listMapperHcl(googleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsDummyLogTypeSettings {
  /**
  * Full API Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#api_endpoint GoogleChronicleFeed#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthentication;
}

export function googleChronicleFeedDetailsDummyLogTypeSettingsToTerraform(struct?: GoogleChronicleFeedDetailsDummyLogTypeSettingsOutputReference | GoogleChronicleFeedDetailsDummyLogTypeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint: cdktf.stringToTerraform(struct!.apiEndpoint),
    authentication: googleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsDummyLogTypeSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsDummyLogTypeSettingsOutputReference | GoogleChronicleFeedDetailsDummyLogTypeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsDummyLogTypeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsDummyLogTypeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsDummyLogTypeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiEndpoint = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiEndpoint = value.apiEndpoint;
      this._authentication.internalValue = value.authentication;
    }
  }

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }
  public set apiEndpoint(value: string) {
    this._apiEndpoint = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsDummyLogTypeSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsDuoAuthSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret GoogleChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#user GoogleChronicleFeed#user}
  */
  readonly user?: string;
}

export function googleChronicleFeedDetailsDuoAuthSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsDuoAuthSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsDuoAuthSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsDuoAuthSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsDuoAuthSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsDuoAuthSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsDuoAuthSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsDuoAuthSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsDuoAuthSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface GoogleChronicleFeedDetailsDuoAuthSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsDuoAuthSettingsAuthentication;
}

export function googleChronicleFeedDetailsDuoAuthSettingsToTerraform(struct?: GoogleChronicleFeedDetailsDuoAuthSettingsOutputReference | GoogleChronicleFeedDetailsDuoAuthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    authentication: googleChronicleFeedDetailsDuoAuthSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsDuoAuthSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsDuoAuthSettingsOutputReference | GoogleChronicleFeedDetailsDuoAuthSettings): any {
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
    authentication: {
      value: googleChronicleFeedDetailsDuoAuthSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsDuoAuthSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsDuoAuthSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsDuoAuthSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsDuoAuthSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsDuoAuthSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsDuoAuthSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsDuoUserContextSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret GoogleChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#user GoogleChronicleFeed#user}
  */
  readonly user?: string;
}

export function googleChronicleFeedDetailsDuoUserContextSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsDuoUserContextSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsDuoUserContextSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsDuoUserContextSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsDuoUserContextSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsDuoUserContextSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsDuoUserContextSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsDuoUserContextSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsDuoUserContextSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface GoogleChronicleFeedDetailsDuoUserContextSettings {
  /**
  * API hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsDuoUserContextSettingsAuthentication;
}

export function googleChronicleFeedDetailsDuoUserContextSettingsToTerraform(struct?: GoogleChronicleFeedDetailsDuoUserContextSettingsOutputReference | GoogleChronicleFeedDetailsDuoUserContextSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    authentication: googleChronicleFeedDetailsDuoUserContextSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsDuoUserContextSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsDuoUserContextSettingsOutputReference | GoogleChronicleFeedDetailsDuoUserContextSettings): any {
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
    authentication: {
      value: googleChronicleFeedDetailsDuoUserContextSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsDuoUserContextSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsDuoUserContextSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsDuoUserContextSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsDuoUserContextSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsDuoUserContextSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsDuoUserContextSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsFoxItStixSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret GoogleChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#user GoogleChronicleFeed#user}
  */
  readonly user?: string;
}

export function googleChronicleFeedDetailsFoxItStixSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsFoxItStixSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsFoxItStixSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsFoxItStixSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsFoxItStixSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsFoxItStixSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsFoxItStixSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsFoxItStixSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsFoxItStixSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface GoogleChronicleFeedDetailsFoxItStixSettingsSsl {
  /**
  * The encoded private key. The string should be a private key in PEM format,
  * and should include the begin header and end footer lines. It may also
  * include newlines.
  * 
  * Example:
  * -----BEGIN RSA PRIVATE KEY-----
  * Proc-Type: 4,ENCRYPTED
  * DEK-Info: DES-EDE3-CBC,F23074E02CF47304
  * 
  * -----END RSA PRIVATE KEY-----
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#encoded_private_key GoogleChronicleFeed#encoded_private_key}
  */
  readonly encodedPrivateKey?: string;
  /**
  * The encoded SSL certificate. The string should be an SSL certificate in
  * PEM format, and should include the begin header and end footer lines. It
  * may also include newlines.
  * 
  * Example:
  * -----BEGIN CERTIFICATE-----
  * 
  * -----END CERTIFICATE-----
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#ssl_certificate GoogleChronicleFeed#ssl_certificate}
  */
  readonly sslCertificate?: string;
}

export function googleChronicleFeedDetailsFoxItStixSettingsSslToTerraform(struct?: GoogleChronicleFeedDetailsFoxItStixSettingsSslOutputReference | GoogleChronicleFeedDetailsFoxItStixSettingsSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoded_private_key: cdktf.stringToTerraform(struct!.encodedPrivateKey),
    ssl_certificate: cdktf.stringToTerraform(struct!.sslCertificate),
  }
}


export function googleChronicleFeedDetailsFoxItStixSettingsSslToHclTerraform(struct?: GoogleChronicleFeedDetailsFoxItStixSettingsSslOutputReference | GoogleChronicleFeedDetailsFoxItStixSettingsSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encoded_private_key: {
      value: cdktf.stringToHclTerraform(struct!.encodedPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsFoxItStixSettingsSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsFoxItStixSettingsSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encodedPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodedPrivateKey = this._encodedPrivateKey;
    }
    if (this._sslCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificate = this._sslCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsFoxItStixSettingsSsl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encodedPrivateKey = undefined;
      this._sslCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encodedPrivateKey = value.encodedPrivateKey;
      this._sslCertificate = value.sslCertificate;
    }
  }

  // encoded_private_key - computed: false, optional: true, required: false
  private _encodedPrivateKey?: string; 
  public get encodedPrivateKey() {
    return this.getStringAttribute('encoded_private_key');
  }
  public set encodedPrivateKey(value: string) {
    this._encodedPrivateKey = value;
  }
  public resetEncodedPrivateKey() {
    this._encodedPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodedPrivateKeyInput() {
    return this._encodedPrivateKey;
  }

  // ssl_certificate - computed: false, optional: true, required: false
  private _sslCertificate?: string; 
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }
  public set sslCertificate(value: string) {
    this._sslCertificate = value;
  }
  public resetSslCertificate() {
    this._sslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
  }
}
export interface GoogleChronicleFeedDetailsFoxItStixSettings {
  /**
  * Collection available at the poll service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#collection GoogleChronicleFeed#collection}
  */
  readonly collection?: string;
  /**
  * TAXII poll service URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#poll_service_uri GoogleChronicleFeed#poll_service_uri}
  */
  readonly pollServiceUri?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsFoxItStixSettingsAuthentication;
  /**
  * ssl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#ssl GoogleChronicleFeed#ssl}
  */
  readonly ssl?: GoogleChronicleFeedDetailsFoxItStixSettingsSsl;
}

export function googleChronicleFeedDetailsFoxItStixSettingsToTerraform(struct?: GoogleChronicleFeedDetailsFoxItStixSettingsOutputReference | GoogleChronicleFeedDetailsFoxItStixSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    poll_service_uri: cdktf.stringToTerraform(struct!.pollServiceUri),
    authentication: googleChronicleFeedDetailsFoxItStixSettingsAuthenticationToTerraform(struct!.authentication),
    ssl: googleChronicleFeedDetailsFoxItStixSettingsSslToTerraform(struct!.ssl),
  }
}


export function googleChronicleFeedDetailsFoxItStixSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsFoxItStixSettingsOutputReference | GoogleChronicleFeedDetailsFoxItStixSettings): any {
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
    poll_service_uri: {
      value: cdktf.stringToHclTerraform(struct!.pollServiceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsFoxItStixSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsFoxItStixSettingsAuthenticationList",
    },
    ssl: {
      value: googleChronicleFeedDetailsFoxItStixSettingsSslToHclTerraform(struct!.ssl),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsFoxItStixSettingsSslList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsFoxItStixSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsFoxItStixSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._pollServiceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollServiceUri = this._pollServiceUri;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._ssl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsFoxItStixSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collection = undefined;
      this._pollServiceUri = undefined;
      this._authentication.internalValue = undefined;
      this._ssl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collection = value.collection;
      this._pollServiceUri = value.pollServiceUri;
      this._authentication.internalValue = value.authentication;
      this._ssl.internalValue = value.ssl;
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

  // poll_service_uri - computed: false, optional: true, required: false
  private _pollServiceUri?: string; 
  public get pollServiceUri() {
    return this.getStringAttribute('poll_service_uri');
  }
  public set pollServiceUri(value: string) {
    this._pollServiceUri = value;
  }
  public resetPollServiceUri() {
    this._pollServiceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollServiceUriInput() {
    return this._pollServiceUri;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsFoxItStixSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsFoxItStixSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl = new GoogleChronicleFeedDetailsFoxItStixSettingsSslOutputReference(this, "ssl");
  public get ssl() {
    return this._ssl;
  }
  public putSsl(value: GoogleChronicleFeedDetailsFoxItStixSettingsSsl) {
    this._ssl.internalValue = value;
  }
  public resetSsl() {
    this._ssl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsGcsSettings {
  /**
  * Bucket URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#bucket_uri GoogleChronicleFeed#bucket_uri}
  */
  readonly bucketUri?: string;
  /**
  * Possible values:
  * SOURCE_DELETION_NEVER
  * SOURCE_DELETION_ON_SUCCESS
  * SOURCE_DELETION_ON_SUCCESS_FILES_ONLY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#source_deletion_option GoogleChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
  /**
  * Possible values:
  * FILES
  * FOLDERS
  * FOLDERS_RECURSIVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#source_type GoogleChronicleFeed#source_type}
  */
  readonly sourceType?: string;
}

export function googleChronicleFeedDetailsGcsSettingsToTerraform(struct?: GoogleChronicleFeedDetailsGcsSettingsOutputReference | GoogleChronicleFeedDetailsGcsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_uri: cdktf.stringToTerraform(struct!.bucketUri),
    source_deletion_option: cdktf.stringToTerraform(struct!.sourceDeletionOption),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function googleChronicleFeedDetailsGcsSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsGcsSettingsOutputReference | GoogleChronicleFeedDetailsGcsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_uri: {
      value: cdktf.stringToHclTerraform(struct!.bucketUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_deletion_option: {
      value: cdktf.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsGcsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsGcsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketUri = this._bucketUri;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsGcsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketUri = undefined;
      this._sourceDeletionOption = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketUri = value.bucketUri;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._sourceType = value.sourceType;
    }
  }

  // bucket_uri - computed: false, optional: true, required: false
  private _bucketUri?: string; 
  public get bucketUri() {
    return this.getStringAttribute('bucket_uri');
  }
  public set bucketUri(value: string) {
    this._bucketUri = value;
  }
  public resetBucketUri() {
    this._bucketUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketUriInput() {
    return this._bucketUri;
  }

  // chronicle_service_account - computed: true, optional: false, required: false
  public get chronicleServiceAccount() {
    return this.getStringAttribute('chronicle_service_account');
  }

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface GoogleChronicleFeedDetailsGcsV2Settings {
  /**
  * Google Cloud Storage Bucket URI for the feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#bucket_uri GoogleChronicleFeed#bucket_uri}
  */
  readonly bucketUri: string;
  /**
  * Maximum File Age to ingest in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#max_lookback_days GoogleChronicleFeed#max_lookback_days}
  */
  readonly maxLookbackDays?: number;
  /**
  * Possible values:
  * NEVER
  * ON_SUCCESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#source_deletion_option GoogleChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
}

export function googleChronicleFeedDetailsGcsV2SettingsToTerraform(struct?: GoogleChronicleFeedDetailsGcsV2SettingsOutputReference | GoogleChronicleFeedDetailsGcsV2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_uri: cdktf.stringToTerraform(struct!.bucketUri),
    max_lookback_days: cdktf.numberToTerraform(struct!.maxLookbackDays),
    source_deletion_option: cdktf.stringToTerraform(struct!.sourceDeletionOption),
  }
}


export function googleChronicleFeedDetailsGcsV2SettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsGcsV2SettingsOutputReference | GoogleChronicleFeedDetailsGcsV2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_uri: {
      value: cdktf.stringToHclTerraform(struct!.bucketUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_lookback_days: {
      value: cdktf.numberToHclTerraform(struct!.maxLookbackDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_deletion_option: {
      value: cdktf.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsGcsV2SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsGcsV2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketUri = this._bucketUri;
    }
    if (this._maxLookbackDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLookbackDays = this._maxLookbackDays;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsGcsV2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketUri = undefined;
      this._maxLookbackDays = undefined;
      this._sourceDeletionOption = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketUri = value.bucketUri;
      this._maxLookbackDays = value.maxLookbackDays;
      this._sourceDeletionOption = value.sourceDeletionOption;
    }
  }

  // bucket_uri - computed: false, optional: false, required: true
  private _bucketUri?: string; 
  public get bucketUri() {
    return this.getStringAttribute('bucket_uri');
  }
  public set bucketUri(value: string) {
    this._bucketUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketUriInput() {
    return this._bucketUri;
  }

  // chronicle_service_account - computed: true, optional: false, required: false
  public get chronicleServiceAccount() {
    return this.getStringAttribute('chronicle_service_account');
  }

  // max_lookback_days - computed: false, optional: true, required: false
  private _maxLookbackDays?: number; 
  public get maxLookbackDays() {
    return this.getNumberAttribute('max_lookback_days');
  }
  public set maxLookbackDays(value: number) {
    this._maxLookbackDays = value;
  }
  public resetMaxLookbackDays() {
    this._maxLookbackDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLookbackDaysInput() {
    return this._maxLookbackDays;
  }

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }
}
export interface GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaims {
  /**
  * Audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#audience GoogleChronicleFeed#audience}
  */
  readonly audience?: string;
  /**
  * Issuer. Usually the client_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#issuer GoogleChronicleFeed#issuer}
  */
  readonly issuer?: string;
  /**
  * Subject. Usually the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#subject GoogleChronicleFeed#subject}
  */
  readonly subject?: string;
}

export function googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsToTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsToHclTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#private_key GoogleChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsToTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsToHclTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKey = value.privateKey;
    }
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
}
export interface GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthentication {
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#token_endpoint GoogleChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#claims GoogleChronicleFeed#claims}
  */
  readonly claims?: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#rs_credentials GoogleChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentials;
}

export function googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    claims: googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claims: {
      value: googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._rsCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsCredentials = this._rsCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenEndpoint = undefined;
      this._claims.internalValue = undefined;
      this._rsCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenEndpoint = value.tokenEndpoint;
      this._claims.internalValue = value.claims;
      this._rsCredentials.internalValue = value.rsCredentials;
    }
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaims) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // rs_credentials - computed: false, optional: true, required: false
  private _rsCredentials = new GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentials) {
    this._rsCredentials.internalValue = value;
  }
  public resetRsCredentials() {
    this._rsCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsCredentialsInput() {
    return this._rsCredentials.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthentication;
}

export function googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsToTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsOutputReference | GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsOutputReference | GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaims {
  /**
  * Audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#audience GoogleChronicleFeed#audience}
  */
  readonly audience?: string;
  /**
  * Issuer. Usually the client_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#issuer GoogleChronicleFeed#issuer}
  */
  readonly issuer?: string;
  /**
  * Subject. Usually the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#subject GoogleChronicleFeed#subject}
  */
  readonly subject?: string;
}

export function googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsToTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsToHclTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#private_key GoogleChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsToTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsToHclTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKey = value.privateKey;
    }
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
}
export interface GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthentication {
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#token_endpoint GoogleChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#claims GoogleChronicleFeed#claims}
  */
  readonly claims?: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#rs_credentials GoogleChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentials;
}

export function googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    claims: googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claims: {
      value: googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._rsCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsCredentials = this._rsCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenEndpoint = undefined;
      this._claims.internalValue = undefined;
      this._rsCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenEndpoint = value.tokenEndpoint;
      this._claims.internalValue = value.claims;
      this._rsCredentials.internalValue = value.rsCredentials;
    }
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaims) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // rs_credentials - computed: false, optional: true, required: false
  private _rsCredentials = new GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentials) {
    this._rsCredentials.internalValue = value;
  }
  public resetRsCredentials() {
    this._rsCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsCredentialsInput() {
    return this._rsCredentials.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettings {
  /**
  * API Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#api_version GoogleChronicleFeed#api_version}
  */
  readonly apiVersion?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthentication;
}

export function googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsToTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsOutputReference | GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    authentication: googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsOutputReference | GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._authentication.internalValue = value.authentication;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettings {
  /**
  * Google Cloud Storage Bucket URI for the feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#bucket_uri GoogleChronicleFeed#bucket_uri}
  */
  readonly bucketUri: string;
  /**
  * Maximum File Age to ingest in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#max_lookback_days GoogleChronicleFeed#max_lookback_days}
  */
  readonly maxLookbackDays?: number;
  /**
  * Subscription name for pubsub topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#pubsub_subscription GoogleChronicleFeed#pubsub_subscription}
  */
  readonly pubsubSubscription: string;
  /**
  * Possible values:
  * NEVER
  * ON_SUCCESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#source_deletion_option GoogleChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
}

export function googleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsToTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsOutputReference | GoogleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_uri: cdktf.stringToTerraform(struct!.bucketUri),
    max_lookback_days: cdktf.numberToTerraform(struct!.maxLookbackDays),
    pubsub_subscription: cdktf.stringToTerraform(struct!.pubsubSubscription),
    source_deletion_option: cdktf.stringToTerraform(struct!.sourceDeletionOption),
  }
}


export function googleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsOutputReference | GoogleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_uri: {
      value: cdktf.stringToHclTerraform(struct!.bucketUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_lookback_days: {
      value: cdktf.numberToHclTerraform(struct!.maxLookbackDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pubsub_subscription: {
      value: cdktf.stringToHclTerraform(struct!.pubsubSubscription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_deletion_option: {
      value: cdktf.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketUri = this._bucketUri;
    }
    if (this._maxLookbackDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLookbackDays = this._maxLookbackDays;
    }
    if (this._pubsubSubscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubSubscription = this._pubsubSubscription;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketUri = undefined;
      this._maxLookbackDays = undefined;
      this._pubsubSubscription = undefined;
      this._sourceDeletionOption = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketUri = value.bucketUri;
      this._maxLookbackDays = value.maxLookbackDays;
      this._pubsubSubscription = value.pubsubSubscription;
      this._sourceDeletionOption = value.sourceDeletionOption;
    }
  }

  // bucket_uri - computed: false, optional: false, required: true
  private _bucketUri?: string; 
  public get bucketUri() {
    return this.getStringAttribute('bucket_uri');
  }
  public set bucketUri(value: string) {
    this._bucketUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketUriInput() {
    return this._bucketUri;
  }

  // chronicle_service_account - computed: true, optional: false, required: false
  public get chronicleServiceAccount() {
    return this.getStringAttribute('chronicle_service_account');
  }

  // max_lookback_days - computed: false, optional: true, required: false
  private _maxLookbackDays?: number; 
  public get maxLookbackDays() {
    return this.getNumberAttribute('max_lookback_days');
  }
  public set maxLookbackDays(value: number) {
    this._maxLookbackDays = value;
  }
  public resetMaxLookbackDays() {
    this._maxLookbackDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLookbackDaysInput() {
    return this._maxLookbackDays;
  }

  // pubsub_subscription - computed: false, optional: false, required: true
  private _pubsubSubscription?: string; 
  public get pubsubSubscription() {
    return this.getStringAttribute('pubsub_subscription');
  }
  public set pubsubSubscription(value: string) {
    this._pubsubSubscription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubSubscriptionInput() {
    return this._pubsubSubscription;
  }

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }
}
export interface GoogleChronicleFeedDetailsHttpSettings {
  /**
  * Possible values:
  * SOURCE_DELETION_NEVER
  * SOURCE_DELETION_ON_SUCCESS
  * SOURCE_DELETION_ON_SUCCESS_FILES_ONLY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#source_deletion_option GoogleChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
  /**
  * Possible values:
  * FILES
  * FOLDERS
  * FOLDERS_RECURSIVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#source_type GoogleChronicleFeed#source_type}
  */
  readonly sourceType?: string;
  /**
  * HTTP URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#uri GoogleChronicleFeed#uri}
  */
  readonly uri?: string;
}

export function googleChronicleFeedDetailsHttpSettingsToTerraform(struct?: GoogleChronicleFeedDetailsHttpSettingsOutputReference | GoogleChronicleFeedDetailsHttpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_deletion_option: cdktf.stringToTerraform(struct!.sourceDeletionOption),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleChronicleFeedDetailsHttpSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsHttpSettingsOutputReference | GoogleChronicleFeedDetailsHttpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_deletion_option: {
      value: cdktf.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsHttpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsHttpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsHttpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceDeletionOption = undefined;
      this._sourceType = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._sourceType = value.sourceType;
      this._uri = value.uri;
    }
  }

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettings {
  /**
  * Delimiter to split on for the feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#split_delimiter GoogleChronicleFeed#split_delimiter}
  */
  readonly splitDelimiter?: string;
}

export function googleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsToTerraform(struct?: GoogleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsOutputReference | GoogleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    split_delimiter: cdktf.stringToTerraform(struct!.splitDelimiter),
  }
}


export function googleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsOutputReference | GoogleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    split_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.splitDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splitDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitDelimiter = this._splitDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._splitDelimiter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._splitDelimiter = value.splitDelimiter;
    }
  }

  // split_delimiter - computed: false, optional: true, required: false
  private _splitDelimiter?: string; 
  public get splitDelimiter() {
    return this.getStringAttribute('split_delimiter');
  }
  public set splitDelimiter(value: string) {
    this._splitDelimiter = value;
  }
  public resetSplitDelimiter() {
    this._splitDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitDelimiterInput() {
    return this._splitDelimiter;
  }
}
export interface GoogleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettings {
  /**
  * Delimiter to split on for the feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#split_delimiter GoogleChronicleFeed#split_delimiter}
  */
  readonly splitDelimiter?: string;
}

export function googleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsToTerraform(struct?: GoogleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsOutputReference | GoogleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    split_delimiter: cdktf.stringToTerraform(struct!.splitDelimiter),
  }
}


export function googleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsOutputReference | GoogleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    split_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.splitDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splitDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitDelimiter = this._splitDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._splitDelimiter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._splitDelimiter = value.splitDelimiter;
    }
  }

  // split_delimiter - computed: false, optional: true, required: false
  private _splitDelimiter?: string; 
  public get splitDelimiter() {
    return this.getStringAttribute('split_delimiter');
  }
  public set splitDelimiter(value: string) {
    this._splitDelimiter = value;
  }
  public resetSplitDelimiter() {
    this._splitDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitDelimiterInput() {
    return this._splitDelimiter;
  }
}
export interface GoogleChronicleFeedDetailsHttpsPushWebhookSettings {
  /**
  * Delimiter to split on for the feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#split_delimiter GoogleChronicleFeed#split_delimiter}
  */
  readonly splitDelimiter?: string;
}

export function googleChronicleFeedDetailsHttpsPushWebhookSettingsToTerraform(struct?: GoogleChronicleFeedDetailsHttpsPushWebhookSettingsOutputReference | GoogleChronicleFeedDetailsHttpsPushWebhookSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    split_delimiter: cdktf.stringToTerraform(struct!.splitDelimiter),
  }
}


export function googleChronicleFeedDetailsHttpsPushWebhookSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsHttpsPushWebhookSettingsOutputReference | GoogleChronicleFeedDetailsHttpsPushWebhookSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    split_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.splitDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsHttpsPushWebhookSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsHttpsPushWebhookSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splitDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitDelimiter = this._splitDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsHttpsPushWebhookSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._splitDelimiter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._splitDelimiter = value.splitDelimiter;
    }
  }

  // split_delimiter - computed: false, optional: true, required: false
  private _splitDelimiter?: string; 
  public get splitDelimiter() {
    return this.getStringAttribute('split_delimiter');
  }
  public set splitDelimiter(value: string) {
    this._splitDelimiter = value;
  }
  public resetSplitDelimiter() {
    this._splitDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitDelimiterInput() {
    return this._splitDelimiter;
  }
}
export interface GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#key GoogleChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#value GoogleChronicleFeed#value}
  */
  readonly value?: string;
}

export function googleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleFeedDetailsImpervaWafSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#header_key_values GoogleChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable;
}

export function googleChronicleFeedDetailsImpervaWafSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsImpervaWafSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_key_values: cdktf.listMapper(googleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function googleChronicleFeedDetailsImpervaWafSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsImpervaWafSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_key_values: {
      value: cdktf.listMapperHcl(googleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsImpervaWafSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsImpervaWafSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsImpervaWafSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsImpervaWafSettingsAuthentication;
}

export function googleChronicleFeedDetailsImpervaWafSettingsToTerraform(struct?: GoogleChronicleFeedDetailsImpervaWafSettingsOutputReference | GoogleChronicleFeedDetailsImpervaWafSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: googleChronicleFeedDetailsImpervaWafSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsImpervaWafSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsImpervaWafSettingsOutputReference | GoogleChronicleFeedDetailsImpervaWafSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: googleChronicleFeedDetailsImpervaWafSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsImpervaWafSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsImpervaWafSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsImpervaWafSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsImpervaWafSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsImpervaWafSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#key GoogleChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#value GoogleChronicleFeed#value}
  */
  readonly value?: string;
}

export function googleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleFeedDetailsMandiantIocSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#header_key_values GoogleChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable;
}

export function googleChronicleFeedDetailsMandiantIocSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsMandiantIocSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_key_values: cdktf.listMapper(googleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function googleChronicleFeedDetailsMandiantIocSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsMandiantIocSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_key_values: {
      value: cdktf.listMapperHcl(googleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsMandiantIocSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsMandiantIocSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsMandiantIocSettings {
  /**
  * time since when to start fetching the IOCs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#start_time GoogleChronicleFeed#start_time}
  */
  readonly startTime?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsMandiantIocSettingsAuthentication;
}

export function googleChronicleFeedDetailsMandiantIocSettingsToTerraform(struct?: GoogleChronicleFeedDetailsMandiantIocSettingsOutputReference | GoogleChronicleFeedDetailsMandiantIocSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_time: cdktf.stringToTerraform(struct!.startTime),
    authentication: googleChronicleFeedDetailsMandiantIocSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsMandiantIocSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsMandiantIocSettingsOutputReference | GoogleChronicleFeedDetailsMandiantIocSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsMandiantIocSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsMandiantIocSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsMandiantIocSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsMandiantIocSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._startTime = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._startTime = value.startTime;
      this._authentication.internalValue = value.authentication;
    }
  }

  // start_time - computed: false, optional: true, required: false
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsMandiantIocSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsMandiantIocSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_id GoogleChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_secret GoogleChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
}

export function googleChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function googleChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthentication): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthentication | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface GoogleChronicleFeedDetailsMicrosoftGraphAlertSettings {
  /**
  * API Auth Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#auth_endpoint GoogleChronicleFeed#auth_endpoint}
  */
  readonly authEndpoint?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#tenant_id GoogleChronicleFeed#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthentication;
}

export function googleChronicleFeedDetailsMicrosoftGraphAlertSettingsToTerraform(struct?: GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsOutputReference | GoogleChronicleFeedDetailsMicrosoftGraphAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_endpoint: cdktf.stringToTerraform(struct!.authEndpoint),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    authentication: googleChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsMicrosoftGraphAlertSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsOutputReference | GoogleChronicleFeedDetailsMicrosoftGraphAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authEndpoint),
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
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsMicrosoftGraphAlertSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsMicrosoftGraphAlertSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authEndpoint = undefined;
      this._hostname = undefined;
      this._tenantId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authEndpoint = value.authEndpoint;
      this._hostname = value.hostname;
      this._tenantId = value.tenantId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // auth_endpoint - computed: false, optional: true, required: false
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  public resetAuthEndpoint() {
    this._authEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_id GoogleChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_secret GoogleChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
}

export function googleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function googleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthentication): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthentication | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettings {
  /**
  * API Auth Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#auth_endpoint GoogleChronicleFeed#auth_endpoint}
  */
  readonly authEndpoint?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Subscription ID of the Microsoft security center alert settings alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#subscription_id GoogleChronicleFeed#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#tenant_id GoogleChronicleFeed#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthentication;
}

export function googleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsToTerraform(struct?: GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsOutputReference | GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_endpoint: cdktf.stringToTerraform(struct!.authEndpoint),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    authentication: googleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsOutputReference | GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authEndpoint),
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
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
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
    authentication: {
      value: googleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authEndpoint = undefined;
      this._hostname = undefined;
      this._subscriptionId = undefined;
      this._tenantId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authEndpoint = value.authEndpoint;
      this._hostname = value.hostname;
      this._subscriptionId = value.subscriptionId;
      this._tenantId = value.tenantId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // auth_endpoint - computed: false, optional: true, required: false
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  public resetAuthEndpoint() {
    this._authEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#key GoogleChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#value GoogleChronicleFeed#value}
  */
  readonly value?: string;
}

export function googleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleFeedDetailsMimecastMailSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#header_key_values GoogleChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable;
}

export function googleChronicleFeedDetailsMimecastMailSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsMimecastMailSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_key_values: cdktf.listMapper(googleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function googleChronicleFeedDetailsMimecastMailSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsMimecastMailSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_key_values: {
      value: cdktf.listMapperHcl(googleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsMimecastMailSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsMimecastMailSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsMimecastMailSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsMimecastMailSettingsAuthentication;
}

export function googleChronicleFeedDetailsMimecastMailSettingsToTerraform(struct?: GoogleChronicleFeedDetailsMimecastMailSettingsOutputReference | GoogleChronicleFeedDetailsMimecastMailSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    authentication: googleChronicleFeedDetailsMimecastMailSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsMimecastMailSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsMimecastMailSettingsOutputReference | GoogleChronicleFeedDetailsMimecastMailSettings): any {
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
    authentication: {
      value: googleChronicleFeedDetailsMimecastMailSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsMimecastMailSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsMimecastMailSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsMimecastMailSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsMimecastMailSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsMimecastMailSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsMimecastMailV2SettingsAuthCredentials {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_id GoogleChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_secret GoogleChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
}

export function googleChronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsToTerraform(struct?: GoogleChronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsOutputReference | GoogleChronicleFeedDetailsMimecastMailV2SettingsAuthCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function googleChronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsToHclTerraform(struct?: GoogleChronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsOutputReference | GoogleChronicleFeedDetailsMimecastMailV2SettingsAuthCredentials): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsMimecastMailV2SettingsAuthCredentials | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsMimecastMailV2SettingsAuthCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface GoogleChronicleFeedDetailsMimecastMailV2Settings {
  /**
  * auth_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#auth_credentials GoogleChronicleFeed#auth_credentials}
  */
  readonly authCredentials?: GoogleChronicleFeedDetailsMimecastMailV2SettingsAuthCredentials;
}

export function googleChronicleFeedDetailsMimecastMailV2SettingsToTerraform(struct?: GoogleChronicleFeedDetailsMimecastMailV2SettingsOutputReference | GoogleChronicleFeedDetailsMimecastMailV2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_credentials: googleChronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsToTerraform(struct!.authCredentials),
  }
}


export function googleChronicleFeedDetailsMimecastMailV2SettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsMimecastMailV2SettingsOutputReference | GoogleChronicleFeedDetailsMimecastMailV2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_credentials: {
      value: googleChronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsToHclTerraform(struct!.authCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsMimecastMailV2SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsMimecastMailV2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCredentials = this._authCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsMimecastMailV2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCredentials.internalValue = value.authCredentials;
    }
  }

  // auth_credentials - computed: false, optional: true, required: false
  private _authCredentials = new GoogleChronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsOutputReference(this, "auth_credentials");
  public get authCredentials() {
    return this._authCredentials;
  }
  public putAuthCredentials(value: GoogleChronicleFeedDetailsMimecastMailV2SettingsAuthCredentials) {
    this._authCredentials.internalValue = value;
  }
  public resetAuthCredentials() {
    this._authCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCredentialsInput() {
    return this._authCredentials.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#key GoogleChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#value GoogleChronicleFeed#value}
  */
  readonly value?: string;
}

export function googleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#header_key_values GoogleChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable;
}

export function googleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_key_values: cdktf.listMapper(googleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function googleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_key_values: {
      value: cdktf.listMapperHcl(googleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsNetskopeAlertSettings {
  /**
  * Content type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#content_type GoogleChronicleFeed#content_type}
  */
  readonly contentType?: string;
  /**
  * Feedname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#feedname GoogleChronicleFeed#feedname}
  */
  readonly feedname?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthentication;
}

export function googleChronicleFeedDetailsNetskopeAlertSettingsToTerraform(struct?: GoogleChronicleFeedDetailsNetskopeAlertSettingsOutputReference | GoogleChronicleFeedDetailsNetskopeAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    feedname: cdktf.stringToTerraform(struct!.feedname),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    authentication: googleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsNetskopeAlertSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsNetskopeAlertSettingsOutputReference | GoogleChronicleFeedDetailsNetskopeAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feedname: {
      value: cdktf.stringToHclTerraform(struct!.feedname),
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
    authentication: {
      value: googleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsNetskopeAlertSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsNetskopeAlertSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._feedname !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedname = this._feedname;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsNetskopeAlertSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentType = undefined;
      this._feedname = undefined;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentType = value.contentType;
      this._feedname = value.feedname;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // feedname - computed: false, optional: true, required: false
  private _feedname?: string; 
  public get feedname() {
    return this.getStringAttribute('feedname');
  }
  public set feedname(value: string) {
    this._feedname = value;
  }
  public resetFeedname() {
    this._feedname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feednameInput() {
    return this._feedname;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsNetskopeAlertSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#key GoogleChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#value GoogleChronicleFeed#value}
  */
  readonly value?: string;
}

export function googleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesToTerraform(struct?: GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesOutputReference {
    return new GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#header_key_values GoogleChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable;
}

export function googleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_key_values: cdktf.listMapper(googleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function googleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_key_values: {
      value: cdktf.listMapperHcl(googleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsNetskopeAlertV2Settings {
  /**
  * Content Category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#content_category GoogleChronicleFeed#content_category}
  */
  readonly contentCategory?: string;
  /**
  * Content type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#content_types GoogleChronicleFeed#content_types}
  */
  readonly contentTypes?: string[];
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthentication;
}

export function googleChronicleFeedDetailsNetskopeAlertV2SettingsToTerraform(struct?: GoogleChronicleFeedDetailsNetskopeAlertV2SettingsOutputReference | GoogleChronicleFeedDetailsNetskopeAlertV2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_category: cdktf.stringToTerraform(struct!.contentCategory),
    content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentTypes),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    authentication: googleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsNetskopeAlertV2SettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsNetskopeAlertV2SettingsOutputReference | GoogleChronicleFeedDetailsNetskopeAlertV2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_category: {
      value: cdktf.stringToHclTerraform(struct!.contentCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsNetskopeAlertV2SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsNetskopeAlertV2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentCategory = this._contentCategory;
    }
    if (this._contentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypes = this._contentTypes;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsNetskopeAlertV2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentCategory = undefined;
      this._contentTypes = undefined;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentCategory = value.contentCategory;
      this._contentTypes = value.contentTypes;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // content_category - computed: false, optional: true, required: false
  private _contentCategory?: string; 
  public get contentCategory() {
    return this.getStringAttribute('content_category');
  }
  public set contentCategory(value: string) {
    this._contentCategory = value;
  }
  public resetContentCategory() {
    this._contentCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentCategoryInput() {
    return this._contentCategory;
  }

  // content_types - computed: false, optional: true, required: false
  private _contentTypes?: string[]; 
  public get contentTypes() {
    return this.getListAttribute('content_types');
  }
  public set contentTypes(value: string[]) {
    this._contentTypes = value;
  }
  public resetContentTypes() {
    this._contentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypesInput() {
    return this._contentTypes;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsNetskopeAlertV2SettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsOffice365SettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_id GoogleChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_secret GoogleChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
}

export function googleChronicleFeedDetailsOffice365SettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsOffice365SettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsOffice365SettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function googleChronicleFeedDetailsOffice365SettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsOffice365SettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsOffice365SettingsAuthentication): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsOffice365SettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsOffice365SettingsAuthentication | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsOffice365SettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface GoogleChronicleFeedDetailsOffice365Settings {
  /**
  * API Auth Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#auth_endpoint GoogleChronicleFeed#auth_endpoint}
  */
  readonly authEndpoint?: string;
  /**
  * Supported office 365 content type.
  * Possible values:
  * AUDIT_AZURE_ACTIVE_DIRECTORY
  * AUDIT_EXCHANGE
  * AUDIT_SHARE_POINT
  * AUDIT_GENERAL
  * DLP_ALL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#content_type GoogleChronicleFeed#content_type}
  */
  readonly contentType?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#tenant_id GoogleChronicleFeed#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsOffice365SettingsAuthentication;
}

export function googleChronicleFeedDetailsOffice365SettingsToTerraform(struct?: GoogleChronicleFeedDetailsOffice365SettingsOutputReference | GoogleChronicleFeedDetailsOffice365Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_endpoint: cdktf.stringToTerraform(struct!.authEndpoint),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    authentication: googleChronicleFeedDetailsOffice365SettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsOffice365SettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsOffice365SettingsOutputReference | GoogleChronicleFeedDetailsOffice365Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
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
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsOffice365SettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsOffice365SettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsOffice365SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsOffice365Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsOffice365Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authEndpoint = undefined;
      this._contentType = undefined;
      this._hostname = undefined;
      this._tenantId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authEndpoint = value.authEndpoint;
      this._contentType = value.contentType;
      this._hostname = value.hostname;
      this._tenantId = value.tenantId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // auth_endpoint - computed: false, optional: true, required: false
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  public resetAuthEndpoint() {
    this._authEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsOffice365SettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsOffice365SettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#key GoogleChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#value GoogleChronicleFeed#value}
  */
  readonly value?: string;
}

export function googleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: GoogleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: GoogleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GoogleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class GoogleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new GoogleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleFeedDetailsOktaSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#header_key_values GoogleChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: GoogleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable;
}

export function googleChronicleFeedDetailsOktaSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsOktaSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsOktaSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_key_values: cdktf.listMapper(googleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function googleChronicleFeedDetailsOktaSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsOktaSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsOktaSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_key_values: {
      value: cdktf.listMapperHcl(googleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsOktaSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsOktaSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsOktaSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new GoogleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: GoogleChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsOktaSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsOktaSettingsAuthentication;
}

export function googleChronicleFeedDetailsOktaSettingsToTerraform(struct?: GoogleChronicleFeedDetailsOktaSettingsOutputReference | GoogleChronicleFeedDetailsOktaSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    authentication: googleChronicleFeedDetailsOktaSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsOktaSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsOktaSettingsOutputReference | GoogleChronicleFeedDetailsOktaSettings): any {
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
    authentication: {
      value: googleChronicleFeedDetailsOktaSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsOktaSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsOktaSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsOktaSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsOktaSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsOktaSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsOktaSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#key GoogleChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#value GoogleChronicleFeed#value}
  */
  readonly value?: string;
}

export function googleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleFeedDetailsOktaUserContextSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#header_key_values GoogleChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable;
}

export function googleChronicleFeedDetailsOktaUserContextSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsOktaUserContextSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_key_values: cdktf.listMapper(googleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function googleChronicleFeedDetailsOktaUserContextSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsOktaUserContextSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_key_values: {
      value: cdktf.listMapperHcl(googleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsOktaUserContextSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsOktaUserContextSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsOktaUserContextSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Manager id reference field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#manager_id_reference_field GoogleChronicleFeed#manager_id_reference_field}
  */
  readonly managerIdReferenceField?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsOktaUserContextSettingsAuthentication;
}

export function googleChronicleFeedDetailsOktaUserContextSettingsToTerraform(struct?: GoogleChronicleFeedDetailsOktaUserContextSettingsOutputReference | GoogleChronicleFeedDetailsOktaUserContextSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    manager_id_reference_field: cdktf.stringToTerraform(struct!.managerIdReferenceField),
    authentication: googleChronicleFeedDetailsOktaUserContextSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsOktaUserContextSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsOktaUserContextSettingsOutputReference | GoogleChronicleFeedDetailsOktaUserContextSettings): any {
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
    manager_id_reference_field: {
      value: cdktf.stringToHclTerraform(struct!.managerIdReferenceField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsOktaUserContextSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsOktaUserContextSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsOktaUserContextSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._managerIdReferenceField !== undefined) {
      hasAnyValues = true;
      internalValueResult.managerIdReferenceField = this._managerIdReferenceField;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsOktaUserContextSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._managerIdReferenceField = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._managerIdReferenceField = value.managerIdReferenceField;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // manager_id_reference_field - computed: false, optional: true, required: false
  private _managerIdReferenceField?: string; 
  public get managerIdReferenceField() {
    return this.getStringAttribute('manager_id_reference_field');
  }
  public set managerIdReferenceField(value: string) {
    this._managerIdReferenceField = value;
  }
  public resetManagerIdReferenceField() {
    this._managerIdReferenceField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerIdReferenceFieldInput() {
    return this._managerIdReferenceField;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsOktaUserContextSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsOktaUserContextSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#key GoogleChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#value GoogleChronicleFeed#value}
  */
  readonly value?: string;
}

export function googleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: GoogleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: GoogleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GoogleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class GoogleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new GoogleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleFeedDetailsPanIocSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#header_key_values GoogleChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: GoogleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable;
}

export function googleChronicleFeedDetailsPanIocSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsPanIocSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsPanIocSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_key_values: cdktf.listMapper(googleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function googleChronicleFeedDetailsPanIocSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsPanIocSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsPanIocSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_key_values: {
      value: cdktf.listMapperHcl(googleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsPanIocSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsPanIocSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsPanIocSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new GoogleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: GoogleChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsPanIocSettings {
  /**
  * PAN IOC feed name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#feed GoogleChronicleFeed#feed}
  */
  readonly feed?: string;
  /**
  * PAN IOC feed ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#feed_id GoogleChronicleFeed#feed_id}
  */
  readonly feedId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsPanIocSettingsAuthentication;
}

export function googleChronicleFeedDetailsPanIocSettingsToTerraform(struct?: GoogleChronicleFeedDetailsPanIocSettingsOutputReference | GoogleChronicleFeedDetailsPanIocSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feed: cdktf.stringToTerraform(struct!.feed),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    authentication: googleChronicleFeedDetailsPanIocSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsPanIocSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsPanIocSettingsOutputReference | GoogleChronicleFeedDetailsPanIocSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feed: {
      value: cdktf.stringToHclTerraform(struct!.feed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feed_id: {
      value: cdktf.stringToHclTerraform(struct!.feedId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsPanIocSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsPanIocSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsPanIocSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsPanIocSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feed !== undefined) {
      hasAnyValues = true;
      internalValueResult.feed = this._feed;
    }
    if (this._feedId !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedId = this._feedId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsPanIocSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._feed = undefined;
      this._feedId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._feed = value.feed;
      this._feedId = value.feedId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // feed - computed: false, optional: true, required: false
  private _feed?: string; 
  public get feed() {
    return this.getStringAttribute('feed');
  }
  public set feed(value: string) {
    this._feed = value;
  }
  public resetFeed() {
    this._feed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedInput() {
    return this._feed;
  }

  // feed_id - computed: false, optional: true, required: false
  private _feedId?: string; 
  public get feedId() {
    return this.getStringAttribute('feed_id');
  }
  public set feedId(value: string) {
    this._feedId = value;
  }
  public resetFeedId() {
    this._feedId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedIdInput() {
    return this._feedId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsPanIocSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsPanIocSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsPanPrismaCloudSettingsAuthentication {
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#password GoogleChronicleFeed#password}
  */
  readonly password?: string;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#user GoogleChronicleFeed#user}
  */
  readonly user?: string;
}

export function googleChronicleFeedDetailsPanPrismaCloudSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsPanPrismaCloudSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsPanPrismaCloudSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsPanPrismaCloudSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsPanPrismaCloudSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsPanPrismaCloudSettingsAuthentication): any {
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsPanPrismaCloudSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsPanPrismaCloudSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsPanPrismaCloudSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._user = value.user;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface GoogleChronicleFeedDetailsPanPrismaCloudSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsPanPrismaCloudSettingsAuthentication;
}

export function googleChronicleFeedDetailsPanPrismaCloudSettingsToTerraform(struct?: GoogleChronicleFeedDetailsPanPrismaCloudSettingsOutputReference | GoogleChronicleFeedDetailsPanPrismaCloudSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    authentication: googleChronicleFeedDetailsPanPrismaCloudSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsPanPrismaCloudSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsPanPrismaCloudSettingsOutputReference | GoogleChronicleFeedDetailsPanPrismaCloudSettings): any {
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
    authentication: {
      value: googleChronicleFeedDetailsPanPrismaCloudSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsPanPrismaCloudSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsPanPrismaCloudSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsPanPrismaCloudSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsPanPrismaCloudSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsPanPrismaCloudSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsPanPrismaCloudSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsProofpointMailSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret GoogleChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#user GoogleChronicleFeed#user}
  */
  readonly user?: string;
}

export function googleChronicleFeedDetailsProofpointMailSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsProofpointMailSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsProofpointMailSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsProofpointMailSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsProofpointMailSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsProofpointMailSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsProofpointMailSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsProofpointMailSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsProofpointMailSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface GoogleChronicleFeedDetailsProofpointMailSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsProofpointMailSettingsAuthentication;
}

export function googleChronicleFeedDetailsProofpointMailSettingsToTerraform(struct?: GoogleChronicleFeedDetailsProofpointMailSettingsOutputReference | GoogleChronicleFeedDetailsProofpointMailSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: googleChronicleFeedDetailsProofpointMailSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsProofpointMailSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsProofpointMailSettingsOutputReference | GoogleChronicleFeedDetailsProofpointMailSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: googleChronicleFeedDetailsProofpointMailSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsProofpointMailSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsProofpointMailSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsProofpointMailSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsProofpointMailSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsProofpointMailSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsProofpointMailSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#key GoogleChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#value GoogleChronicleFeed#value}
  */
  readonly value?: string;
}

export function googleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#header_key_values GoogleChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable;
}

export function googleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_key_values: cdktf.listMapper(googleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function googleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_key_values: {
      value: cdktf.listMapperHcl(googleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsProofpointOnDemandSettings {
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#cluster_id GoogleChronicleFeed#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthentication;
}

export function googleChronicleFeedDetailsProofpointOnDemandSettingsToTerraform(struct?: GoogleChronicleFeedDetailsProofpointOnDemandSettingsOutputReference | GoogleChronicleFeedDetailsProofpointOnDemandSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    authentication: googleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsProofpointOnDemandSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsProofpointOnDemandSettingsOutputReference | GoogleChronicleFeedDetailsProofpointOnDemandSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsProofpointOnDemandSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsProofpointOnDemandSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsProofpointOnDemandSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsProofpointOnDemandSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsPubsubSettings {
  /**
  * Google Service Account Email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#google_service_account_email GoogleChronicleFeed#google_service_account_email}
  */
  readonly googleServiceAccountEmail?: string;
}

export function googleChronicleFeedDetailsPubsubSettingsToTerraform(struct?: GoogleChronicleFeedDetailsPubsubSettingsOutputReference | GoogleChronicleFeedDetailsPubsubSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_service_account_email: cdktf.stringToTerraform(struct!.googleServiceAccountEmail),
  }
}


export function googleChronicleFeedDetailsPubsubSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsPubsubSettingsOutputReference | GoogleChronicleFeedDetailsPubsubSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    google_service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.googleServiceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsPubsubSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsPubsubSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._googleServiceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleServiceAccountEmail = this._googleServiceAccountEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsPubsubSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._googleServiceAccountEmail = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._googleServiceAccountEmail = value.googleServiceAccountEmail;
    }
  }

  // google_service_account_email - computed: false, optional: true, required: false
  private _googleServiceAccountEmail?: string; 
  public get googleServiceAccountEmail() {
    return this.getStringAttribute('google_service_account_email');
  }
  public set googleServiceAccountEmail(value: string) {
    this._googleServiceAccountEmail = value;
  }
  public resetGoogleServiceAccountEmail() {
    this._googleServiceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountEmailInput() {
    return this._googleServiceAccountEmail;
  }
}
export interface GoogleChronicleFeedDetailsQualysScanSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret GoogleChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#user GoogleChronicleFeed#user}
  */
  readonly user?: string;
}

export function googleChronicleFeedDetailsQualysScanSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsQualysScanSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsQualysScanSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsQualysScanSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsQualysScanSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsQualysScanSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsQualysScanSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsQualysScanSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsQualysScanSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface GoogleChronicleFeedDetailsQualysScanSettings {
  /**
  * Supported Qualys Scan api type.
  * Possible values:
  * SCAN_SUMMARY_OUTPUT
  * SCAN_COMPLIANCE_OUTPUT
  * SCAN_COMPLIANCE_CONTROL_OUTPUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#api_type GoogleChronicleFeed#api_type}
  */
  readonly apiType?: string;
  /**
  * Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsQualysScanSettingsAuthentication;
}

export function googleChronicleFeedDetailsQualysScanSettingsToTerraform(struct?: GoogleChronicleFeedDetailsQualysScanSettingsOutputReference | GoogleChronicleFeedDetailsQualysScanSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_type: cdktf.stringToTerraform(struct!.apiType),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    authentication: googleChronicleFeedDetailsQualysScanSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsQualysScanSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsQualysScanSettingsOutputReference | GoogleChronicleFeedDetailsQualysScanSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_type: {
      value: cdktf.stringToHclTerraform(struct!.apiType),
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
    authentication: {
      value: googleChronicleFeedDetailsQualysScanSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsQualysScanSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsQualysScanSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsQualysScanSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiType !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiType = this._apiType;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsQualysScanSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiType = undefined;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiType = value.apiType;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // api_type - computed: false, optional: true, required: false
  private _apiType?: string; 
  public get apiType() {
    return this.getStringAttribute('api_type');
  }
  public set apiType(value: string) {
    this._apiType = value;
  }
  public resetApiType() {
    this._apiType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTypeInput() {
    return this._apiType;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsQualysScanSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsQualysScanSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsQualysVmSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret GoogleChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#user GoogleChronicleFeed#user}
  */
  readonly user?: string;
}

export function googleChronicleFeedDetailsQualysVmSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsQualysVmSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsQualysVmSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsQualysVmSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsQualysVmSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsQualysVmSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsQualysVmSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsQualysVmSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsQualysVmSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface GoogleChronicleFeedDetailsQualysVmSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsQualysVmSettingsAuthentication;
}

export function googleChronicleFeedDetailsQualysVmSettingsToTerraform(struct?: GoogleChronicleFeedDetailsQualysVmSettingsOutputReference | GoogleChronicleFeedDetailsQualysVmSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    authentication: googleChronicleFeedDetailsQualysVmSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsQualysVmSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsQualysVmSettingsOutputReference | GoogleChronicleFeedDetailsQualysVmSettings): any {
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
    authentication: {
      value: googleChronicleFeedDetailsQualysVmSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsQualysVmSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsQualysVmSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsQualysVmSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsQualysVmSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsQualysVmSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsQualysVmSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#key GoogleChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#value GoogleChronicleFeed#value}
  */
  readonly value?: string;
}

export function googleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleFeedDetailsRapid7InsightSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#header_key_values GoogleChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable;
}

export function googleChronicleFeedDetailsRapid7InsightSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsRapid7InsightSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_key_values: cdktf.listMapper(googleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function googleChronicleFeedDetailsRapid7InsightSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsRapid7InsightSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_key_values: {
      value: cdktf.listMapperHcl(googleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsRapid7InsightSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsRapid7InsightSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsRapid7InsightSettings {
  /**
  * Rapid7 API endpoint. Should be "vulnerabilities" or "assets".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#endpoint GoogleChronicleFeed#endpoint}
  */
  readonly endpoint?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsRapid7InsightSettingsAuthentication;
}

export function googleChronicleFeedDetailsRapid7InsightSettingsToTerraform(struct?: GoogleChronicleFeedDetailsRapid7InsightSettingsOutputReference | GoogleChronicleFeedDetailsRapid7InsightSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    authentication: googleChronicleFeedDetailsRapid7InsightSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsRapid7InsightSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsRapid7InsightSettingsOutputReference | GoogleChronicleFeedDetailsRapid7InsightSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
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
    authentication: {
      value: googleChronicleFeedDetailsRapid7InsightSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsRapid7InsightSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsRapid7InsightSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsRapid7InsightSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsRapid7InsightSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsRapid7InsightSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#key GoogleChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#value GoogleChronicleFeed#value}
  */
  readonly value?: string;
}

export function googleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#header_key_values GoogleChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable;
}

export function googleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_key_values: cdktf.listMapper(googleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function googleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_key_values: {
      value: cdktf.listMapperHcl(googleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsRecordedFutureIocSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthentication;
}

export function googleChronicleFeedDetailsRecordedFutureIocSettingsToTerraform(struct?: GoogleChronicleFeedDetailsRecordedFutureIocSettingsOutputReference | GoogleChronicleFeedDetailsRecordedFutureIocSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: googleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsRecordedFutureIocSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsRecordedFutureIocSettingsOutputReference | GoogleChronicleFeedDetailsRecordedFutureIocSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: googleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsRecordedFutureIocSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsRecordedFutureIocSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsRecordedFutureIocSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsRecordedFutureIocSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsRhIsacIocSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_id GoogleChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_secret GoogleChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#token_endpoint GoogleChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
}

export function googleChronicleFeedDetailsRhIsacIocSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsRhIsacIocSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsRhIsacIocSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function googleChronicleFeedDetailsRhIsacIocSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsRhIsacIocSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsRhIsacIocSettingsAuthentication): any {
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
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsRhIsacIocSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsRhIsacIocSettingsAuthentication | undefined {
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
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsRhIsacIocSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tokenEndpoint = value.tokenEndpoint;
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

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface GoogleChronicleFeedDetailsRhIsacIocSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsRhIsacIocSettingsAuthentication;
}

export function googleChronicleFeedDetailsRhIsacIocSettingsToTerraform(struct?: GoogleChronicleFeedDetailsRhIsacIocSettingsOutputReference | GoogleChronicleFeedDetailsRhIsacIocSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: googleChronicleFeedDetailsRhIsacIocSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsRhIsacIocSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsRhIsacIocSettingsOutputReference | GoogleChronicleFeedDetailsRhIsacIocSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: googleChronicleFeedDetailsRhIsacIocSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsRhIsacIocSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsRhIsacIocSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsRhIsacIocSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsRhIsacIocSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsRhIsacIocSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsRhIsacIocSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaims {
  /**
  * Audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#audience GoogleChronicleFeed#audience}
  */
  readonly audience?: string;
  /**
  * Issuer. Usually the client_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#issuer GoogleChronicleFeed#issuer}
  */
  readonly issuer?: string;
  /**
  * Subject. Usually the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#subject GoogleChronicleFeed#subject}
  */
  readonly subject?: string;
}

export function googleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsToTerraform(struct?: GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsOutputReference | GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function googleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsToHclTerraform(struct?: GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsOutputReference | GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#private_key GoogleChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function googleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsToTerraform(struct?: GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsOutputReference | GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function googleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsToHclTerraform(struct?: GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsOutputReference | GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKey = value.privateKey;
    }
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
}
export interface GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentials {
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#token_endpoint GoogleChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#claims GoogleChronicleFeed#claims}
  */
  readonly claims?: GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#rs_credentials GoogleChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentials;
}

export function googleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsToTerraform(struct?: GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsOutputReference | GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    claims: googleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsToTerraform(struct!.claims),
    rs_credentials: googleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function googleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsToHclTerraform(struct?: GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsOutputReference | GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claims: {
      value: googleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsList",
    },
    rs_credentials: {
      value: googleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._rsCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsCredentials = this._rsCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenEndpoint = undefined;
      this._claims.internalValue = undefined;
      this._rsCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenEndpoint = value.tokenEndpoint;
      this._claims.internalValue = value.claims;
      this._rsCredentials.internalValue = value.rsCredentials;
    }
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaims) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // rs_credentials - computed: false, optional: true, required: false
  private _rsCredentials = new GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentials) {
    this._rsCredentials.internalValue = value;
  }
  public resetRsCredentials() {
    this._rsCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsCredentialsInput() {
    return this._rsCredentials.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuth {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_id GoogleChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_secret GoogleChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#password GoogleChronicleFeed#password}
  */
  readonly password?: string;
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#token_endpoint GoogleChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#user GoogleChronicleFeed#user}
  */
  readonly user?: string;
}

export function googleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthToTerraform(struct?: GoogleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthOutputReference | GoogleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    password: cdktf.stringToTerraform(struct!.password),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthToHclTerraform(struct?: GoogleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthOutputReference | GoogleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuth): any {
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuth | undefined {
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
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._password = undefined;
      this._tokenEndpoint = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._password = value.password;
      this._tokenEndpoint = value.tokenEndpoint;
      this._user = value.user;
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

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
