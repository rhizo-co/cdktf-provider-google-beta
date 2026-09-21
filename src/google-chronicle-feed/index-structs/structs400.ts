import * as cdktf from 'cdktf';
import { GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentials,
googleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsToTerraform,
googleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsToHclTerraform,
GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsOutputReference,
GoogleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuth,
googleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthToTerraform,
googleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthToHclTerraform,
GoogleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthOutputReference,
GoogleChronicleFeedDetailsAmazonKinesisFirehoseSettings,
googleChronicleFeedDetailsAmazonKinesisFirehoseSettingsToTerraform,
googleChronicleFeedDetailsAmazonKinesisFirehoseSettingsToHclTerraform,
GoogleChronicleFeedDetailsAmazonKinesisFirehoseSettingsOutputReference,
GoogleChronicleFeedDetailsAmazonS3Settings,
googleChronicleFeedDetailsAmazonS3SettingsToTerraform,
googleChronicleFeedDetailsAmazonS3SettingsToHclTerraform,
GoogleChronicleFeedDetailsAmazonS3SettingsOutputReference,
GoogleChronicleFeedDetailsAmazonS3V2Settings,
googleChronicleFeedDetailsAmazonS3V2SettingsToTerraform,
googleChronicleFeedDetailsAmazonS3V2SettingsToHclTerraform,
GoogleChronicleFeedDetailsAmazonS3V2SettingsOutputReference,
GoogleChronicleFeedDetailsAmazonSqsSettings,
googleChronicleFeedDetailsAmazonSqsSettingsToTerraform,
googleChronicleFeedDetailsAmazonSqsSettingsToHclTerraform,
GoogleChronicleFeedDetailsAmazonSqsSettingsOutputReference,
GoogleChronicleFeedDetailsAmazonSqsV2Settings,
googleChronicleFeedDetailsAmazonSqsV2SettingsToTerraform,
googleChronicleFeedDetailsAmazonSqsV2SettingsToHclTerraform,
GoogleChronicleFeedDetailsAmazonSqsV2SettingsOutputReference,
GoogleChronicleFeedDetailsAnomaliSettings,
googleChronicleFeedDetailsAnomaliSettingsToTerraform,
googleChronicleFeedDetailsAnomaliSettingsToHclTerraform,
GoogleChronicleFeedDetailsAnomaliSettingsOutputReference,
GoogleChronicleFeedDetailsAwsEc2HostsSettings,
googleChronicleFeedDetailsAwsEc2HostsSettingsToTerraform,
googleChronicleFeedDetailsAwsEc2HostsSettingsToHclTerraform,
GoogleChronicleFeedDetailsAwsEc2HostsSettingsOutputReference,
GoogleChronicleFeedDetailsAwsEc2InstancesSettings,
googleChronicleFeedDetailsAwsEc2InstancesSettingsToTerraform,
googleChronicleFeedDetailsAwsEc2InstancesSettingsToHclTerraform,
GoogleChronicleFeedDetailsAwsEc2InstancesSettingsOutputReference,
GoogleChronicleFeedDetailsAwsEc2VpcsSettings,
googleChronicleFeedDetailsAwsEc2VpcsSettingsToTerraform,
googleChronicleFeedDetailsAwsEc2VpcsSettingsToHclTerraform,
GoogleChronicleFeedDetailsAwsEc2VpcsSettingsOutputReference,
GoogleChronicleFeedDetailsAwsIamSettings,
googleChronicleFeedDetailsAwsIamSettingsToTerraform,
googleChronicleFeedDetailsAwsIamSettingsToHclTerraform,
GoogleChronicleFeedDetailsAwsIamSettingsOutputReference,
GoogleChronicleFeedDetailsAzureAdAuditSettings,
googleChronicleFeedDetailsAzureAdAuditSettingsToTerraform,
googleChronicleFeedDetailsAzureAdAuditSettingsToHclTerraform,
GoogleChronicleFeedDetailsAzureAdAuditSettingsOutputReference,
GoogleChronicleFeedDetailsAzureAdContextSettings,
googleChronicleFeedDetailsAzureAdContextSettingsToTerraform,
googleChronicleFeedDetailsAzureAdContextSettingsToHclTerraform,
GoogleChronicleFeedDetailsAzureAdContextSettingsOutputReference,
GoogleChronicleFeedDetailsAzureAdSettings,
googleChronicleFeedDetailsAzureAdSettingsToTerraform,
googleChronicleFeedDetailsAzureAdSettingsToHclTerraform,
GoogleChronicleFeedDetailsAzureAdSettingsOutputReference,
GoogleChronicleFeedDetailsAzureBlobStoreSettings,
googleChronicleFeedDetailsAzureBlobStoreSettingsToTerraform,
googleChronicleFeedDetailsAzureBlobStoreSettingsToHclTerraform,
GoogleChronicleFeedDetailsAzureBlobStoreSettingsOutputReference,
GoogleChronicleFeedDetailsAzureBlobStoreV2Settings,
googleChronicleFeedDetailsAzureBlobStoreV2SettingsToTerraform,
googleChronicleFeedDetailsAzureBlobStoreV2SettingsToHclTerraform,
GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsOutputReference,
GoogleChronicleFeedDetailsAzureEventHubSettings,
googleChronicleFeedDetailsAzureEventHubSettingsToTerraform,
googleChronicleFeedDetailsAzureEventHubSettingsToHclTerraform,
GoogleChronicleFeedDetailsAzureEventHubSettingsOutputReference,
GoogleChronicleFeedDetailsAzureMdmIntuneSettings,
googleChronicleFeedDetailsAzureMdmIntuneSettingsToTerraform,
googleChronicleFeedDetailsAzureMdmIntuneSettingsToHclTerraform,
GoogleChronicleFeedDetailsAzureMdmIntuneSettingsOutputReference,
GoogleChronicleFeedDetailsCloudPassageSettings,
googleChronicleFeedDetailsCloudPassageSettingsToTerraform,
googleChronicleFeedDetailsCloudPassageSettingsToHclTerraform,
GoogleChronicleFeedDetailsCloudPassageSettingsOutputReference,
GoogleChronicleFeedDetailsCortexXdrSettings,
googleChronicleFeedDetailsCortexXdrSettingsToTerraform,
googleChronicleFeedDetailsCortexXdrSettingsToHclTerraform,
GoogleChronicleFeedDetailsCortexXdrSettingsOutputReference,
GoogleChronicleFeedDetailsCrowdstrikeAlertsSettings,
googleChronicleFeedDetailsCrowdstrikeAlertsSettingsToTerraform,
googleChronicleFeedDetailsCrowdstrikeAlertsSettingsToHclTerraform,
GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsOutputReference,
GoogleChronicleFeedDetailsCrowdstrikeDetectsSettings,
googleChronicleFeedDetailsCrowdstrikeDetectsSettingsToTerraform,
googleChronicleFeedDetailsCrowdstrikeDetectsSettingsToHclTerraform,
GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsOutputReference,
GoogleChronicleFeedDetailsDummyLogTypeSettings,
googleChronicleFeedDetailsDummyLogTypeSettingsToTerraform,
googleChronicleFeedDetailsDummyLogTypeSettingsToHclTerraform,
GoogleChronicleFeedDetailsDummyLogTypeSettingsOutputReference,
GoogleChronicleFeedDetailsDuoAuthSettings,
googleChronicleFeedDetailsDuoAuthSettingsToTerraform,
googleChronicleFeedDetailsDuoAuthSettingsToHclTerraform,
GoogleChronicleFeedDetailsDuoAuthSettingsOutputReference,
GoogleChronicleFeedDetailsDuoUserContextSettings,
googleChronicleFeedDetailsDuoUserContextSettingsToTerraform,
googleChronicleFeedDetailsDuoUserContextSettingsToHclTerraform,
GoogleChronicleFeedDetailsDuoUserContextSettingsOutputReference,
GoogleChronicleFeedDetailsFoxItStixSettings,
googleChronicleFeedDetailsFoxItStixSettingsToTerraform,
googleChronicleFeedDetailsFoxItStixSettingsToHclTerraform,
GoogleChronicleFeedDetailsFoxItStixSettingsOutputReference,
GoogleChronicleFeedDetailsGcsSettings,
googleChronicleFeedDetailsGcsSettingsToTerraform,
googleChronicleFeedDetailsGcsSettingsToHclTerraform,
GoogleChronicleFeedDetailsGcsSettingsOutputReference,
GoogleChronicleFeedDetailsGcsV2Settings,
googleChronicleFeedDetailsGcsV2SettingsToTerraform,
googleChronicleFeedDetailsGcsV2SettingsToHclTerraform,
GoogleChronicleFeedDetailsGcsV2SettingsOutputReference,
GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettings,
googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsToTerraform,
googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsToHclTerraform,
GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsOutputReference,
GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettings,
googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsToTerraform,
googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsToHclTerraform,
GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsOutputReference,
GoogleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettings,
googleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsToTerraform,
googleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsToHclTerraform,
GoogleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsOutputReference,
GoogleChronicleFeedDetailsHttpSettings,
googleChronicleFeedDetailsHttpSettingsToTerraform,
googleChronicleFeedDetailsHttpSettingsToHclTerraform,
GoogleChronicleFeedDetailsHttpSettingsOutputReference,
GoogleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettings,
googleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsToTerraform,
googleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsToHclTerraform,
GoogleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsOutputReference,
GoogleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettings,
googleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsToTerraform,
googleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsToHclTerraform,
GoogleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsOutputReference,
GoogleChronicleFeedDetailsHttpsPushWebhookSettings,
googleChronicleFeedDetailsHttpsPushWebhookSettingsToTerraform,
googleChronicleFeedDetailsHttpsPushWebhookSettingsToHclTerraform,
GoogleChronicleFeedDetailsHttpsPushWebhookSettingsOutputReference,
GoogleChronicleFeedDetailsImpervaWafSettings,
googleChronicleFeedDetailsImpervaWafSettingsToTerraform,
googleChronicleFeedDetailsImpervaWafSettingsToHclTerraform,
GoogleChronicleFeedDetailsImpervaWafSettingsOutputReference,
GoogleChronicleFeedDetailsMandiantIocSettings,
googleChronicleFeedDetailsMandiantIocSettingsToTerraform,
googleChronicleFeedDetailsMandiantIocSettingsToHclTerraform,
GoogleChronicleFeedDetailsMandiantIocSettingsOutputReference,
GoogleChronicleFeedDetailsMicrosoftGraphAlertSettings,
googleChronicleFeedDetailsMicrosoftGraphAlertSettingsToTerraform,
googleChronicleFeedDetailsMicrosoftGraphAlertSettingsToHclTerraform,
GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsOutputReference,
GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettings,
googleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsToTerraform,
googleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsToHclTerraform,
GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsOutputReference,
GoogleChronicleFeedDetailsMimecastMailSettings,
googleChronicleFeedDetailsMimecastMailSettingsToTerraform,
googleChronicleFeedDetailsMimecastMailSettingsToHclTerraform,
GoogleChronicleFeedDetailsMimecastMailSettingsOutputReference,
GoogleChronicleFeedDetailsMimecastMailV2Settings,
googleChronicleFeedDetailsMimecastMailV2SettingsToTerraform,
googleChronicleFeedDetailsMimecastMailV2SettingsToHclTerraform,
GoogleChronicleFeedDetailsMimecastMailV2SettingsOutputReference,
GoogleChronicleFeedDetailsNetskopeAlertSettings,
googleChronicleFeedDetailsNetskopeAlertSettingsToTerraform,
googleChronicleFeedDetailsNetskopeAlertSettingsToHclTerraform,
GoogleChronicleFeedDetailsNetskopeAlertSettingsOutputReference,
GoogleChronicleFeedDetailsNetskopeAlertV2Settings,
googleChronicleFeedDetailsNetskopeAlertV2SettingsToTerraform,
googleChronicleFeedDetailsNetskopeAlertV2SettingsToHclTerraform,
GoogleChronicleFeedDetailsNetskopeAlertV2SettingsOutputReference,
GoogleChronicleFeedDetailsOffice365Settings,
googleChronicleFeedDetailsOffice365SettingsToTerraform,
googleChronicleFeedDetailsOffice365SettingsToHclTerraform,
GoogleChronicleFeedDetailsOffice365SettingsOutputReference,
GoogleChronicleFeedDetailsOktaSettings,
googleChronicleFeedDetailsOktaSettingsToTerraform,
googleChronicleFeedDetailsOktaSettingsToHclTerraform,
GoogleChronicleFeedDetailsOktaSettingsOutputReference,
GoogleChronicleFeedDetailsOktaUserContextSettings,
googleChronicleFeedDetailsOktaUserContextSettingsToTerraform,
googleChronicleFeedDetailsOktaUserContextSettingsToHclTerraform,
GoogleChronicleFeedDetailsOktaUserContextSettingsOutputReference,
GoogleChronicleFeedDetailsPanIocSettings,
googleChronicleFeedDetailsPanIocSettingsToTerraform,
googleChronicleFeedDetailsPanIocSettingsToHclTerraform,
GoogleChronicleFeedDetailsPanIocSettingsOutputReference,
GoogleChronicleFeedDetailsPanPrismaCloudSettings,
googleChronicleFeedDetailsPanPrismaCloudSettingsToTerraform,
googleChronicleFeedDetailsPanPrismaCloudSettingsToHclTerraform,
GoogleChronicleFeedDetailsPanPrismaCloudSettingsOutputReference,
GoogleChronicleFeedDetailsProofpointMailSettings,
googleChronicleFeedDetailsProofpointMailSettingsToTerraform,
googleChronicleFeedDetailsProofpointMailSettingsToHclTerraform,
GoogleChronicleFeedDetailsProofpointMailSettingsOutputReference,
GoogleChronicleFeedDetailsProofpointOnDemandSettings,
googleChronicleFeedDetailsProofpointOnDemandSettingsToTerraform,
googleChronicleFeedDetailsProofpointOnDemandSettingsToHclTerraform,
GoogleChronicleFeedDetailsProofpointOnDemandSettingsOutputReference,
GoogleChronicleFeedDetailsPubsubSettings,
googleChronicleFeedDetailsPubsubSettingsToTerraform,
googleChronicleFeedDetailsPubsubSettingsToHclTerraform,
GoogleChronicleFeedDetailsPubsubSettingsOutputReference,
GoogleChronicleFeedDetailsQualysScanSettings,
googleChronicleFeedDetailsQualysScanSettingsToTerraform,
googleChronicleFeedDetailsQualysScanSettingsToHclTerraform,
GoogleChronicleFeedDetailsQualysScanSettingsOutputReference,
GoogleChronicleFeedDetailsQualysVmSettings,
googleChronicleFeedDetailsQualysVmSettingsToTerraform,
googleChronicleFeedDetailsQualysVmSettingsToHclTerraform,
GoogleChronicleFeedDetailsQualysVmSettingsOutputReference,
GoogleChronicleFeedDetailsRapid7InsightSettings,
googleChronicleFeedDetailsRapid7InsightSettingsToTerraform,
googleChronicleFeedDetailsRapid7InsightSettingsToHclTerraform,
GoogleChronicleFeedDetailsRapid7InsightSettingsOutputReference,
GoogleChronicleFeedDetailsRecordedFutureIocSettings,
googleChronicleFeedDetailsRecordedFutureIocSettingsToTerraform,
googleChronicleFeedDetailsRecordedFutureIocSettingsToHclTerraform,
GoogleChronicleFeedDetailsRecordedFutureIocSettingsOutputReference,
GoogleChronicleFeedDetailsRhIsacIocSettings,
googleChronicleFeedDetailsRhIsacIocSettingsToTerraform,
googleChronicleFeedDetailsRhIsacIocSettingsToHclTerraform,
GoogleChronicleFeedDetailsRhIsacIocSettingsOutputReference } from './structs0'
export interface GoogleChronicleFeedDetailsSalesforceSettings {
  /**
  * API hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * oauth_jwt_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#oauth_jwt_credentials GoogleChronicleFeed#oauth_jwt_credentials}
  */
  readonly oauthJwtCredentials?: GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentials;
  /**
  * oauth_password_grant_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#oauth_password_grant_auth GoogleChronicleFeed#oauth_password_grant_auth}
  */
  readonly oauthPasswordGrantAuth?: GoogleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuth;
}

export function googleChronicleFeedDetailsSalesforceSettingsToTerraform(struct?: GoogleChronicleFeedDetailsSalesforceSettingsOutputReference | GoogleChronicleFeedDetailsSalesforceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    oauth_jwt_credentials: googleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsToTerraform(struct!.oauthJwtCredentials),
    oauth_password_grant_auth: googleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthToTerraform(struct!.oauthPasswordGrantAuth),
  }
}


export function googleChronicleFeedDetailsSalesforceSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsSalesforceSettingsOutputReference | GoogleChronicleFeedDetailsSalesforceSettings): any {
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
    oauth_jwt_credentials: {
      value: googleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsToHclTerraform(struct!.oauthJwtCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsList",
    },
    oauth_password_grant_auth: {
      value: googleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthToHclTerraform(struct!.oauthPasswordGrantAuth),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsSalesforceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsSalesforceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._oauthJwtCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthJwtCredentials = this._oauthJwtCredentials?.internalValue;
    }
    if (this._oauthPasswordGrantAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthPasswordGrantAuth = this._oauthPasswordGrantAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsSalesforceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._oauthJwtCredentials.internalValue = undefined;
      this._oauthPasswordGrantAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._oauthJwtCredentials.internalValue = value.oauthJwtCredentials;
      this._oauthPasswordGrantAuth.internalValue = value.oauthPasswordGrantAuth;
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

  // oauth_jwt_credentials - computed: false, optional: true, required: false
  private _oauthJwtCredentials = new GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsOutputReference(this, "oauth_jwt_credentials");
  public get oauthJwtCredentials() {
    return this._oauthJwtCredentials;
  }
  public putOauthJwtCredentials(value: GoogleChronicleFeedDetailsSalesforceSettingsOauthJwtCredentials) {
    this._oauthJwtCredentials.internalValue = value;
  }
  public resetOauthJwtCredentials() {
    this._oauthJwtCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthJwtCredentialsInput() {
    return this._oauthJwtCredentials.internalValue;
  }

  // oauth_password_grant_auth - computed: false, optional: true, required: false
  private _oauthPasswordGrantAuth = new GoogleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthOutputReference(this, "oauth_password_grant_auth");
  public get oauthPasswordGrantAuth() {
    return this._oauthPasswordGrantAuth;
  }
  public putOauthPasswordGrantAuth(value: GoogleChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuth) {
    this._oauthPasswordGrantAuth.internalValue = value;
  }
  public resetOauthPasswordGrantAuth() {
    this._oauthPasswordGrantAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthPasswordGrantAuthInput() {
    return this._oauthPasswordGrantAuth.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValues {
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

export function googleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
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

export class GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined) {
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

export class GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#header_key_values GoogleChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable;
}

export function googleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_key_values: cdktf.listMapper(googleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function googleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_key_values: {
      value: cdktf.listMapperHcl(googleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthentication | undefined) {
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
  private _headerKeyValues = new GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable) {
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
export interface GoogleChronicleFeedDetailsSentineloneAlertSettings {
  /**
  * Hostname of SentinelOne alert settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * initialStartTime from when to fetch the alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#initial_start_time GoogleChronicleFeed#initial_start_time}
  */
  readonly initialStartTime?: string;
  /**
  * Is the customer subscribed to Alerts Api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#is_alert_api_subscribed GoogleChronicleFeed#is_alert_api_subscribed}
  */
  readonly isAlertApiSubscribed?: boolean | cdktf.IResolvable;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthentication;
}

export function googleChronicleFeedDetailsSentineloneAlertSettingsToTerraform(struct?: GoogleChronicleFeedDetailsSentineloneAlertSettingsOutputReference | GoogleChronicleFeedDetailsSentineloneAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    initial_start_time: cdktf.stringToTerraform(struct!.initialStartTime),
    is_alert_api_subscribed: cdktf.booleanToTerraform(struct!.isAlertApiSubscribed),
    authentication: googleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsSentineloneAlertSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsSentineloneAlertSettingsOutputReference | GoogleChronicleFeedDetailsSentineloneAlertSettings): any {
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
    initial_start_time: {
      value: cdktf.stringToHclTerraform(struct!.initialStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_alert_api_subscribed: {
      value: cdktf.booleanToHclTerraform(struct!.isAlertApiSubscribed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authentication: {
      value: googleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsSentineloneAlertSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsSentineloneAlertSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._initialStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialStartTime = this._initialStartTime;
    }
    if (this._isAlertApiSubscribed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAlertApiSubscribed = this._isAlertApiSubscribed;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsSentineloneAlertSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._initialStartTime = undefined;
      this._isAlertApiSubscribed = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._initialStartTime = value.initialStartTime;
      this._isAlertApiSubscribed = value.isAlertApiSubscribed;
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

  // initial_start_time - computed: false, optional: true, required: false
  private _initialStartTime?: string; 
  public get initialStartTime() {
    return this.getStringAttribute('initial_start_time');
  }
  public set initialStartTime(value: string) {
    this._initialStartTime = value;
  }
  public resetInitialStartTime() {
    this._initialStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialStartTimeInput() {
    return this._initialStartTime;
  }

  // is_alert_api_subscribed - computed: false, optional: true, required: false
  private _isAlertApiSubscribed?: boolean | cdktf.IResolvable; 
  public get isAlertApiSubscribed() {
    return this.getBooleanAttribute('is_alert_api_subscribed');
  }
  public set isAlertApiSubscribed(value: boolean | cdktf.IResolvable) {
    this._isAlertApiSubscribed = value;
  }
  public resetIsAlertApiSubscribed() {
    this._isAlertApiSubscribed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAlertApiSubscribedInput() {
    return this._isAlertApiSubscribed;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsSentineloneAlertSettingsAuthentication) {
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
export interface GoogleChronicleFeedDetailsServiceNowCmdbSettingsAuthentication {
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

export function googleChronicleFeedDetailsServiceNowCmdbSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsServiceNowCmdbSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsServiceNowCmdbSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsServiceNowCmdbSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsServiceNowCmdbSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsServiceNowCmdbSettingsAuthentication): any {
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

export class GoogleChronicleFeedDetailsServiceNowCmdbSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsServiceNowCmdbSettingsAuthentication | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsServiceNowCmdbSettingsAuthentication | undefined) {
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
export interface GoogleChronicleFeedDetailsServiceNowCmdbSettings {
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
  readonly authentication?: GoogleChronicleFeedDetailsServiceNowCmdbSettingsAuthentication;
}

export function googleChronicleFeedDetailsServiceNowCmdbSettingsToTerraform(struct?: GoogleChronicleFeedDetailsServiceNowCmdbSettingsOutputReference | GoogleChronicleFeedDetailsServiceNowCmdbSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feedname: cdktf.stringToTerraform(struct!.feedname),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    authentication: googleChronicleFeedDetailsServiceNowCmdbSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsServiceNowCmdbSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsServiceNowCmdbSettingsOutputReference | GoogleChronicleFeedDetailsServiceNowCmdbSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: googleChronicleFeedDetailsServiceNowCmdbSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsServiceNowCmdbSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsServiceNowCmdbSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsServiceNowCmdbSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: GoogleChronicleFeedDetailsServiceNowCmdbSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._feedname = undefined;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._feedname = value.feedname;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
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
  private _authentication = new GoogleChronicleFeedDetailsServiceNowCmdbSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsServiceNowCmdbSettingsAuthentication) {
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
export interface GoogleChronicleFeedDetailsSftpSettingsAuthentication {
  /**
  * Password. Used for username and password authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#password GoogleChronicleFeed#password}
  */
  readonly password?: string;
  /**
  * Private key. Used for private key authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#private_key GoogleChronicleFeed#private_key}
  */
  readonly privateKey?: string;
  /**
  * Private key passphrase. Used for private key authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#private_key_passphrase GoogleChronicleFeed#private_key_passphrase}
  */
  readonly privateKeyPassphrase?: string;
  /**
  * Username. Used for username and password authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#username GoogleChronicleFeed#username}
  */
  readonly username?: string;
}

export function googleChronicleFeedDetailsSftpSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsSftpSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsSftpSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    private_key_passphrase: cdktf.stringToTerraform(struct!.privateKeyPassphrase),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function googleChronicleFeedDetailsSftpSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsSftpSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsSftpSettingsAuthentication): any {
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
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPassphrase),
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

export class GoogleChronicleFeedDetailsSftpSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsSftpSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPassphrase = this._privateKeyPassphrase;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsSftpSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._privateKey = undefined;
      this._privateKeyPassphrase = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._privateKey = value.privateKey;
      this._privateKeyPassphrase = value.privateKeyPassphrase;
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

  // private_key_passphrase - computed: false, optional: true, required: false
  private _privateKeyPassphrase?: string; 
  public get privateKeyPassphrase() {
    return this.getStringAttribute('private_key_passphrase');
  }
  public set privateKeyPassphrase(value: string) {
    this._privateKeyPassphrase = value;
  }
  public resetPrivateKeyPassphrase() {
    this._privateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseInput() {
    return this._privateKeyPassphrase;
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
export interface GoogleChronicleFeedDetailsSftpSettings {
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
  * SFTP URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#uri GoogleChronicleFeed#uri}
  */
  readonly uri?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsSftpSettingsAuthentication;
}

export function googleChronicleFeedDetailsSftpSettingsToTerraform(struct?: GoogleChronicleFeedDetailsSftpSettingsOutputReference | GoogleChronicleFeedDetailsSftpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_deletion_option: cdktf.stringToTerraform(struct!.sourceDeletionOption),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    uri: cdktf.stringToTerraform(struct!.uri),
    authentication: googleChronicleFeedDetailsSftpSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsSftpSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsSftpSettingsOutputReference | GoogleChronicleFeedDetailsSftpSettings): any {
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
    authentication: {
      value: googleChronicleFeedDetailsSftpSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsSftpSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsSftpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsSftpSettings | undefined {
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
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsSftpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceDeletionOption = undefined;
      this._sourceType = undefined;
      this._uri = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._sourceType = value.sourceType;
      this._uri = value.uri;
      this._authentication.internalValue = value.authentication;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsSftpSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsSftpSettingsAuthentication) {
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
export interface GoogleChronicleFeedDetailsSymantecEventExportSettingsAuthentication {
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
  * Refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#refresh_token GoogleChronicleFeed#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#token_endpoint GoogleChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
}

export function googleChronicleFeedDetailsSymantecEventExportSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsSymantecEventExportSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsSymantecEventExportSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function googleChronicleFeedDetailsSymantecEventExportSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsSymantecEventExportSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsSymantecEventExportSettingsAuthentication): any {
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
    refresh_token: {
      value: cdktf.stringToHclTerraform(struct!.refreshToken),
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

export class GoogleChronicleFeedDetailsSymantecEventExportSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsSymantecEventExportSettingsAuthentication | undefined {
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
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsSymantecEventExportSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._refreshToken = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._refreshToken = value.refreshToken;
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

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
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
export interface GoogleChronicleFeedDetailsSymantecEventExportSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsSymantecEventExportSettingsAuthentication;
}

export function googleChronicleFeedDetailsSymantecEventExportSettingsToTerraform(struct?: GoogleChronicleFeedDetailsSymantecEventExportSettingsOutputReference | GoogleChronicleFeedDetailsSymantecEventExportSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: googleChronicleFeedDetailsSymantecEventExportSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsSymantecEventExportSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsSymantecEventExportSettingsOutputReference | GoogleChronicleFeedDetailsSymantecEventExportSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: googleChronicleFeedDetailsSymantecEventExportSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsSymantecEventExportSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsSymantecEventExportSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsSymantecEventExportSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsSymantecEventExportSettings | undefined) {
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
  private _authentication = new GoogleChronicleFeedDetailsSymantecEventExportSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsSymantecEventExportSettingsAuthentication) {
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
export interface GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValues {
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

export function googleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesToTerraform(struct?: GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValues | cdktf.IResolvable): any {
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

export class GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValues | cdktf.IResolvable | undefined) {
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

export class GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesOutputReference {
    return new GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleFeedDetailsThinkstCanarySettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#header_key_values GoogleChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable;
}

export function googleChronicleFeedDetailsThinkstCanarySettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsThinkstCanarySettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_key_values: cdktf.listMapper(googleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function googleChronicleFeedDetailsThinkstCanarySettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsThinkstCanarySettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_key_values: {
      value: cdktf.listMapperHcl(googleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsThinkstCanarySettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsThinkstCanarySettingsAuthentication | undefined) {
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
  private _headerKeyValues = new GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValues[] | cdktf.IResolvable) {
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
export interface GoogleChronicleFeedDetailsThinkstCanarySettings {
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
  readonly authentication?: GoogleChronicleFeedDetailsThinkstCanarySettingsAuthentication;
}

export function googleChronicleFeedDetailsThinkstCanarySettingsToTerraform(struct?: GoogleChronicleFeedDetailsThinkstCanarySettingsOutputReference | GoogleChronicleFeedDetailsThinkstCanarySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    authentication: googleChronicleFeedDetailsThinkstCanarySettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsThinkstCanarySettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsThinkstCanarySettingsOutputReference | GoogleChronicleFeedDetailsThinkstCanarySettings): any {
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
      value: googleChronicleFeedDetailsThinkstCanarySettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsThinkstCanarySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsThinkstCanarySettings | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsThinkstCanarySettings | undefined) {
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
  private _authentication = new GoogleChronicleFeedDetailsThinkstCanarySettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsThinkstCanarySettingsAuthentication) {
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
export interface GoogleChronicleFeedDetailsThreatConnectIocSettingsAuthentication {
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

export function googleChronicleFeedDetailsThreatConnectIocSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsThreatConnectIocSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsThreatConnectIocSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsThreatConnectIocSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsThreatConnectIocSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsThreatConnectIocSettingsAuthentication): any {
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

export class GoogleChronicleFeedDetailsThreatConnectIocSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsThreatConnectIocSettingsAuthentication | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsThreatConnectIocSettingsAuthentication | undefined) {
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
export interface GoogleChronicleFeedDetailsThreatConnectIocSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Owners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#owners GoogleChronicleFeed#owners}
  */
  readonly owners?: string[];
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsThreatConnectIocSettingsAuthentication;
}

export function googleChronicleFeedDetailsThreatConnectIocSettingsToTerraform(struct?: GoogleChronicleFeedDetailsThreatConnectIocSettingsOutputReference | GoogleChronicleFeedDetailsThreatConnectIocSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    owners: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.owners),
    authentication: googleChronicleFeedDetailsThreatConnectIocSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsThreatConnectIocSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsThreatConnectIocSettingsOutputReference | GoogleChronicleFeedDetailsThreatConnectIocSettings): any {
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
    owners: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.owners),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    authentication: {
      value: googleChronicleFeedDetailsThreatConnectIocSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsThreatConnectIocSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsThreatConnectIocSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsThreatConnectIocSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._owners !== undefined) {
      hasAnyValues = true;
      internalValueResult.owners = this._owners;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsThreatConnectIocSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._owners = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._owners = value.owners;
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

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsThreatConnectIocSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsThreatConnectIocSettingsAuthentication) {
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
export interface GoogleChronicleFeedDetailsThreatConnectIocV3SettingsAuthentication {
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

export function googleChronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsThreatConnectIocV3SettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsThreatConnectIocV3SettingsAuthentication): any {
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

export class GoogleChronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsThreatConnectIocV3SettingsAuthentication | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsThreatConnectIocV3SettingsAuthentication | undefined) {
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
export interface GoogleChronicleFeedDetailsThreatConnectIocV3Settings {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#fields GoogleChronicleFeed#fields}
  */
  readonly fields?: string[];
  /**
  * hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#hostname GoogleChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Owners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#owners GoogleChronicleFeed#owners}
  */
  readonly owners?: string[];
  /**
  * Schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#schedule GoogleChronicleFeed#schedule}
  */
  readonly schedule?: number;
  /**
  * ThreatConnect Query Language filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#tql_query GoogleChronicleFeed#tql_query}
  */
  readonly tqlQuery?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsThreatConnectIocV3SettingsAuthentication;
}

export function googleChronicleFeedDetailsThreatConnectIocV3SettingsToTerraform(struct?: GoogleChronicleFeedDetailsThreatConnectIocV3SettingsOutputReference | GoogleChronicleFeedDetailsThreatConnectIocV3Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    owners: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.owners),
    schedule: cdktf.numberToTerraform(struct!.schedule),
    tql_query: cdktf.stringToTerraform(struct!.tqlQuery),
    authentication: googleChronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsThreatConnectIocV3SettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsThreatConnectIocV3SettingsOutputReference | GoogleChronicleFeedDetailsThreatConnectIocV3Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
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
    owners: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.owners),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schedule: {
      value: cdktf.numberToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tql_query: {
      value: cdktf.stringToHclTerraform(struct!.tqlQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsThreatConnectIocV3SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsThreatConnectIocV3Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._owners !== undefined) {
      hasAnyValues = true;
      internalValueResult.owners = this._owners;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._tqlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.tqlQuery = this._tqlQuery;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsThreatConnectIocV3Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
      this._hostname = undefined;
      this._owners = undefined;
      this._schedule = undefined;
      this._tqlQuery = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields = value.fields;
      this._hostname = value.hostname;
      this._owners = value.owners;
      this._schedule = value.schedule;
      this._tqlQuery = value.tqlQuery;
      this._authentication.internalValue = value.authentication;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
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

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: number; 
  public get schedule() {
    return this.getNumberAttribute('schedule');
  }
  public set schedule(value: number) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // tql_query - computed: false, optional: true, required: false
  private _tqlQuery?: string; 
  public get tqlQuery() {
    return this.getStringAttribute('tql_query');
  }
  public set tqlQuery(value: string) {
    this._tqlQuery = value;
  }
  public resetTqlQuery() {
    this._tqlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tqlQueryInput() {
    return this._tqlQuery;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsThreatConnectIocV3SettingsAuthentication) {
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
export interface GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMsso {
  /**
  * The login api endpoint url.
  * This must be a valid URL with an http or https scheme. It has no default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#api_endpoint GoogleChronicleFeed#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * Password of the account identified by username.
  * There are no restrictions on the format of the password. It has no default,
  * specifically enforced min / max length or character set. The password
  * will have been provided by an MSSO administrator and it is assumed that
  * they have provided a password that is internally consistent with MSSO
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#password GoogleChronicleFeed#password}
  */
  readonly password?: string;
  /**
  * Username for MSSO authentication.
  * There are no restrictions on the format of the username. It has no default,
  * specifically enforced min / max length or character set. The username
  * will have been provided by an MSSO administrator and it is assumed that
  * they have provided a username that is internally consistent with MSSO
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#username GoogleChronicleFeed#username}
  */
  readonly username?: string;
}

export function googleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoToTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoOutputReference | GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMsso): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint: cdktf.stringToTerraform(struct!.apiEndpoint),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function googleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoToHclTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoOutputReference | GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMsso): any {
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

export class GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMsso | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint;
    }
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

  public set internalValue(value: GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMsso | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiEndpoint = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiEndpoint = value.apiEndpoint;
      this._password = value.password;
      this._username = value.username;
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
export interface GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIam {
  /**
  * Client ID generated in Trellix IAM.
  * This is a unique identifier for the user that is generated in Trellix IAM.
  * It has no default, specifically enforced min / max length or character set.
  * It is assumed that the Client ID generated in Trellix IAM is internally
  * consistent with Trellix IAM authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_id GoogleChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Secret associated with the Client ID.
  * This is the secret generated in Trellix IAM for the Client ID. It has no
  * default, specifically enforced min / max length or character set. It is
  * assumed that the secret generated in Trellix IAM is internally
  * consistent with Trellix IAM authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_secret GoogleChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * OAUTH 2 scope to request for the authentication token.
  * This is the OAUTH 2 scope to request for the authentication token. It has
  * no default, specifically enforced min / max length or character set. It is
  * assumed that the scope provided is internally consistent with Trellix IAM
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#scope GoogleChronicleFeed#scope}
  */
  readonly scope?: string;
}

export function googleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamToTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamOutputReference | GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function googleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamToHclTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamOutputReference | GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIam): any {
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
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIam | undefined {
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
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._scope = value.scope;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthentication {
  /**
  * msso block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#msso GoogleChronicleFeed#msso}
  */
  readonly msso?: GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMsso;
  /**
  * trellix_iam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#trellix_iam GoogleChronicleFeed#trellix_iam}
  */
  readonly trellixIam?: GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIam;
}

export function googleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    msso: googleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoToTerraform(struct!.msso),
    trellix_iam: googleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamToTerraform(struct!.trellixIam),
  }
}


export function googleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    msso: {
      value: googleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoToHclTerraform(struct!.msso),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoList",
    },
    trellix_iam: {
      value: googleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamToHclTerraform(struct!.trellixIam),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._msso?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msso = this._msso?.internalValue;
    }
    if (this._trellixIam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trellixIam = this._trellixIam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._msso.internalValue = undefined;
      this._trellixIam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._msso.internalValue = value.msso;
      this._trellixIam.internalValue = value.trellixIam;
    }
  }

  // msso - computed: false, optional: true, required: false
  private _msso = new GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoOutputReference(this, "msso");
  public get msso() {
    return this._msso;
  }
  public putMsso(value: GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMsso) {
    this._msso.internalValue = value;
  }
  public resetMsso() {
    this._msso.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssoInput() {
    return this._msso.internalValue;
  }

  // trellix_iam - computed: false, optional: true, required: false
  private _trellixIam = new GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamOutputReference(this, "trellix_iam");
  public get trellixIam() {
    return this._trellixIam;
  }
  public putTrellixIam(value: GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIam) {
    this._trellixIam.internalValue = value;
  }
  public resetTrellixIam() {
    this._trellixIam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trellixIamInput() {
    return this._trellixIam.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsTrellixHxAlertsSettings {
  /**
  * Trellix HX Device URL.
  * This must be a valid URL with an http or https scheme. It has no default.
  * Usually a device URL is in the form of either:
  * https://xxx.trellix.com/hx/id//
  * - or -
  * https://htapdeviceproxy.md.mandiant.net/dphb/hx//
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#endpoint GoogleChronicleFeed#endpoint}
  */
  readonly endpoint?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthentication;
}

export function googleChronicleFeedDetailsTrellixHxAlertsSettingsToTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxAlertsSettingsOutputReference | GoogleChronicleFeedDetailsTrellixHxAlertsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    authentication: googleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsTrellixHxAlertsSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxAlertsSettingsOutputReference | GoogleChronicleFeedDetailsTrellixHxAlertsSettings): any {
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
    authentication: {
      value: googleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsTrellixHxAlertsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsTrellixHxAlertsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsTrellixHxAlertsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsTrellixHxAlertsSettingsAuthentication) {
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
export interface GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMsso {
  /**
  * The login api endpoint url.
  * This must be a valid URL with an http or https scheme. It has no default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#api_endpoint GoogleChronicleFeed#api_endpoint}
  */
  readonly apiEndpoint: string;
  /**
  * Password of the account identified by username.
  * There are no restrictions on the format of the password. It has no default,
  * specifically enforced min / max length or character set. The password
  * will have been provided by an MSSO administrator and it is assumed that
  * they have provided a password that is internally consistent with MSSO
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#password GoogleChronicleFeed#password}
  */
  readonly password: string;
  /**
  * Username for MSSO authentication.
  * There are no restrictions on the format of the username. It has no default,
  * specifically enforced min / max length or character set. The username
  * will have been provided by an MSSO administrator and it is assumed that
  * they have provided a username that is internally consistent with MSSO
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#username GoogleChronicleFeed#username}
  */
  readonly username: string;
}

export function googleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoToTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoOutputReference | GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMsso): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint: cdktf.stringToTerraform(struct!.apiEndpoint),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function googleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoToHclTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoOutputReference | GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMsso): any {
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

export class GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMsso | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint;
    }
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

  public set internalValue(value: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMsso | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiEndpoint = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiEndpoint = value.apiEndpoint;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // api_endpoint - computed: false, optional: false, required: true
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }
  public set apiEndpoint(value: string) {
    this._apiEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
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
export interface GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIam {
  /**
  * Client ID generated in Trellix IAM.
  * This is a unique identifier for the user that is generated in Trellix IAM.
  * It has no default, specifically enforced min / max length or character set.
  * It is assumed that the Client ID generated in Trellix IAM is internally
  * consistent with Trellix IAM authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_id GoogleChronicleFeed#client_id}
  */
  readonly clientId: string;
  /**
  * Secret associated with the Client ID.
  * This is the secret generated in Trellix IAM for the Client ID. It has no
  * default, specifically enforced min / max length or character set. It is
  * assumed that the secret generated in Trellix IAM is internally
  * consistent with Trellix IAM authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_secret GoogleChronicleFeed#client_secret}
  */
  readonly clientSecret: string;
  /**
  * OAUTH 2 scope to request for the authentication token.
  * This is the OAUTH 2 scope to request for the authentication token. It has
  * no default, specifically enforced min / max length or character set. It is
  * assumed that the scope provided is internally consistent with Trellix IAM
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#scope GoogleChronicleFeed#scope}
  */
  readonly scope: string;
}

export function googleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamToTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamOutputReference | GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function googleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamToHclTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamOutputReference | GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIam): any {
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
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIam | undefined {
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
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._scope = value.scope;
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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthentication {
  /**
  * msso block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#msso GoogleChronicleFeed#msso}
  */
  readonly msso?: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMsso;
  /**
  * trellix_iam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#trellix_iam GoogleChronicleFeed#trellix_iam}
  */
  readonly trellixIam?: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIam;
}

export function googleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    msso: googleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoToTerraform(struct!.msso),
    trellix_iam: googleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamToTerraform(struct!.trellixIam),
  }
}


export function googleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    msso: {
      value: googleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoToHclTerraform(struct!.msso),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoList",
    },
    trellix_iam: {
      value: googleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamToHclTerraform(struct!.trellixIam),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._msso?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msso = this._msso?.internalValue;
    }
    if (this._trellixIam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trellixIam = this._trellixIam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._msso.internalValue = undefined;
      this._trellixIam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._msso.internalValue = value.msso;
      this._trellixIam.internalValue = value.trellixIam;
    }
  }

  // msso - computed: false, optional: true, required: false
  private _msso = new GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoOutputReference(this, "msso");
  public get msso() {
    return this._msso;
  }
  public putMsso(value: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMsso) {
    this._msso.internalValue = value;
  }
  public resetMsso() {
    this._msso.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssoInput() {
    return this._msso.internalValue;
  }

  // trellix_iam - computed: false, optional: true, required: false
  private _trellixIam = new GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamOutputReference(this, "trellix_iam");
  public get trellixIam() {
    return this._trellixIam;
  }
  public putTrellixIam(value: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIam) {
    this._trellixIam.internalValue = value;
  }
  public resetTrellixIam() {
    this._trellixIam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trellixIamInput() {
    return this._trellixIam.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettings {
  /**
  * Trellix HX Device URL.
  * This must be a valid URL with an http or https scheme. It has no default.
  * Usually a device URL is in the form of either:
  * https://xxx.trellix.com/hx/id//
  * - or -
  * https://htapdeviceproxy.md.mandiant.net/dphb/hx//
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#endpoint GoogleChronicleFeed#endpoint}
  */
  readonly endpoint: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthentication;
}

export function googleChronicleFeedDetailsTrellixHxBulkAcqsSettingsToTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsOutputReference | GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    authentication: googleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsTrellixHxBulkAcqsSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsOutputReference | GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettings): any {
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
    authentication: {
      value: googleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._authentication.internalValue = value.authentication;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthentication) {
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
export interface GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMsso {
  /**
  * The login api endpoint url.
  * This must be a valid URL with an http or https scheme. It has no default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#api_endpoint GoogleChronicleFeed#api_endpoint}
  */
  readonly apiEndpoint: string;
  /**
  * Password of the account identified by username.
  * There are no restrictions on the format of the password. It has no default,
  * specifically enforced min / max length or character set. The password
  * will have been provided by an MSSO administrator and it is assumed that
  * they have provided a password that is internally consistent with MSSO
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#password GoogleChronicleFeed#password}
  */
  readonly password: string;
  /**
  * Username for MSSO authentication.
  * There are no restrictions on the format of the username. It has no default,
  * specifically enforced min / max length or character set. The username
  * will have been provided by an MSSO administrator and it is assumed that
  * they have provided a username that is internally consistent with MSSO
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#username GoogleChronicleFeed#username}
  */
  readonly username: string;
}

export function googleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoToTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoOutputReference | GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMsso): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint: cdktf.stringToTerraform(struct!.apiEndpoint),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function googleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoToHclTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoOutputReference | GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMsso): any {
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

export class GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMsso | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint;
    }
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

  public set internalValue(value: GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMsso | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiEndpoint = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiEndpoint = value.apiEndpoint;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // api_endpoint - computed: false, optional: false, required: true
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }
  public set apiEndpoint(value: string) {
    this._apiEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
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
export interface GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIam {
  /**
  * Client ID generated in Trellix IAM.
  * This is a unique identifier for the user that is generated in Trellix IAM.
  * It has no default, specifically enforced min / max length or character set.
  * It is assumed that the Client ID generated in Trellix IAM is internally
  * consistent with Trellix IAM authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_id GoogleChronicleFeed#client_id}
  */
  readonly clientId: string;
  /**
  * Secret associated with the Client ID.
  * This is the secret generated in Trellix IAM for the Client ID. It has no
  * default, specifically enforced min / max length or character set. It is
  * assumed that the secret generated in Trellix IAM is internally
  * consistent with Trellix IAM authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#client_secret GoogleChronicleFeed#client_secret}
  */
  readonly clientSecret: string;
  /**
  * OAUTH 2 scope to request for the authentication token.
  * This is the OAUTH 2 scope to request for the authentication token. It has
  * no default, specifically enforced min / max length or character set. It is
  * assumed that the scope provided is internally consistent with Trellix IAM
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#scope GoogleChronicleFeed#scope}
  */
  readonly scope: string;
}

export function googleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamToTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamOutputReference | GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function googleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamToHclTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamOutputReference | GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIam): any {
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
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIam | undefined {
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
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._scope = value.scope;
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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthentication {
  /**
  * msso block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#msso GoogleChronicleFeed#msso}
  */
  readonly msso?: GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMsso;
  /**
  * trellix_iam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#trellix_iam GoogleChronicleFeed#trellix_iam}
  */
  readonly trellixIam?: GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIam;
}

export function googleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    msso: googleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoToTerraform(struct!.msso),
    trellix_iam: googleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamToTerraform(struct!.trellixIam),
  }
}


export function googleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    msso: {
      value: googleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoToHclTerraform(struct!.msso),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoList",
    },
    trellix_iam: {
      value: googleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamToHclTerraform(struct!.trellixIam),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._msso?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msso = this._msso?.internalValue;
    }
    if (this._trellixIam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trellixIam = this._trellixIam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._msso.internalValue = undefined;
      this._trellixIam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._msso.internalValue = value.msso;
      this._trellixIam.internalValue = value.trellixIam;
    }
  }

  // msso - computed: false, optional: true, required: false
  private _msso = new GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoOutputReference(this, "msso");
  public get msso() {
    return this._msso;
  }
  public putMsso(value: GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMsso) {
    this._msso.internalValue = value;
  }
  public resetMsso() {
    this._msso.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssoInput() {
    return this._msso.internalValue;
  }

  // trellix_iam - computed: false, optional: true, required: false
  private _trellixIam = new GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamOutputReference(this, "trellix_iam");
  public get trellixIam() {
    return this._trellixIam;
  }
  public putTrellixIam(value: GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIam) {
    this._trellixIam.internalValue = value;
  }
  public resetTrellixIam() {
    this._trellixIam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trellixIamInput() {
    return this._trellixIam.internalValue;
  }
}
export interface GoogleChronicleFeedDetailsTrellixHxHostsSettings {
  /**
  * Trellix HX Device URL.
  * This must be a valid URL with an http or https scheme. It has no default.
  * Usually a device URL is in the form of either:
  * https://xxx.trellix.com/hx/id//
  * - or -
  * https://htapdeviceproxy.md.mandiant.net/dphb/hx//
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#endpoint GoogleChronicleFeed#endpoint}
  */
  readonly endpoint: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthentication;
}

export function googleChronicleFeedDetailsTrellixHxHostsSettingsToTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxHostsSettingsOutputReference | GoogleChronicleFeedDetailsTrellixHxHostsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    authentication: googleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsTrellixHxHostsSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsTrellixHxHostsSettingsOutputReference | GoogleChronicleFeedDetailsTrellixHxHostsSettings): any {
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
    authentication: {
      value: googleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsTrellixHxHostsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsTrellixHxHostsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsTrellixHxHostsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._authentication.internalValue = value.authentication;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsTrellixHxHostsSettingsAuthentication) {
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
export interface GoogleChronicleFeedDetailsWebhookSettings {
}

export function googleChronicleFeedDetailsWebhookSettingsToTerraform(struct?: GoogleChronicleFeedDetailsWebhookSettingsOutputReference | GoogleChronicleFeedDetailsWebhookSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleChronicleFeedDetailsWebhookSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsWebhookSettingsOutputReference | GoogleChronicleFeedDetailsWebhookSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleChronicleFeedDetailsWebhookSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWebhookSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsWebhookSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleChronicleFeedDetailsWorkdaySettingsAuthentication {
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
  /**
  * Refresh Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#refresh_token GoogleChronicleFeed#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * The access token used to authenticate against Workday. This field is called
  * "secret" to maintain backwards compatibility. Workday was (only) configured
  * using username (which was unused) and secret (which is used as the access
  * token). Either this field or all of the other OAuth fields below must be
  * specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#secret GoogleChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#token_endpoint GoogleChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * Username. This is unused: Workday feeds were originally configured using a
  * username and secret authentication method, but only the secret field was
  * used, and it was used to supply the OAuth access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#user GoogleChronicleFeed#user}
  */
  readonly user?: string;
}

export function googleChronicleFeedDetailsWorkdaySettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsWorkdaySettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsWorkdaySettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
    secret: cdktf.stringToTerraform(struct!.secret),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleChronicleFeedDetailsWorkdaySettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkdaySettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsWorkdaySettingsAuthentication): any {
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
    refresh_token: {
      value: cdktf.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
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

export class GoogleChronicleFeedDetailsWorkdaySettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkdaySettingsAuthentication | undefined {
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
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
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

  public set internalValue(value: GoogleChronicleFeedDetailsWorkdaySettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._refreshToken = undefined;
      this._secret = undefined;
      this._tokenEndpoint = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._refreshToken = value.refreshToken;
      this._secret = value.secret;
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

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
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
export interface GoogleChronicleFeedDetailsWorkdaySettings {
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
  readonly authentication?: GoogleChronicleFeedDetailsWorkdaySettingsAuthentication;
}

export function googleChronicleFeedDetailsWorkdaySettingsToTerraform(struct?: GoogleChronicleFeedDetailsWorkdaySettingsOutputReference | GoogleChronicleFeedDetailsWorkdaySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    authentication: googleChronicleFeedDetailsWorkdaySettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsWorkdaySettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkdaySettingsOutputReference | GoogleChronicleFeedDetailsWorkdaySettings): any {
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
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsWorkdaySettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkdaySettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsWorkdaySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkdaySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: GoogleChronicleFeedDetailsWorkdaySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._tenantId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._tenantId = value.tenantId;
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
  private _authentication = new GoogleChronicleFeedDetailsWorkdaySettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsWorkdaySettingsAuthentication) {
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
export interface GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaims {
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

export function googleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaims): any {
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


export function googleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaims): any {
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

export class GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaims | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaims | undefined) {
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
export interface GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#private_key GoogleChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function googleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function googleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentials): any {
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

export class GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentials | undefined) {
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
export interface GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthentication {
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
  readonly claims?: GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#rs_credentials GoogleChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentials;
}

export function googleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    claims: googleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: googleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function googleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthentication): any {
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
      value: googleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: googleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthentication | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthentication | undefined) {
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
  private _claims = new GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaims) {
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
  private _rsCredentials = new GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentials) {
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
export interface GoogleChronicleFeedDetailsWorkspaceActivitySettings {
  /**
  * Applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#applications GoogleChronicleFeed#applications}
  */
  readonly applications?: string[];
  /**
  * Customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#workspace_customer_id GoogleChronicleFeed#workspace_customer_id}
  */
  readonly workspaceCustomerId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthentication;
}

export function googleChronicleFeedDetailsWorkspaceActivitySettingsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceActivitySettingsOutputReference | GoogleChronicleFeedDetailsWorkspaceActivitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
    workspace_customer_id: cdktf.stringToTerraform(struct!.workspaceCustomerId),
    authentication: googleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsWorkspaceActivitySettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceActivitySettingsOutputReference | GoogleChronicleFeedDetailsWorkspaceActivitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    workspace_customer_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceCustomerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsWorkspaceActivitySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceActivitySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._workspaceCustomerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceCustomerId = this._workspaceCustomerId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceActivitySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applications = undefined;
      this._workspaceCustomerId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applications = value.applications;
      this._workspaceCustomerId = value.workspaceCustomerId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // workspace_customer_id - computed: false, optional: true, required: false
  private _workspaceCustomerId?: string; 
  public get workspaceCustomerId() {
    return this.getStringAttribute('workspace_customer_id');
  }
  public set workspaceCustomerId(value: string) {
    this._workspaceCustomerId = value;
  }
  public resetWorkspaceCustomerId() {
    this._workspaceCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCustomerIdInput() {
    return this._workspaceCustomerId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsWorkspaceActivitySettingsAuthentication) {
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
export interface GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaims {
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

export function googleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaims): any {
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


export function googleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaims): any {
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

export class GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaims | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaims | undefined) {
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
export interface GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#private_key GoogleChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function googleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function googleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentials): any {
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

export class GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentials | undefined) {
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
export interface GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthentication {
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
  readonly claims?: GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#rs_credentials GoogleChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentials;
}

export function googleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    claims: googleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: googleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function googleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthentication): any {
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
      value: googleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: googleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthentication | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthentication | undefined) {
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
  private _claims = new GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaims) {
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
  private _rsCredentials = new GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentials) {
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
export interface GoogleChronicleFeedDetailsWorkspaceAlertsSettings {
  /**
  * Customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#workspace_customer_id GoogleChronicleFeed#workspace_customer_id}
  */
  readonly workspaceCustomerId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthentication;
}

export function googleChronicleFeedDetailsWorkspaceAlertsSettingsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceAlertsSettingsOutputReference | GoogleChronicleFeedDetailsWorkspaceAlertsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_customer_id: cdktf.stringToTerraform(struct!.workspaceCustomerId),
    authentication: googleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsWorkspaceAlertsSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceAlertsSettingsOutputReference | GoogleChronicleFeedDetailsWorkspaceAlertsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workspace_customer_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceCustomerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsWorkspaceAlertsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceAlertsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceCustomerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceCustomerId = this._workspaceCustomerId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceAlertsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceCustomerId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workspaceCustomerId = value.workspaceCustomerId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // workspace_customer_id - computed: false, optional: true, required: false
  private _workspaceCustomerId?: string; 
  public get workspaceCustomerId() {
    return this.getStringAttribute('workspace_customer_id');
  }
  public set workspaceCustomerId(value: string) {
    this._workspaceCustomerId = value;
  }
  public resetWorkspaceCustomerId() {
    this._workspaceCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCustomerIdInput() {
    return this._workspaceCustomerId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsWorkspaceAlertsSettingsAuthentication) {
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
export interface GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaims {
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

export function googleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaims): any {
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


export function googleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaims): any {
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

export class GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaims | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaims | undefined) {
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
export interface GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#private_key GoogleChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function googleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function googleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentials): any {
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

export class GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentials | undefined) {
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
export interface GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthentication {
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
  readonly claims?: GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#rs_credentials GoogleChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentials;
}

export function googleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    claims: googleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: googleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function googleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthentication): any {
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
      value: googleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: googleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthentication | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthentication | undefined) {
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
  private _claims = new GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaims) {
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
  private _rsCredentials = new GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentials) {
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
export interface GoogleChronicleFeedDetailsWorkspaceChromeOsSettings {
  /**
  * Customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#workspace_customer_id GoogleChronicleFeed#workspace_customer_id}
  */
  readonly workspaceCustomerId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthentication;
}

export function googleChronicleFeedDetailsWorkspaceChromeOsSettingsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsOutputReference | GoogleChronicleFeedDetailsWorkspaceChromeOsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_customer_id: cdktf.stringToTerraform(struct!.workspaceCustomerId),
    authentication: googleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsWorkspaceChromeOsSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsOutputReference | GoogleChronicleFeedDetailsWorkspaceChromeOsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workspace_customer_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceCustomerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceChromeOsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceCustomerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceCustomerId = this._workspaceCustomerId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceChromeOsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceCustomerId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workspaceCustomerId = value.workspaceCustomerId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // workspace_customer_id - computed: false, optional: true, required: false
  private _workspaceCustomerId?: string; 
  public get workspaceCustomerId() {
    return this.getStringAttribute('workspace_customer_id');
  }
  public set workspaceCustomerId(value: string) {
    this._workspaceCustomerId = value;
  }
  public resetWorkspaceCustomerId() {
    this._workspaceCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCustomerIdInput() {
    return this._workspaceCustomerId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsAuthentication) {
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
export interface GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaims {
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

export function googleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaims): any {
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


export function googleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaims): any {
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

export class GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaims | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaims | undefined) {
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
export interface GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#private_key GoogleChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function googleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function googleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentials): any {
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

export class GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentials | undefined) {
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
export interface GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthentication {
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
  readonly claims?: GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#rs_credentials GoogleChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentials;
}

export function googleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    claims: googleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: googleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function googleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthentication): any {
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
      value: googleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: googleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthentication | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthentication | undefined) {
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
  private _claims = new GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaims) {
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
  private _rsCredentials = new GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentials) {
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
export interface GoogleChronicleFeedDetailsWorkspaceGroupsSettings {
  /**
  * Customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#workspace_customer_id GoogleChronicleFeed#workspace_customer_id}
  */
  readonly workspaceCustomerId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthentication;
}

export function googleChronicleFeedDetailsWorkspaceGroupsSettingsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceGroupsSettingsOutputReference | GoogleChronicleFeedDetailsWorkspaceGroupsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_customer_id: cdktf.stringToTerraform(struct!.workspaceCustomerId),
    authentication: googleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsWorkspaceGroupsSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceGroupsSettingsOutputReference | GoogleChronicleFeedDetailsWorkspaceGroupsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workspace_customer_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceCustomerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsWorkspaceGroupsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceGroupsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceCustomerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceCustomerId = this._workspaceCustomerId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceGroupsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceCustomerId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workspaceCustomerId = value.workspaceCustomerId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // workspace_customer_id - computed: false, optional: true, required: false
  private _workspaceCustomerId?: string; 
  public get workspaceCustomerId() {
    return this.getStringAttribute('workspace_customer_id');
  }
  public set workspaceCustomerId(value: string) {
    this._workspaceCustomerId = value;
  }
  public resetWorkspaceCustomerId() {
    this._workspaceCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCustomerIdInput() {
    return this._workspaceCustomerId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsWorkspaceGroupsSettingsAuthentication) {
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
export interface GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaims {
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

export function googleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaims): any {
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


export function googleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaims): any {
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

export class GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaims | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaims | undefined) {
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
export interface GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#private_key GoogleChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function googleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function googleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentials): any {
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

export class GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentials | undefined) {
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
export interface GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthentication {
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
  readonly claims?: GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#rs_credentials GoogleChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentials;
}

export function googleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    claims: googleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: googleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function googleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthentication): any {
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
      value: googleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: googleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthentication | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthentication | undefined) {
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
  private _claims = new GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaims) {
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
  private _rsCredentials = new GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentials) {
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
export interface GoogleChronicleFeedDetailsWorkspaceMobileSettings {
  /**
  * Customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#workspace_customer_id GoogleChronicleFeed#workspace_customer_id}
  */
  readonly workspaceCustomerId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthentication;
}

export function googleChronicleFeedDetailsWorkspaceMobileSettingsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceMobileSettingsOutputReference | GoogleChronicleFeedDetailsWorkspaceMobileSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_customer_id: cdktf.stringToTerraform(struct!.workspaceCustomerId),
    authentication: googleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsWorkspaceMobileSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceMobileSettingsOutputReference | GoogleChronicleFeedDetailsWorkspaceMobileSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workspace_customer_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceCustomerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsWorkspaceMobileSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceMobileSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceCustomerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceCustomerId = this._workspaceCustomerId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceMobileSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceCustomerId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workspaceCustomerId = value.workspaceCustomerId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // workspace_customer_id - computed: false, optional: true, required: false
  private _workspaceCustomerId?: string; 
  public get workspaceCustomerId() {
    return this.getStringAttribute('workspace_customer_id');
  }
  public set workspaceCustomerId(value: string) {
    this._workspaceCustomerId = value;
  }
  public resetWorkspaceCustomerId() {
    this._workspaceCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCustomerIdInput() {
    return this._workspaceCustomerId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsWorkspaceMobileSettingsAuthentication) {
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
export interface GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaims {
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

export function googleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaims): any {
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


export function googleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaims): any {
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

export class GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaims | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaims | undefined) {
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
export interface GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#private_key GoogleChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function googleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function googleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentials): any {
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

export class GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentials | undefined) {
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
export interface GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthentication {
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
  readonly claims?: GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#rs_credentials GoogleChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentials;
}

export function googleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    claims: googleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: googleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function googleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthentication): any {
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
      value: googleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: googleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthentication | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthentication | undefined) {
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
  private _claims = new GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaims) {
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
  private _rsCredentials = new GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentials) {
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
export interface GoogleChronicleFeedDetailsWorkspacePrivilegesSettings {
  /**
  * Customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#workspace_customer_id GoogleChronicleFeed#workspace_customer_id}
  */
  readonly workspaceCustomerId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthentication;
}

export function googleChronicleFeedDetailsWorkspacePrivilegesSettingsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsOutputReference | GoogleChronicleFeedDetailsWorkspacePrivilegesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_customer_id: cdktf.stringToTerraform(struct!.workspaceCustomerId),
    authentication: googleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsWorkspacePrivilegesSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsOutputReference | GoogleChronicleFeedDetailsWorkspacePrivilegesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workspace_customer_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceCustomerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspacePrivilegesSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceCustomerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceCustomerId = this._workspaceCustomerId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspacePrivilegesSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceCustomerId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workspaceCustomerId = value.workspaceCustomerId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // workspace_customer_id - computed: false, optional: true, required: false
  private _workspaceCustomerId?: string; 
  public get workspaceCustomerId() {
    return this.getStringAttribute('workspace_customer_id');
  }
  public set workspaceCustomerId(value: string) {
    this._workspaceCustomerId = value;
  }
  public resetWorkspaceCustomerId() {
    this._workspaceCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCustomerIdInput() {
    return this._workspaceCustomerId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsAuthentication) {
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
export interface GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaims {
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

export function googleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaims): any {
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


export function googleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsOutputReference | GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaims): any {
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

export class GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaims | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaims | undefined) {
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
export interface GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#private_key GoogleChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function googleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function googleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsOutputReference | GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentials): any {
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

export class GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentials | undefined) {
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
export interface GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthentication {
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
  readonly claims?: GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#rs_credentials GoogleChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentials;
}

export function googleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    claims: googleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: googleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function googleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationOutputReference | GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthentication): any {
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
      value: googleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: googleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthentication | undefined {
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

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthentication | undefined) {
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
  private _claims = new GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaims) {
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
  private _rsCredentials = new GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentials) {
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
export interface GoogleChronicleFeedDetailsWorkspaceUsersSettings {
  /**
  * Projection Type.
  * Possible values:
  * BASIC_PROJECTION
  * FULL_PROJECTION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#projection_type GoogleChronicleFeed#projection_type}
  */
  readonly projectionType?: string;
  /**
  * Customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#workspace_customer_id GoogleChronicleFeed#workspace_customer_id}
  */
  readonly workspaceCustomerId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#authentication GoogleChronicleFeed#authentication}
  */
  readonly authentication?: GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthentication;
}

export function googleChronicleFeedDetailsWorkspaceUsersSettingsToTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceUsersSettingsOutputReference | GoogleChronicleFeedDetailsWorkspaceUsersSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    projection_type: cdktf.stringToTerraform(struct!.projectionType),
    workspace_customer_id: cdktf.stringToTerraform(struct!.workspaceCustomerId),
    authentication: googleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function googleChronicleFeedDetailsWorkspaceUsersSettingsToHclTerraform(struct?: GoogleChronicleFeedDetailsWorkspaceUsersSettingsOutputReference | GoogleChronicleFeedDetailsWorkspaceUsersSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    projection_type: {
      value: cdktf.stringToHclTerraform(struct!.projectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_customer_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceCustomerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsWorkspaceUsersSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetailsWorkspaceUsersSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectionType = this._projectionType;
    }
    if (this._workspaceCustomerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceCustomerId = this._workspaceCustomerId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetailsWorkspaceUsersSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectionType = undefined;
      this._workspaceCustomerId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectionType = value.projectionType;
      this._workspaceCustomerId = value.workspaceCustomerId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // projection_type - computed: false, optional: true, required: false
  private _projectionType?: string; 
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }
  public set projectionType(value: string) {
    this._projectionType = value;
  }
  public resetProjectionType() {
    this._projectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionTypeInput() {
    return this._projectionType;
  }

  // workspace_customer_id - computed: false, optional: true, required: false
  private _workspaceCustomerId?: string; 
  public get workspaceCustomerId() {
    return this.getStringAttribute('workspace_customer_id');
  }
  public set workspaceCustomerId(value: string) {
    this._workspaceCustomerId = value;
  }
  public resetWorkspaceCustomerId() {
    this._workspaceCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCustomerIdInput() {
    return this._workspaceCustomerId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleChronicleFeedDetailsWorkspaceUsersSettingsAuthentication) {
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
export interface GoogleChronicleFeedDetails {
  /**
  * The asset namespace to apply to all logs ingested through this feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#asset_namespace GoogleChronicleFeed#asset_namespace}
  */
  readonly assetNamespace?: string;
  /**
  * Source Type of the feed.
  * Possible values:
  * GOOGLE_CLOUD_STORAGE
  * HTTP
  * SFTP
  * AMAZON_S3
  * AZURE_BLOBSTORE
  * API
  * AMAZON_SQS
  * PUBSUB
  * AMAZON_KINESIS_FIREHOSE
  * WEBHOOK
  * HTTPS_PUSH_GOOGLE_CLOUD_PUBSUB
  * HTTPS_PUSH_AMAZON_KINESIS_FIREHOSE
  * HTTPS_PUSH_WEBHOOK
  * AZURE_EVENT_HUB
  * GOOGLE_CLOUD_STORAGE_V2
  * AMAZON_S3_V2
  * AMAZON_SQS_V2
  * AZURE_BLOBSTORE_V2
  * GOOGLE_CLOUD_STORAGE_EVENT_DRIVEN Possible values: ["GOOGLE_CLOUD_STORAGE", "HTTP", "SFTP", "AMAZON_S3", "AZURE_BLOBSTORE", "API", "AMAZON_SQS", "PUBSUB", "AMAZON_KINESIS_FIREHOSE", "WEBHOOK", "HTTPS_PUSH_GOOGLE_CLOUD_PUBSUB", "HTTPS_PUSH_AMAZON_KINESIS_FIREHOSE", "HTTPS_PUSH_WEBHOOK", "AZURE_EVENT_HUB", "GOOGLE_CLOUD_STORAGE_V2", "AMAZON_S3_V2", "AMAZON_SQS_V2", "AZURE_BLOBSTORE_V2", "GOOGLE_CLOUD_STORAGE_EVENT_DRIVEN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#feed_source_type GoogleChronicleFeed#feed_source_type}
  */
  readonly feedSourceType?: string;
  /**
  * The ingestion metadata labels to apply to all logs ingested through this
  * feed, and the resulting normalized data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#labels GoogleChronicleFeed#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * LogType.
  * Format:
  * projects/{project}/locations/{location}/instances/{instance}/logTypes/{log_type}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#log_type GoogleChronicleFeed#log_type}
  */
  readonly logType: string;
  /**
  * amazon_kinesis_firehose_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#amazon_kinesis_firehose_settings GoogleChronicleFeed#amazon_kinesis_firehose_settings}
  */
  readonly amazonKinesisFirehoseSettings?: GoogleChronicleFeedDetailsAmazonKinesisFirehoseSettings;
  /**
  * amazon_s3_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#amazon_s3_settings GoogleChronicleFeed#amazon_s3_settings}
  */
  readonly amazonS3Settings?: GoogleChronicleFeedDetailsAmazonS3Settings;
  /**
  * amazon_s3_v2_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#amazon_s3_v2_settings GoogleChronicleFeed#amazon_s3_v2_settings}
  */
  readonly amazonS3V2Settings?: GoogleChronicleFeedDetailsAmazonS3V2Settings;
  /**
  * amazon_sqs_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#amazon_sqs_settings GoogleChronicleFeed#amazon_sqs_settings}
  */
  readonly amazonSqsSettings?: GoogleChronicleFeedDetailsAmazonSqsSettings;
  /**
  * amazon_sqs_v2_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#amazon_sqs_v2_settings GoogleChronicleFeed#amazon_sqs_v2_settings}
  */
  readonly amazonSqsV2Settings?: GoogleChronicleFeedDetailsAmazonSqsV2Settings;
  /**
  * anomali_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#anomali_settings GoogleChronicleFeed#anomali_settings}
  */
  readonly anomaliSettings?: GoogleChronicleFeedDetailsAnomaliSettings;
  /**
  * aws_ec2_hosts_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#aws_ec2_hosts_settings GoogleChronicleFeed#aws_ec2_hosts_settings}
  */
  readonly awsEc2HostsSettings?: GoogleChronicleFeedDetailsAwsEc2HostsSettings;
  /**
  * aws_ec2_instances_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#aws_ec2_instances_settings GoogleChronicleFeed#aws_ec2_instances_settings}
  */
  readonly awsEc2InstancesSettings?: GoogleChronicleFeedDetailsAwsEc2InstancesSettings;
  /**
  * aws_ec2_vpcs_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#aws_ec2_vpcs_settings GoogleChronicleFeed#aws_ec2_vpcs_settings}
  */
  readonly awsEc2VpcsSettings?: GoogleChronicleFeedDetailsAwsEc2VpcsSettings;
  /**
  * aws_iam_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#aws_iam_settings GoogleChronicleFeed#aws_iam_settings}
  */
  readonly awsIamSettings?: GoogleChronicleFeedDetailsAwsIamSettings;
  /**
  * azure_ad_audit_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#azure_ad_audit_settings GoogleChronicleFeed#azure_ad_audit_settings}
  */
  readonly azureAdAuditSettings?: GoogleChronicleFeedDetailsAzureAdAuditSettings;
  /**
  * azure_ad_context_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#azure_ad_context_settings GoogleChronicleFeed#azure_ad_context_settings}
  */
  readonly azureAdContextSettings?: GoogleChronicleFeedDetailsAzureAdContextSettings;
  /**
  * azure_ad_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#azure_ad_settings GoogleChronicleFeed#azure_ad_settings}
  */
  readonly azureAdSettings?: GoogleChronicleFeedDetailsAzureAdSettings;
  /**
  * azure_blob_store_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#azure_blob_store_settings GoogleChronicleFeed#azure_blob_store_settings}
  */
  readonly azureBlobStoreSettings?: GoogleChronicleFeedDetailsAzureBlobStoreSettings;
  /**
  * azure_blob_store_v2_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#azure_blob_store_v2_settings GoogleChronicleFeed#azure_blob_store_v2_settings}
  */
  readonly azureBlobStoreV2Settings?: GoogleChronicleFeedDetailsAzureBlobStoreV2Settings;
  /**
  * azure_event_hub_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#azure_event_hub_settings GoogleChronicleFeed#azure_event_hub_settings}
  */
  readonly azureEventHubSettings?: GoogleChronicleFeedDetailsAzureEventHubSettings;
  /**
  * azure_mdm_intune_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#azure_mdm_intune_settings GoogleChronicleFeed#azure_mdm_intune_settings}
  */
  readonly azureMdmIntuneSettings?: GoogleChronicleFeedDetailsAzureMdmIntuneSettings;
  /**
  * cloud_passage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#cloud_passage_settings GoogleChronicleFeed#cloud_passage_settings}
  */
  readonly cloudPassageSettings?: GoogleChronicleFeedDetailsCloudPassageSettings;
  /**
  * cortex_xdr_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#cortex_xdr_settings GoogleChronicleFeed#cortex_xdr_settings}
  */
  readonly cortexXdrSettings?: GoogleChronicleFeedDetailsCortexXdrSettings;
  /**
  * crowdstrike_alerts_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#crowdstrike_alerts_settings GoogleChronicleFeed#crowdstrike_alerts_settings}
  */
  readonly crowdstrikeAlertsSettings?: GoogleChronicleFeedDetailsCrowdstrikeAlertsSettings;
  /**
  * crowdstrike_detects_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#crowdstrike_detects_settings GoogleChronicleFeed#crowdstrike_detects_settings}
  */
  readonly crowdstrikeDetectsSettings?: GoogleChronicleFeedDetailsCrowdstrikeDetectsSettings;
  /**
  * dummy_log_type_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#dummy_log_type_settings GoogleChronicleFeed#dummy_log_type_settings}
  */
  readonly dummyLogTypeSettings?: GoogleChronicleFeedDetailsDummyLogTypeSettings;
  /**
  * duo_auth_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#duo_auth_settings GoogleChronicleFeed#duo_auth_settings}
  */
  readonly duoAuthSettings?: GoogleChronicleFeedDetailsDuoAuthSettings;
  /**
  * duo_user_context_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#duo_user_context_settings GoogleChronicleFeed#duo_user_context_settings}
  */
  readonly duoUserContextSettings?: GoogleChronicleFeedDetailsDuoUserContextSettings;
  /**
  * fox_it_stix_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#fox_it_stix_settings GoogleChronicleFeed#fox_it_stix_settings}
  */
  readonly foxItStixSettings?: GoogleChronicleFeedDetailsFoxItStixSettings;
  /**
  * gcs_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#gcs_settings GoogleChronicleFeed#gcs_settings}
  */
  readonly gcsSettings?: GoogleChronicleFeedDetailsGcsSettings;
  /**
  * gcs_v2_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#gcs_v2_settings GoogleChronicleFeed#gcs_v2_settings}
  */
  readonly gcsV2Settings?: GoogleChronicleFeedDetailsGcsV2Settings;
  /**
  * google_cloud_identity_device_users_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#google_cloud_identity_device_users_settings GoogleChronicleFeed#google_cloud_identity_device_users_settings}
  */
  readonly googleCloudIdentityDeviceUsersSettings?: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettings;
  /**
  * google_cloud_identity_devices_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#google_cloud_identity_devices_settings GoogleChronicleFeed#google_cloud_identity_devices_settings}
  */
  readonly googleCloudIdentityDevicesSettings?: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettings;
  /**
  * google_cloud_storage_event_driven_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#google_cloud_storage_event_driven_settings GoogleChronicleFeed#google_cloud_storage_event_driven_settings}
  */
  readonly googleCloudStorageEventDrivenSettings?: GoogleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettings;
  /**
  * http_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#http_settings GoogleChronicleFeed#http_settings}
  */
  readonly httpSettings?: GoogleChronicleFeedDetailsHttpSettings;
  /**
  * https_push_amazon_kinesis_firehose_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#https_push_amazon_kinesis_firehose_settings GoogleChronicleFeed#https_push_amazon_kinesis_firehose_settings}
  */
  readonly httpsPushAmazonKinesisFirehoseSettings?: GoogleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettings;
  /**
  * https_push_google_cloud_pubsub_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#https_push_google_cloud_pubsub_settings GoogleChronicleFeed#https_push_google_cloud_pubsub_settings}
  */
  readonly httpsPushGoogleCloudPubsubSettings?: GoogleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettings;
  /**
  * https_push_webhook_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#https_push_webhook_settings GoogleChronicleFeed#https_push_webhook_settings}
  */
  readonly httpsPushWebhookSettings?: GoogleChronicleFeedDetailsHttpsPushWebhookSettings;
  /**
  * imperva_waf_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#imperva_waf_settings GoogleChronicleFeed#imperva_waf_settings}
  */
  readonly impervaWafSettings?: GoogleChronicleFeedDetailsImpervaWafSettings;
  /**
  * mandiant_ioc_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#mandiant_ioc_settings GoogleChronicleFeed#mandiant_ioc_settings}
  */
  readonly mandiantIocSettings?: GoogleChronicleFeedDetailsMandiantIocSettings;
  /**
  * microsoft_graph_alert_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#microsoft_graph_alert_settings GoogleChronicleFeed#microsoft_graph_alert_settings}
  */
  readonly microsoftGraphAlertSettings?: GoogleChronicleFeedDetailsMicrosoftGraphAlertSettings;
  /**
  * microsoft_security_center_alert_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#microsoft_security_center_alert_settings GoogleChronicleFeed#microsoft_security_center_alert_settings}
  */
  readonly microsoftSecurityCenterAlertSettings?: GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettings;
  /**
  * mimecast_mail_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#mimecast_mail_settings GoogleChronicleFeed#mimecast_mail_settings}
  */
  readonly mimecastMailSettings?: GoogleChronicleFeedDetailsMimecastMailSettings;
  /**
  * mimecast_mail_v2_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#mimecast_mail_v2_settings GoogleChronicleFeed#mimecast_mail_v2_settings}
  */
  readonly mimecastMailV2Settings?: GoogleChronicleFeedDetailsMimecastMailV2Settings;
  /**
  * netskope_alert_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#netskope_alert_settings GoogleChronicleFeed#netskope_alert_settings}
  */
  readonly netskopeAlertSettings?: GoogleChronicleFeedDetailsNetskopeAlertSettings;
  /**
  * netskope_alert_v2_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#netskope_alert_v2_settings GoogleChronicleFeed#netskope_alert_v2_settings}
  */
  readonly netskopeAlertV2Settings?: GoogleChronicleFeedDetailsNetskopeAlertV2Settings;
  /**
  * office365_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#office365_settings GoogleChronicleFeed#office365_settings}
  */
  readonly office365Settings?: GoogleChronicleFeedDetailsOffice365Settings;
  /**
  * okta_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#okta_settings GoogleChronicleFeed#okta_settings}
  */
  readonly oktaSettings?: GoogleChronicleFeedDetailsOktaSettings;
  /**
  * okta_user_context_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#okta_user_context_settings GoogleChronicleFeed#okta_user_context_settings}
  */
  readonly oktaUserContextSettings?: GoogleChronicleFeedDetailsOktaUserContextSettings;
  /**
  * pan_ioc_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#pan_ioc_settings GoogleChronicleFeed#pan_ioc_settings}
  */
  readonly panIocSettings?: GoogleChronicleFeedDetailsPanIocSettings;
  /**
  * pan_prisma_cloud_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#pan_prisma_cloud_settings GoogleChronicleFeed#pan_prisma_cloud_settings}
  */
  readonly panPrismaCloudSettings?: GoogleChronicleFeedDetailsPanPrismaCloudSettings;
  /**
  * proofpoint_mail_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#proofpoint_mail_settings GoogleChronicleFeed#proofpoint_mail_settings}
  */
  readonly proofpointMailSettings?: GoogleChronicleFeedDetailsProofpointMailSettings;
  /**
  * proofpoint_on_demand_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#proofpoint_on_demand_settings GoogleChronicleFeed#proofpoint_on_demand_settings}
  */
  readonly proofpointOnDemandSettings?: GoogleChronicleFeedDetailsProofpointOnDemandSettings;
  /**
  * pubsub_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#pubsub_settings GoogleChronicleFeed#pubsub_settings}
  */
  readonly pubsubSettings?: GoogleChronicleFeedDetailsPubsubSettings;
  /**
  * qualys_scan_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#qualys_scan_settings GoogleChronicleFeed#qualys_scan_settings}
  */
  readonly qualysScanSettings?: GoogleChronicleFeedDetailsQualysScanSettings;
  /**
  * qualys_vm_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#qualys_vm_settings GoogleChronicleFeed#qualys_vm_settings}
  */
  readonly qualysVmSettings?: GoogleChronicleFeedDetailsQualysVmSettings;
  /**
  * rapid7_insight_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#rapid7_insight_settings GoogleChronicleFeed#rapid7_insight_settings}
  */
  readonly rapid7InsightSettings?: GoogleChronicleFeedDetailsRapid7InsightSettings;
  /**
  * recorded_future_ioc_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#recorded_future_ioc_settings GoogleChronicleFeed#recorded_future_ioc_settings}
  */
  readonly recordedFutureIocSettings?: GoogleChronicleFeedDetailsRecordedFutureIocSettings;
  /**
  * rh_isac_ioc_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#rh_isac_ioc_settings GoogleChronicleFeed#rh_isac_ioc_settings}
  */
  readonly rhIsacIocSettings?: GoogleChronicleFeedDetailsRhIsacIocSettings;
  /**
  * salesforce_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#salesforce_settings GoogleChronicleFeed#salesforce_settings}
  */
  readonly salesforceSettings?: GoogleChronicleFeedDetailsSalesforceSettings;
  /**
  * sentinelone_alert_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#sentinelone_alert_settings GoogleChronicleFeed#sentinelone_alert_settings}
  */
  readonly sentineloneAlertSettings?: GoogleChronicleFeedDetailsSentineloneAlertSettings;
  /**
  * service_now_cmdb_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#service_now_cmdb_settings GoogleChronicleFeed#service_now_cmdb_settings}
  */
  readonly serviceNowCmdbSettings?: GoogleChronicleFeedDetailsServiceNowCmdbSettings;
  /**
  * sftp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#sftp_settings GoogleChronicleFeed#sftp_settings}
  */
  readonly sftpSettings?: GoogleChronicleFeedDetailsSftpSettings;
  /**
  * symantec_event_export_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#symantec_event_export_settings GoogleChronicleFeed#symantec_event_export_settings}
  */
  readonly symantecEventExportSettings?: GoogleChronicleFeedDetailsSymantecEventExportSettings;
  /**
  * thinkst_canary_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#thinkst_canary_settings GoogleChronicleFeed#thinkst_canary_settings}
  */
  readonly thinkstCanarySettings?: GoogleChronicleFeedDetailsThinkstCanarySettings;
  /**
  * threat_connect_ioc_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#threat_connect_ioc_settings GoogleChronicleFeed#threat_connect_ioc_settings}
  */
  readonly threatConnectIocSettings?: GoogleChronicleFeedDetailsThreatConnectIocSettings;
  /**
  * threat_connect_ioc_v3_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#threat_connect_ioc_v3_settings GoogleChronicleFeed#threat_connect_ioc_v3_settings}
  */
  readonly threatConnectIocV3Settings?: GoogleChronicleFeedDetailsThreatConnectIocV3Settings;
  /**
  * trellix_hx_alerts_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#trellix_hx_alerts_settings GoogleChronicleFeed#trellix_hx_alerts_settings}
  */
  readonly trellixHxAlertsSettings?: GoogleChronicleFeedDetailsTrellixHxAlertsSettings;
  /**
  * trellix_hx_bulk_acqs_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#trellix_hx_bulk_acqs_settings GoogleChronicleFeed#trellix_hx_bulk_acqs_settings}
  */
  readonly trellixHxBulkAcqsSettings?: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettings;
  /**
  * trellix_hx_hosts_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#trellix_hx_hosts_settings GoogleChronicleFeed#trellix_hx_hosts_settings}
  */
  readonly trellixHxHostsSettings?: GoogleChronicleFeedDetailsTrellixHxHostsSettings;
  /**
  * webhook_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#webhook_settings GoogleChronicleFeed#webhook_settings}
  */
  readonly webhookSettings?: GoogleChronicleFeedDetailsWebhookSettings;
  /**
  * workday_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#workday_settings GoogleChronicleFeed#workday_settings}
  */
  readonly workdaySettings?: GoogleChronicleFeedDetailsWorkdaySettings;
  /**
  * workspace_activity_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#workspace_activity_settings GoogleChronicleFeed#workspace_activity_settings}
  */
  readonly workspaceActivitySettings?: GoogleChronicleFeedDetailsWorkspaceActivitySettings;
  /**
  * workspace_alerts_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#workspace_alerts_settings GoogleChronicleFeed#workspace_alerts_settings}
  */
  readonly workspaceAlertsSettings?: GoogleChronicleFeedDetailsWorkspaceAlertsSettings;
  /**
  * workspace_chrome_os_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#workspace_chrome_os_settings GoogleChronicleFeed#workspace_chrome_os_settings}
  */
  readonly workspaceChromeOsSettings?: GoogleChronicleFeedDetailsWorkspaceChromeOsSettings;
  /**
  * workspace_groups_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#workspace_groups_settings GoogleChronicleFeed#workspace_groups_settings}
  */
  readonly workspaceGroupsSettings?: GoogleChronicleFeedDetailsWorkspaceGroupsSettings;
  /**
  * workspace_mobile_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#workspace_mobile_settings GoogleChronicleFeed#workspace_mobile_settings}
  */
  readonly workspaceMobileSettings?: GoogleChronicleFeedDetailsWorkspaceMobileSettings;
  /**
  * workspace_privileges_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#workspace_privileges_settings GoogleChronicleFeed#workspace_privileges_settings}
  */
  readonly workspacePrivilegesSettings?: GoogleChronicleFeedDetailsWorkspacePrivilegesSettings;
  /**
  * workspace_users_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#workspace_users_settings GoogleChronicleFeed#workspace_users_settings}
  */
  readonly workspaceUsersSettings?: GoogleChronicleFeedDetailsWorkspaceUsersSettings;
}

export function googleChronicleFeedDetailsToTerraform(struct?: GoogleChronicleFeedDetailsOutputReference | GoogleChronicleFeedDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset_namespace: cdktf.stringToTerraform(struct!.assetNamespace),
    feed_source_type: cdktf.stringToTerraform(struct!.feedSourceType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    log_type: cdktf.stringToTerraform(struct!.logType),
    amazon_kinesis_firehose_settings: googleChronicleFeedDetailsAmazonKinesisFirehoseSettingsToTerraform(struct!.amazonKinesisFirehoseSettings),
    amazon_s3_settings: googleChronicleFeedDetailsAmazonS3SettingsToTerraform(struct!.amazonS3Settings),
    amazon_s3_v2_settings: googleChronicleFeedDetailsAmazonS3V2SettingsToTerraform(struct!.amazonS3V2Settings),
    amazon_sqs_settings: googleChronicleFeedDetailsAmazonSqsSettingsToTerraform(struct!.amazonSqsSettings),
    amazon_sqs_v2_settings: googleChronicleFeedDetailsAmazonSqsV2SettingsToTerraform(struct!.amazonSqsV2Settings),
    anomali_settings: googleChronicleFeedDetailsAnomaliSettingsToTerraform(struct!.anomaliSettings),
    aws_ec2_hosts_settings: googleChronicleFeedDetailsAwsEc2HostsSettingsToTerraform(struct!.awsEc2HostsSettings),
    aws_ec2_instances_settings: googleChronicleFeedDetailsAwsEc2InstancesSettingsToTerraform(struct!.awsEc2InstancesSettings),
    aws_ec2_vpcs_settings: googleChronicleFeedDetailsAwsEc2VpcsSettingsToTerraform(struct!.awsEc2VpcsSettings),
    aws_iam_settings: googleChronicleFeedDetailsAwsIamSettingsToTerraform(struct!.awsIamSettings),
    azure_ad_audit_settings: googleChronicleFeedDetailsAzureAdAuditSettingsToTerraform(struct!.azureAdAuditSettings),
    azure_ad_context_settings: googleChronicleFeedDetailsAzureAdContextSettingsToTerraform(struct!.azureAdContextSettings),
    azure_ad_settings: googleChronicleFeedDetailsAzureAdSettingsToTerraform(struct!.azureAdSettings),
    azure_blob_store_settings: googleChronicleFeedDetailsAzureBlobStoreSettingsToTerraform(struct!.azureBlobStoreSettings),
    azure_blob_store_v2_settings: googleChronicleFeedDetailsAzureBlobStoreV2SettingsToTerraform(struct!.azureBlobStoreV2Settings),
    azure_event_hub_settings: googleChronicleFeedDetailsAzureEventHubSettingsToTerraform(struct!.azureEventHubSettings),
    azure_mdm_intune_settings: googleChronicleFeedDetailsAzureMdmIntuneSettingsToTerraform(struct!.azureMdmIntuneSettings),
    cloud_passage_settings: googleChronicleFeedDetailsCloudPassageSettingsToTerraform(struct!.cloudPassageSettings),
    cortex_xdr_settings: googleChronicleFeedDetailsCortexXdrSettingsToTerraform(struct!.cortexXdrSettings),
    crowdstrike_alerts_settings: googleChronicleFeedDetailsCrowdstrikeAlertsSettingsToTerraform(struct!.crowdstrikeAlertsSettings),
    crowdstrike_detects_settings: googleChronicleFeedDetailsCrowdstrikeDetectsSettingsToTerraform(struct!.crowdstrikeDetectsSettings),
    dummy_log_type_settings: googleChronicleFeedDetailsDummyLogTypeSettingsToTerraform(struct!.dummyLogTypeSettings),
    duo_auth_settings: googleChronicleFeedDetailsDuoAuthSettingsToTerraform(struct!.duoAuthSettings),
    duo_user_context_settings: googleChronicleFeedDetailsDuoUserContextSettingsToTerraform(struct!.duoUserContextSettings),
    fox_it_stix_settings: googleChronicleFeedDetailsFoxItStixSettingsToTerraform(struct!.foxItStixSettings),
    gcs_settings: googleChronicleFeedDetailsGcsSettingsToTerraform(struct!.gcsSettings),
    gcs_v2_settings: googleChronicleFeedDetailsGcsV2SettingsToTerraform(struct!.gcsV2Settings),
    google_cloud_identity_device_users_settings: googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsToTerraform(struct!.googleCloudIdentityDeviceUsersSettings),
    google_cloud_identity_devices_settings: googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsToTerraform(struct!.googleCloudIdentityDevicesSettings),
    google_cloud_storage_event_driven_settings: googleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsToTerraform(struct!.googleCloudStorageEventDrivenSettings),
    http_settings: googleChronicleFeedDetailsHttpSettingsToTerraform(struct!.httpSettings),
    https_push_amazon_kinesis_firehose_settings: googleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsToTerraform(struct!.httpsPushAmazonKinesisFirehoseSettings),
    https_push_google_cloud_pubsub_settings: googleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsToTerraform(struct!.httpsPushGoogleCloudPubsubSettings),
    https_push_webhook_settings: googleChronicleFeedDetailsHttpsPushWebhookSettingsToTerraform(struct!.httpsPushWebhookSettings),
    imperva_waf_settings: googleChronicleFeedDetailsImpervaWafSettingsToTerraform(struct!.impervaWafSettings),
    mandiant_ioc_settings: googleChronicleFeedDetailsMandiantIocSettingsToTerraform(struct!.mandiantIocSettings),
    microsoft_graph_alert_settings: googleChronicleFeedDetailsMicrosoftGraphAlertSettingsToTerraform(struct!.microsoftGraphAlertSettings),
    microsoft_security_center_alert_settings: googleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsToTerraform(struct!.microsoftSecurityCenterAlertSettings),
    mimecast_mail_settings: googleChronicleFeedDetailsMimecastMailSettingsToTerraform(struct!.mimecastMailSettings),
    mimecast_mail_v2_settings: googleChronicleFeedDetailsMimecastMailV2SettingsToTerraform(struct!.mimecastMailV2Settings),
    netskope_alert_settings: googleChronicleFeedDetailsNetskopeAlertSettingsToTerraform(struct!.netskopeAlertSettings),
    netskope_alert_v2_settings: googleChronicleFeedDetailsNetskopeAlertV2SettingsToTerraform(struct!.netskopeAlertV2Settings),
    office365_settings: googleChronicleFeedDetailsOffice365SettingsToTerraform(struct!.office365Settings),
    okta_settings: googleChronicleFeedDetailsOktaSettingsToTerraform(struct!.oktaSettings),
    okta_user_context_settings: googleChronicleFeedDetailsOktaUserContextSettingsToTerraform(struct!.oktaUserContextSettings),
    pan_ioc_settings: googleChronicleFeedDetailsPanIocSettingsToTerraform(struct!.panIocSettings),
    pan_prisma_cloud_settings: googleChronicleFeedDetailsPanPrismaCloudSettingsToTerraform(struct!.panPrismaCloudSettings),
    proofpoint_mail_settings: googleChronicleFeedDetailsProofpointMailSettingsToTerraform(struct!.proofpointMailSettings),
    proofpoint_on_demand_settings: googleChronicleFeedDetailsProofpointOnDemandSettingsToTerraform(struct!.proofpointOnDemandSettings),
    pubsub_settings: googleChronicleFeedDetailsPubsubSettingsToTerraform(struct!.pubsubSettings),
    qualys_scan_settings: googleChronicleFeedDetailsQualysScanSettingsToTerraform(struct!.qualysScanSettings),
    qualys_vm_settings: googleChronicleFeedDetailsQualysVmSettingsToTerraform(struct!.qualysVmSettings),
    rapid7_insight_settings: googleChronicleFeedDetailsRapid7InsightSettingsToTerraform(struct!.rapid7InsightSettings),
    recorded_future_ioc_settings: googleChronicleFeedDetailsRecordedFutureIocSettingsToTerraform(struct!.recordedFutureIocSettings),
    rh_isac_ioc_settings: googleChronicleFeedDetailsRhIsacIocSettingsToTerraform(struct!.rhIsacIocSettings),
    salesforce_settings: googleChronicleFeedDetailsSalesforceSettingsToTerraform(struct!.salesforceSettings),
    sentinelone_alert_settings: googleChronicleFeedDetailsSentineloneAlertSettingsToTerraform(struct!.sentineloneAlertSettings),
    service_now_cmdb_settings: googleChronicleFeedDetailsServiceNowCmdbSettingsToTerraform(struct!.serviceNowCmdbSettings),
    sftp_settings: googleChronicleFeedDetailsSftpSettingsToTerraform(struct!.sftpSettings),
    symantec_event_export_settings: googleChronicleFeedDetailsSymantecEventExportSettingsToTerraform(struct!.symantecEventExportSettings),
    thinkst_canary_settings: googleChronicleFeedDetailsThinkstCanarySettingsToTerraform(struct!.thinkstCanarySettings),
    threat_connect_ioc_settings: googleChronicleFeedDetailsThreatConnectIocSettingsToTerraform(struct!.threatConnectIocSettings),
    threat_connect_ioc_v3_settings: googleChronicleFeedDetailsThreatConnectIocV3SettingsToTerraform(struct!.threatConnectIocV3Settings),
    trellix_hx_alerts_settings: googleChronicleFeedDetailsTrellixHxAlertsSettingsToTerraform(struct!.trellixHxAlertsSettings),
    trellix_hx_bulk_acqs_settings: googleChronicleFeedDetailsTrellixHxBulkAcqsSettingsToTerraform(struct!.trellixHxBulkAcqsSettings),
    trellix_hx_hosts_settings: googleChronicleFeedDetailsTrellixHxHostsSettingsToTerraform(struct!.trellixHxHostsSettings),
    webhook_settings: googleChronicleFeedDetailsWebhookSettingsToTerraform(struct!.webhookSettings),
    workday_settings: googleChronicleFeedDetailsWorkdaySettingsToTerraform(struct!.workdaySettings),
    workspace_activity_settings: googleChronicleFeedDetailsWorkspaceActivitySettingsToTerraform(struct!.workspaceActivitySettings),
    workspace_alerts_settings: googleChronicleFeedDetailsWorkspaceAlertsSettingsToTerraform(struct!.workspaceAlertsSettings),
    workspace_chrome_os_settings: googleChronicleFeedDetailsWorkspaceChromeOsSettingsToTerraform(struct!.workspaceChromeOsSettings),
    workspace_groups_settings: googleChronicleFeedDetailsWorkspaceGroupsSettingsToTerraform(struct!.workspaceGroupsSettings),
    workspace_mobile_settings: googleChronicleFeedDetailsWorkspaceMobileSettingsToTerraform(struct!.workspaceMobileSettings),
    workspace_privileges_settings: googleChronicleFeedDetailsWorkspacePrivilegesSettingsToTerraform(struct!.workspacePrivilegesSettings),
    workspace_users_settings: googleChronicleFeedDetailsWorkspaceUsersSettingsToTerraform(struct!.workspaceUsersSettings),
  }
}


export function googleChronicleFeedDetailsToHclTerraform(struct?: GoogleChronicleFeedDetailsOutputReference | GoogleChronicleFeedDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset_namespace: {
      value: cdktf.stringToHclTerraform(struct!.assetNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feed_source_type: {
      value: cdktf.stringToHclTerraform(struct!.feedSourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    log_type: {
      value: cdktf.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amazon_kinesis_firehose_settings: {
      value: googleChronicleFeedDetailsAmazonKinesisFirehoseSettingsToHclTerraform(struct!.amazonKinesisFirehoseSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAmazonKinesisFirehoseSettingsList",
    },
    amazon_s3_settings: {
      value: googleChronicleFeedDetailsAmazonS3SettingsToHclTerraform(struct!.amazonS3Settings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAmazonS3SettingsList",
    },
    amazon_s3_v2_settings: {
      value: googleChronicleFeedDetailsAmazonS3V2SettingsToHclTerraform(struct!.amazonS3V2Settings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAmazonS3V2SettingsList",
    },
    amazon_sqs_settings: {
      value: googleChronicleFeedDetailsAmazonSqsSettingsToHclTerraform(struct!.amazonSqsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAmazonSqsSettingsList",
    },
    amazon_sqs_v2_settings: {
      value: googleChronicleFeedDetailsAmazonSqsV2SettingsToHclTerraform(struct!.amazonSqsV2Settings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAmazonSqsV2SettingsList",
    },
    anomali_settings: {
      value: googleChronicleFeedDetailsAnomaliSettingsToHclTerraform(struct!.anomaliSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAnomaliSettingsList",
    },
    aws_ec2_hosts_settings: {
      value: googleChronicleFeedDetailsAwsEc2HostsSettingsToHclTerraform(struct!.awsEc2HostsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAwsEc2HostsSettingsList",
    },
    aws_ec2_instances_settings: {
      value: googleChronicleFeedDetailsAwsEc2InstancesSettingsToHclTerraform(struct!.awsEc2InstancesSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAwsEc2InstancesSettingsList",
    },
    aws_ec2_vpcs_settings: {
      value: googleChronicleFeedDetailsAwsEc2VpcsSettingsToHclTerraform(struct!.awsEc2VpcsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAwsEc2VpcsSettingsList",
    },
    aws_iam_settings: {
      value: googleChronicleFeedDetailsAwsIamSettingsToHclTerraform(struct!.awsIamSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAwsIamSettingsList",
    },
    azure_ad_audit_settings: {
      value: googleChronicleFeedDetailsAzureAdAuditSettingsToHclTerraform(struct!.azureAdAuditSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAzureAdAuditSettingsList",
    },
    azure_ad_context_settings: {
      value: googleChronicleFeedDetailsAzureAdContextSettingsToHclTerraform(struct!.azureAdContextSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAzureAdContextSettingsList",
    },
    azure_ad_settings: {
      value: googleChronicleFeedDetailsAzureAdSettingsToHclTerraform(struct!.azureAdSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAzureAdSettingsList",
    },
    azure_blob_store_settings: {
      value: googleChronicleFeedDetailsAzureBlobStoreSettingsToHclTerraform(struct!.azureBlobStoreSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAzureBlobStoreSettingsList",
    },
    azure_blob_store_v2_settings: {
      value: googleChronicleFeedDetailsAzureBlobStoreV2SettingsToHclTerraform(struct!.azureBlobStoreV2Settings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsList",
    },
    azure_event_hub_settings: {
      value: googleChronicleFeedDetailsAzureEventHubSettingsToHclTerraform(struct!.azureEventHubSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAzureEventHubSettingsList",
    },
    azure_mdm_intune_settings: {
      value: googleChronicleFeedDetailsAzureMdmIntuneSettingsToHclTerraform(struct!.azureMdmIntuneSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsAzureMdmIntuneSettingsList",
    },
    cloud_passage_settings: {
      value: googleChronicleFeedDetailsCloudPassageSettingsToHclTerraform(struct!.cloudPassageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsCloudPassageSettingsList",
    },
    cortex_xdr_settings: {
      value: googleChronicleFeedDetailsCortexXdrSettingsToHclTerraform(struct!.cortexXdrSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsCortexXdrSettingsList",
    },
    crowdstrike_alerts_settings: {
      value: googleChronicleFeedDetailsCrowdstrikeAlertsSettingsToHclTerraform(struct!.crowdstrikeAlertsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsList",
    },
    crowdstrike_detects_settings: {
      value: googleChronicleFeedDetailsCrowdstrikeDetectsSettingsToHclTerraform(struct!.crowdstrikeDetectsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsList",
    },
    dummy_log_type_settings: {
      value: googleChronicleFeedDetailsDummyLogTypeSettingsToHclTerraform(struct!.dummyLogTypeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsDummyLogTypeSettingsList",
    },
    duo_auth_settings: {
      value: googleChronicleFeedDetailsDuoAuthSettingsToHclTerraform(struct!.duoAuthSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsDuoAuthSettingsList",
    },
    duo_user_context_settings: {
      value: googleChronicleFeedDetailsDuoUserContextSettingsToHclTerraform(struct!.duoUserContextSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsDuoUserContextSettingsList",
    },
    fox_it_stix_settings: {
      value: googleChronicleFeedDetailsFoxItStixSettingsToHclTerraform(struct!.foxItStixSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsFoxItStixSettingsList",
    },
    gcs_settings: {
      value: googleChronicleFeedDetailsGcsSettingsToHclTerraform(struct!.gcsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsGcsSettingsList",
    },
    gcs_v2_settings: {
      value: googleChronicleFeedDetailsGcsV2SettingsToHclTerraform(struct!.gcsV2Settings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsGcsV2SettingsList",
    },
    google_cloud_identity_device_users_settings: {
      value: googleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsToHclTerraform(struct!.googleCloudIdentityDeviceUsersSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsList",
    },
    google_cloud_identity_devices_settings: {
      value: googleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsToHclTerraform(struct!.googleCloudIdentityDevicesSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsList",
    },
    google_cloud_storage_event_driven_settings: {
      value: googleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsToHclTerraform(struct!.googleCloudStorageEventDrivenSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsList",
    },
    http_settings: {
      value: googleChronicleFeedDetailsHttpSettingsToHclTerraform(struct!.httpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsHttpSettingsList",
    },
    https_push_amazon_kinesis_firehose_settings: {
      value: googleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsToHclTerraform(struct!.httpsPushAmazonKinesisFirehoseSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsList",
    },
    https_push_google_cloud_pubsub_settings: {
      value: googleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsToHclTerraform(struct!.httpsPushGoogleCloudPubsubSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsList",
    },
    https_push_webhook_settings: {
      value: googleChronicleFeedDetailsHttpsPushWebhookSettingsToHclTerraform(struct!.httpsPushWebhookSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsHttpsPushWebhookSettingsList",
    },
    imperva_waf_settings: {
      value: googleChronicleFeedDetailsImpervaWafSettingsToHclTerraform(struct!.impervaWafSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsImpervaWafSettingsList",
    },
    mandiant_ioc_settings: {
      value: googleChronicleFeedDetailsMandiantIocSettingsToHclTerraform(struct!.mandiantIocSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsMandiantIocSettingsList",
    },
    microsoft_graph_alert_settings: {
      value: googleChronicleFeedDetailsMicrosoftGraphAlertSettingsToHclTerraform(struct!.microsoftGraphAlertSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsList",
    },
    microsoft_security_center_alert_settings: {
      value: googleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsToHclTerraform(struct!.microsoftSecurityCenterAlertSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsList",
    },
    mimecast_mail_settings: {
      value: googleChronicleFeedDetailsMimecastMailSettingsToHclTerraform(struct!.mimecastMailSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsMimecastMailSettingsList",
    },
    mimecast_mail_v2_settings: {
      value: googleChronicleFeedDetailsMimecastMailV2SettingsToHclTerraform(struct!.mimecastMailV2Settings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsMimecastMailV2SettingsList",
    },
    netskope_alert_settings: {
      value: googleChronicleFeedDetailsNetskopeAlertSettingsToHclTerraform(struct!.netskopeAlertSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsNetskopeAlertSettingsList",
    },
    netskope_alert_v2_settings: {
      value: googleChronicleFeedDetailsNetskopeAlertV2SettingsToHclTerraform(struct!.netskopeAlertV2Settings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsNetskopeAlertV2SettingsList",
    },
    office365_settings: {
      value: googleChronicleFeedDetailsOffice365SettingsToHclTerraform(struct!.office365Settings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsOffice365SettingsList",
    },
    okta_settings: {
      value: googleChronicleFeedDetailsOktaSettingsToHclTerraform(struct!.oktaSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsOktaSettingsList",
    },
    okta_user_context_settings: {
      value: googleChronicleFeedDetailsOktaUserContextSettingsToHclTerraform(struct!.oktaUserContextSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsOktaUserContextSettingsList",
    },
    pan_ioc_settings: {
      value: googleChronicleFeedDetailsPanIocSettingsToHclTerraform(struct!.panIocSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsPanIocSettingsList",
    },
    pan_prisma_cloud_settings: {
      value: googleChronicleFeedDetailsPanPrismaCloudSettingsToHclTerraform(struct!.panPrismaCloudSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsPanPrismaCloudSettingsList",
    },
    proofpoint_mail_settings: {
      value: googleChronicleFeedDetailsProofpointMailSettingsToHclTerraform(struct!.proofpointMailSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsProofpointMailSettingsList",
    },
    proofpoint_on_demand_settings: {
      value: googleChronicleFeedDetailsProofpointOnDemandSettingsToHclTerraform(struct!.proofpointOnDemandSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsProofpointOnDemandSettingsList",
    },
    pubsub_settings: {
      value: googleChronicleFeedDetailsPubsubSettingsToHclTerraform(struct!.pubsubSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsPubsubSettingsList",
    },
    qualys_scan_settings: {
      value: googleChronicleFeedDetailsQualysScanSettingsToHclTerraform(struct!.qualysScanSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsQualysScanSettingsList",
    },
    qualys_vm_settings: {
      value: googleChronicleFeedDetailsQualysVmSettingsToHclTerraform(struct!.qualysVmSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsQualysVmSettingsList",
    },
    rapid7_insight_settings: {
      value: googleChronicleFeedDetailsRapid7InsightSettingsToHclTerraform(struct!.rapid7InsightSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsRapid7InsightSettingsList",
    },
    recorded_future_ioc_settings: {
      value: googleChronicleFeedDetailsRecordedFutureIocSettingsToHclTerraform(struct!.recordedFutureIocSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsRecordedFutureIocSettingsList",
    },
    rh_isac_ioc_settings: {
      value: googleChronicleFeedDetailsRhIsacIocSettingsToHclTerraform(struct!.rhIsacIocSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsRhIsacIocSettingsList",
    },
    salesforce_settings: {
      value: googleChronicleFeedDetailsSalesforceSettingsToHclTerraform(struct!.salesforceSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsSalesforceSettingsList",
    },
    sentinelone_alert_settings: {
      value: googleChronicleFeedDetailsSentineloneAlertSettingsToHclTerraform(struct!.sentineloneAlertSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsSentineloneAlertSettingsList",
    },
    service_now_cmdb_settings: {
      value: googleChronicleFeedDetailsServiceNowCmdbSettingsToHclTerraform(struct!.serviceNowCmdbSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsServiceNowCmdbSettingsList",
    },
    sftp_settings: {
      value: googleChronicleFeedDetailsSftpSettingsToHclTerraform(struct!.sftpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsSftpSettingsList",
    },
    symantec_event_export_settings: {
      value: googleChronicleFeedDetailsSymantecEventExportSettingsToHclTerraform(struct!.symantecEventExportSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsSymantecEventExportSettingsList",
    },
    thinkst_canary_settings: {
      value: googleChronicleFeedDetailsThinkstCanarySettingsToHclTerraform(struct!.thinkstCanarySettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsThinkstCanarySettingsList",
    },
    threat_connect_ioc_settings: {
      value: googleChronicleFeedDetailsThreatConnectIocSettingsToHclTerraform(struct!.threatConnectIocSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsThreatConnectIocSettingsList",
    },
    threat_connect_ioc_v3_settings: {
      value: googleChronicleFeedDetailsThreatConnectIocV3SettingsToHclTerraform(struct!.threatConnectIocV3Settings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsThreatConnectIocV3SettingsList",
    },
    trellix_hx_alerts_settings: {
      value: googleChronicleFeedDetailsTrellixHxAlertsSettingsToHclTerraform(struct!.trellixHxAlertsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsTrellixHxAlertsSettingsList",
    },
    trellix_hx_bulk_acqs_settings: {
      value: googleChronicleFeedDetailsTrellixHxBulkAcqsSettingsToHclTerraform(struct!.trellixHxBulkAcqsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsList",
    },
    trellix_hx_hosts_settings: {
      value: googleChronicleFeedDetailsTrellixHxHostsSettingsToHclTerraform(struct!.trellixHxHostsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsTrellixHxHostsSettingsList",
    },
    webhook_settings: {
      value: googleChronicleFeedDetailsWebhookSettingsToHclTerraform(struct!.webhookSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWebhookSettingsList",
    },
    workday_settings: {
      value: googleChronicleFeedDetailsWorkdaySettingsToHclTerraform(struct!.workdaySettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkdaySettingsList",
    },
    workspace_activity_settings: {
      value: googleChronicleFeedDetailsWorkspaceActivitySettingsToHclTerraform(struct!.workspaceActivitySettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceActivitySettingsList",
    },
    workspace_alerts_settings: {
      value: googleChronicleFeedDetailsWorkspaceAlertsSettingsToHclTerraform(struct!.workspaceAlertsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceAlertsSettingsList",
    },
    workspace_chrome_os_settings: {
      value: googleChronicleFeedDetailsWorkspaceChromeOsSettingsToHclTerraform(struct!.workspaceChromeOsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsList",
    },
    workspace_groups_settings: {
      value: googleChronicleFeedDetailsWorkspaceGroupsSettingsToHclTerraform(struct!.workspaceGroupsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceGroupsSettingsList",
    },
    workspace_mobile_settings: {
      value: googleChronicleFeedDetailsWorkspaceMobileSettingsToHclTerraform(struct!.workspaceMobileSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceMobileSettingsList",
    },
    workspace_privileges_settings: {
      value: googleChronicleFeedDetailsWorkspacePrivilegesSettingsToHclTerraform(struct!.workspacePrivilegesSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsList",
    },
    workspace_users_settings: {
      value: googleChronicleFeedDetailsWorkspaceUsersSettingsToHclTerraform(struct!.workspaceUsersSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleFeedDetailsWorkspaceUsersSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFeedDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetNamespace = this._assetNamespace;
    }
    if (this._feedSourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedSourceType = this._feedSourceType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._amazonKinesisFirehoseSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonKinesisFirehoseSettings = this._amazonKinesisFirehoseSettings?.internalValue;
    }
    if (this._amazonS3Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonS3Settings = this._amazonS3Settings?.internalValue;
    }
    if (this._amazonS3V2Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonS3V2Settings = this._amazonS3V2Settings?.internalValue;
    }
    if (this._amazonSqsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonSqsSettings = this._amazonSqsSettings?.internalValue;
    }
    if (this._amazonSqsV2Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonSqsV2Settings = this._amazonSqsV2Settings?.internalValue;
    }
    if (this._anomaliSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anomaliSettings = this._anomaliSettings?.internalValue;
    }
    if (this._awsEc2HostsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEc2HostsSettings = this._awsEc2HostsSettings?.internalValue;
    }
    if (this._awsEc2InstancesSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEc2InstancesSettings = this._awsEc2InstancesSettings?.internalValue;
    }
    if (this._awsEc2VpcsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEc2VpcsSettings = this._awsEc2VpcsSettings?.internalValue;
    }
    if (this._awsIamSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIamSettings = this._awsIamSettings?.internalValue;
    }
    if (this._azureAdAuditSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAdAuditSettings = this._azureAdAuditSettings?.internalValue;
    }
    if (this._azureAdContextSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAdContextSettings = this._azureAdContextSettings?.internalValue;
    }
    if (this._azureAdSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAdSettings = this._azureAdSettings?.internalValue;
    }
    if (this._azureBlobStoreSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlobStoreSettings = this._azureBlobStoreSettings?.internalValue;
    }
    if (this._azureBlobStoreV2Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlobStoreV2Settings = this._azureBlobStoreV2Settings?.internalValue;
    }
    if (this._azureEventHubSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureEventHubSettings = this._azureEventHubSettings?.internalValue;
    }
    if (this._azureMdmIntuneSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureMdmIntuneSettings = this._azureMdmIntuneSettings?.internalValue;
    }
    if (this._cloudPassageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudPassageSettings = this._cloudPassageSettings?.internalValue;
    }
    if (this._cortexXdrSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cortexXdrSettings = this._cortexXdrSettings?.internalValue;
    }
    if (this._crowdstrikeAlertsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crowdstrikeAlertsSettings = this._crowdstrikeAlertsSettings?.internalValue;
    }
    if (this._crowdstrikeDetectsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crowdstrikeDetectsSettings = this._crowdstrikeDetectsSettings?.internalValue;
    }
    if (this._dummyLogTypeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummyLogTypeSettings = this._dummyLogTypeSettings?.internalValue;
    }
    if (this._duoAuthSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duoAuthSettings = this._duoAuthSettings?.internalValue;
    }
    if (this._duoUserContextSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duoUserContextSettings = this._duoUserContextSettings?.internalValue;
    }
    if (this._foxItStixSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.foxItStixSettings = this._foxItStixSettings?.internalValue;
    }
    if (this._gcsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsSettings = this._gcsSettings?.internalValue;
    }
    if (this._gcsV2Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsV2Settings = this._gcsV2Settings?.internalValue;
    }
    if (this._googleCloudIdentityDeviceUsersSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudIdentityDeviceUsersSettings = this._googleCloudIdentityDeviceUsersSettings?.internalValue;
    }
    if (this._googleCloudIdentityDevicesSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudIdentityDevicesSettings = this._googleCloudIdentityDevicesSettings?.internalValue;
    }
    if (this._googleCloudStorageEventDrivenSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageEventDrivenSettings = this._googleCloudStorageEventDrivenSettings?.internalValue;
    }
    if (this._httpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSettings = this._httpSettings?.internalValue;
    }
    if (this._httpsPushAmazonKinesisFirehoseSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPushAmazonKinesisFirehoseSettings = this._httpsPushAmazonKinesisFirehoseSettings?.internalValue;
    }
    if (this._httpsPushGoogleCloudPubsubSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPushGoogleCloudPubsubSettings = this._httpsPushGoogleCloudPubsubSettings?.internalValue;
    }
    if (this._httpsPushWebhookSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPushWebhookSettings = this._httpsPushWebhookSettings?.internalValue;
    }
    if (this._impervaWafSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.impervaWafSettings = this._impervaWafSettings?.internalValue;
    }
    if (this._mandiantIocSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandiantIocSettings = this._mandiantIocSettings?.internalValue;
    }
    if (this._microsoftGraphAlertSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftGraphAlertSettings = this._microsoftGraphAlertSettings?.internalValue;
    }
    if (this._microsoftSecurityCenterAlertSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftSecurityCenterAlertSettings = this._microsoftSecurityCenterAlertSettings?.internalValue;
    }
    if (this._mimecastMailSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimecastMailSettings = this._mimecastMailSettings?.internalValue;
    }
    if (this._mimecastMailV2Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimecastMailV2Settings = this._mimecastMailV2Settings?.internalValue;
    }
    if (this._netskopeAlertSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netskopeAlertSettings = this._netskopeAlertSettings?.internalValue;
    }
    if (this._netskopeAlertV2Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netskopeAlertV2Settings = this._netskopeAlertV2Settings?.internalValue;
    }
    if (this._office365Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.office365Settings = this._office365Settings?.internalValue;
    }
    if (this._oktaSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaSettings = this._oktaSettings?.internalValue;
    }
    if (this._oktaUserContextSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaUserContextSettings = this._oktaUserContextSettings?.internalValue;
    }
    if (this._panIocSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panIocSettings = this._panIocSettings?.internalValue;
    }
    if (this._panPrismaCloudSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panPrismaCloudSettings = this._panPrismaCloudSettings?.internalValue;
    }
    if (this._proofpointMailSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proofpointMailSettings = this._proofpointMailSettings?.internalValue;
    }
    if (this._proofpointOnDemandSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proofpointOnDemandSettings = this._proofpointOnDemandSettings?.internalValue;
    }
    if (this._pubsubSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubSettings = this._pubsubSettings?.internalValue;
    }
    if (this._qualysScanSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualysScanSettings = this._qualysScanSettings?.internalValue;
    }
    if (this._qualysVmSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualysVmSettings = this._qualysVmSettings?.internalValue;
    }
    if (this._rapid7InsightSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rapid7InsightSettings = this._rapid7InsightSettings?.internalValue;
    }
    if (this._recordedFutureIocSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordedFutureIocSettings = this._recordedFutureIocSettings?.internalValue;
    }
    if (this._rhIsacIocSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rhIsacIocSettings = this._rhIsacIocSettings?.internalValue;
    }
    if (this._salesforceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceSettings = this._salesforceSettings?.internalValue;
    }
    if (this._sentineloneAlertSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentineloneAlertSettings = this._sentineloneAlertSettings?.internalValue;
    }
    if (this._serviceNowCmdbSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNowCmdbSettings = this._serviceNowCmdbSettings?.internalValue;
    }
    if (this._sftpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpSettings = this._sftpSettings?.internalValue;
    }
    if (this._symantecEventExportSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.symantecEventExportSettings = this._symantecEventExportSettings?.internalValue;
    }
    if (this._thinkstCanarySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thinkstCanarySettings = this._thinkstCanarySettings?.internalValue;
    }
    if (this._threatConnectIocSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatConnectIocSettings = this._threatConnectIocSettings?.internalValue;
    }
    if (this._threatConnectIocV3Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatConnectIocV3Settings = this._threatConnectIocV3Settings?.internalValue;
    }
    if (this._trellixHxAlertsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trellixHxAlertsSettings = this._trellixHxAlertsSettings?.internalValue;
    }
    if (this._trellixHxBulkAcqsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trellixHxBulkAcqsSettings = this._trellixHxBulkAcqsSettings?.internalValue;
    }
    if (this._trellixHxHostsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trellixHxHostsSettings = this._trellixHxHostsSettings?.internalValue;
    }
    if (this._webhookSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSettings = this._webhookSettings?.internalValue;
    }
    if (this._workdaySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workdaySettings = this._workdaySettings?.internalValue;
    }
    if (this._workspaceActivitySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceActivitySettings = this._workspaceActivitySettings?.internalValue;
    }
    if (this._workspaceAlertsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceAlertsSettings = this._workspaceAlertsSettings?.internalValue;
    }
    if (this._workspaceChromeOsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceChromeOsSettings = this._workspaceChromeOsSettings?.internalValue;
    }
    if (this._workspaceGroupsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceGroupsSettings = this._workspaceGroupsSettings?.internalValue;
    }
    if (this._workspaceMobileSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceMobileSettings = this._workspaceMobileSettings?.internalValue;
    }
    if (this._workspacePrivilegesSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspacePrivilegesSettings = this._workspacePrivilegesSettings?.internalValue;
    }
    if (this._workspaceUsersSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceUsersSettings = this._workspaceUsersSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assetNamespace = undefined;
      this._feedSourceType = undefined;
      this._labels = undefined;
      this._logType = undefined;
      this._amazonKinesisFirehoseSettings.internalValue = undefined;
      this._amazonS3Settings.internalValue = undefined;
      this._amazonS3V2Settings.internalValue = undefined;
      this._amazonSqsSettings.internalValue = undefined;
      this._amazonSqsV2Settings.internalValue = undefined;
      this._anomaliSettings.internalValue = undefined;
      this._awsEc2HostsSettings.internalValue = undefined;
      this._awsEc2InstancesSettings.internalValue = undefined;
      this._awsEc2VpcsSettings.internalValue = undefined;
      this._awsIamSettings.internalValue = undefined;
      this._azureAdAuditSettings.internalValue = undefined;
      this._azureAdContextSettings.internalValue = undefined;
      this._azureAdSettings.internalValue = undefined;
      this._azureBlobStoreSettings.internalValue = undefined;
      this._azureBlobStoreV2Settings.internalValue = undefined;
      this._azureEventHubSettings.internalValue = undefined;
      this._azureMdmIntuneSettings.internalValue = undefined;
      this._cloudPassageSettings.internalValue = undefined;
      this._cortexXdrSettings.internalValue = undefined;
      this._crowdstrikeAlertsSettings.internalValue = undefined;
      this._crowdstrikeDetectsSettings.internalValue = undefined;
      this._dummyLogTypeSettings.internalValue = undefined;
      this._duoAuthSettings.internalValue = undefined;
      this._duoUserContextSettings.internalValue = undefined;
      this._foxItStixSettings.internalValue = undefined;
      this._gcsSettings.internalValue = undefined;
      this._gcsV2Settings.internalValue = undefined;
      this._googleCloudIdentityDeviceUsersSettings.internalValue = undefined;
      this._googleCloudIdentityDevicesSettings.internalValue = undefined;
      this._googleCloudStorageEventDrivenSettings.internalValue = undefined;
      this._httpSettings.internalValue = undefined;
      this._httpsPushAmazonKinesisFirehoseSettings.internalValue = undefined;
      this._httpsPushGoogleCloudPubsubSettings.internalValue = undefined;
      this._httpsPushWebhookSettings.internalValue = undefined;
      this._impervaWafSettings.internalValue = undefined;
      this._mandiantIocSettings.internalValue = undefined;
      this._microsoftGraphAlertSettings.internalValue = undefined;
      this._microsoftSecurityCenterAlertSettings.internalValue = undefined;
      this._mimecastMailSettings.internalValue = undefined;
      this._mimecastMailV2Settings.internalValue = undefined;
      this._netskopeAlertSettings.internalValue = undefined;
      this._netskopeAlertV2Settings.internalValue = undefined;
      this._office365Settings.internalValue = undefined;
      this._oktaSettings.internalValue = undefined;
      this._oktaUserContextSettings.internalValue = undefined;
      this._panIocSettings.internalValue = undefined;
      this._panPrismaCloudSettings.internalValue = undefined;
      this._proofpointMailSettings.internalValue = undefined;
      this._proofpointOnDemandSettings.internalValue = undefined;
      this._pubsubSettings.internalValue = undefined;
      this._qualysScanSettings.internalValue = undefined;
      this._qualysVmSettings.internalValue = undefined;
      this._rapid7InsightSettings.internalValue = undefined;
      this._recordedFutureIocSettings.internalValue = undefined;
      this._rhIsacIocSettings.internalValue = undefined;
      this._salesforceSettings.internalValue = undefined;
      this._sentineloneAlertSettings.internalValue = undefined;
      this._serviceNowCmdbSettings.internalValue = undefined;
      this._sftpSettings.internalValue = undefined;
      this._symantecEventExportSettings.internalValue = undefined;
      this._thinkstCanarySettings.internalValue = undefined;
      this._threatConnectIocSettings.internalValue = undefined;
      this._threatConnectIocV3Settings.internalValue = undefined;
      this._trellixHxAlertsSettings.internalValue = undefined;
      this._trellixHxBulkAcqsSettings.internalValue = undefined;
      this._trellixHxHostsSettings.internalValue = undefined;
      this._webhookSettings.internalValue = undefined;
      this._workdaySettings.internalValue = undefined;
      this._workspaceActivitySettings.internalValue = undefined;
      this._workspaceAlertsSettings.internalValue = undefined;
      this._workspaceChromeOsSettings.internalValue = undefined;
      this._workspaceGroupsSettings.internalValue = undefined;
      this._workspaceMobileSettings.internalValue = undefined;
      this._workspacePrivilegesSettings.internalValue = undefined;
      this._workspaceUsersSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assetNamespace = value.assetNamespace;
      this._feedSourceType = value.feedSourceType;
      this._labels = value.labels;
      this._logType = value.logType;
      this._amazonKinesisFirehoseSettings.internalValue = value.amazonKinesisFirehoseSettings;
      this._amazonS3Settings.internalValue = value.amazonS3Settings;
      this._amazonS3V2Settings.internalValue = value.amazonS3V2Settings;
      this._amazonSqsSettings.internalValue = value.amazonSqsSettings;
      this._amazonSqsV2Settings.internalValue = value.amazonSqsV2Settings;
      this._anomaliSettings.internalValue = value.anomaliSettings;
      this._awsEc2HostsSettings.internalValue = value.awsEc2HostsSettings;
      this._awsEc2InstancesSettings.internalValue = value.awsEc2InstancesSettings;
      this._awsEc2VpcsSettings.internalValue = value.awsEc2VpcsSettings;
      this._awsIamSettings.internalValue = value.awsIamSettings;
      this._azureAdAuditSettings.internalValue = value.azureAdAuditSettings;
      this._azureAdContextSettings.internalValue = value.azureAdContextSettings;
      this._azureAdSettings.internalValue = value.azureAdSettings;
      this._azureBlobStoreSettings.internalValue = value.azureBlobStoreSettings;
      this._azureBlobStoreV2Settings.internalValue = value.azureBlobStoreV2Settings;
      this._azureEventHubSettings.internalValue = value.azureEventHubSettings;
      this._azureMdmIntuneSettings.internalValue = value.azureMdmIntuneSettings;
      this._cloudPassageSettings.internalValue = value.cloudPassageSettings;
      this._cortexXdrSettings.internalValue = value.cortexXdrSettings;
      this._crowdstrikeAlertsSettings.internalValue = value.crowdstrikeAlertsSettings;
      this._crowdstrikeDetectsSettings.internalValue = value.crowdstrikeDetectsSettings;
      this._dummyLogTypeSettings.internalValue = value.dummyLogTypeSettings;
      this._duoAuthSettings.internalValue = value.duoAuthSettings;
      this._duoUserContextSettings.internalValue = value.duoUserContextSettings;
      this._foxItStixSettings.internalValue = value.foxItStixSettings;
      this._gcsSettings.internalValue = value.gcsSettings;
      this._gcsV2Settings.internalValue = value.gcsV2Settings;
      this._googleCloudIdentityDeviceUsersSettings.internalValue = value.googleCloudIdentityDeviceUsersSettings;
      this._googleCloudIdentityDevicesSettings.internalValue = value.googleCloudIdentityDevicesSettings;
      this._googleCloudStorageEventDrivenSettings.internalValue = value.googleCloudStorageEventDrivenSettings;
      this._httpSettings.internalValue = value.httpSettings;
      this._httpsPushAmazonKinesisFirehoseSettings.internalValue = value.httpsPushAmazonKinesisFirehoseSettings;
      this._httpsPushGoogleCloudPubsubSettings.internalValue = value.httpsPushGoogleCloudPubsubSettings;
      this._httpsPushWebhookSettings.internalValue = value.httpsPushWebhookSettings;
      this._impervaWafSettings.internalValue = value.impervaWafSettings;
      this._mandiantIocSettings.internalValue = value.mandiantIocSettings;
      this._microsoftGraphAlertSettings.internalValue = value.microsoftGraphAlertSettings;
      this._microsoftSecurityCenterAlertSettings.internalValue = value.microsoftSecurityCenterAlertSettings;
      this._mimecastMailSettings.internalValue = value.mimecastMailSettings;
      this._mimecastMailV2Settings.internalValue = value.mimecastMailV2Settings;
      this._netskopeAlertSettings.internalValue = value.netskopeAlertSettings;
      this._netskopeAlertV2Settings.internalValue = value.netskopeAlertV2Settings;
      this._office365Settings.internalValue = value.office365Settings;
      this._oktaSettings.internalValue = value.oktaSettings;
      this._oktaUserContextSettings.internalValue = value.oktaUserContextSettings;
      this._panIocSettings.internalValue = value.panIocSettings;
      this._panPrismaCloudSettings.internalValue = value.panPrismaCloudSettings;
      this._proofpointMailSettings.internalValue = value.proofpointMailSettings;
      this._proofpointOnDemandSettings.internalValue = value.proofpointOnDemandSettings;
      this._pubsubSettings.internalValue = value.pubsubSettings;
      this._qualysScanSettings.internalValue = value.qualysScanSettings;
      this._qualysVmSettings.internalValue = value.qualysVmSettings;
      this._rapid7InsightSettings.internalValue = value.rapid7InsightSettings;
      this._recordedFutureIocSettings.internalValue = value.recordedFutureIocSettings;
      this._rhIsacIocSettings.internalValue = value.rhIsacIocSettings;
      this._salesforceSettings.internalValue = value.salesforceSettings;
      this._sentineloneAlertSettings.internalValue = value.sentineloneAlertSettings;
      this._serviceNowCmdbSettings.internalValue = value.serviceNowCmdbSettings;
      this._sftpSettings.internalValue = value.sftpSettings;
      this._symantecEventExportSettings.internalValue = value.symantecEventExportSettings;
      this._thinkstCanarySettings.internalValue = value.thinkstCanarySettings;
      this._threatConnectIocSettings.internalValue = value.threatConnectIocSettings;
      this._threatConnectIocV3Settings.internalValue = value.threatConnectIocV3Settings;
      this._trellixHxAlertsSettings.internalValue = value.trellixHxAlertsSettings;
      this._trellixHxBulkAcqsSettings.internalValue = value.trellixHxBulkAcqsSettings;
      this._trellixHxHostsSettings.internalValue = value.trellixHxHostsSettings;
      this._webhookSettings.internalValue = value.webhookSettings;
      this._workdaySettings.internalValue = value.workdaySettings;
      this._workspaceActivitySettings.internalValue = value.workspaceActivitySettings;
      this._workspaceAlertsSettings.internalValue = value.workspaceAlertsSettings;
      this._workspaceChromeOsSettings.internalValue = value.workspaceChromeOsSettings;
      this._workspaceGroupsSettings.internalValue = value.workspaceGroupsSettings;
      this._workspaceMobileSettings.internalValue = value.workspaceMobileSettings;
      this._workspacePrivilegesSettings.internalValue = value.workspacePrivilegesSettings;
      this._workspaceUsersSettings.internalValue = value.workspaceUsersSettings;
    }
  }

  // asset_namespace - computed: false, optional: true, required: false
  private _assetNamespace?: string; 
  public get assetNamespace() {
    return this.getStringAttribute('asset_namespace');
  }
  public set assetNamespace(value: string) {
    this._assetNamespace = value;
  }
  public resetAssetNamespace() {
    this._assetNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetNamespaceInput() {
    return this._assetNamespace;
  }

  // feed_source_type - computed: false, optional: true, required: false
  private _feedSourceType?: string; 
  public get feedSourceType() {
    return this.getStringAttribute('feed_source_type');
  }
  public set feedSourceType(value: string) {
    this._feedSourceType = value;
  }
  public resetFeedSourceType() {
    this._feedSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedSourceTypeInput() {
    return this._feedSourceType;
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

  // log_type - computed: false, optional: false, required: true
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // sts_migration_readiness - computed: true, optional: false, required: false
  public get stsMigrationReadiness() {
    return this.getStringAttribute('sts_migration_readiness');
  }

  // amazon_kinesis_firehose_settings - computed: false, optional: true, required: false
  private _amazonKinesisFirehoseSettings = new GoogleChronicleFeedDetailsAmazonKinesisFirehoseSettingsOutputReference(this, "amazon_kinesis_firehose_settings");
  public get amazonKinesisFirehoseSettings() {
    return this._amazonKinesisFirehoseSettings;
  }
  public putAmazonKinesisFirehoseSettings(value: GoogleChronicleFeedDetailsAmazonKinesisFirehoseSettings) {
    this._amazonKinesisFirehoseSettings.internalValue = value;
  }
  public resetAmazonKinesisFirehoseSettings() {
    this._amazonKinesisFirehoseSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonKinesisFirehoseSettingsInput() {
    return this._amazonKinesisFirehoseSettings.internalValue;
  }

  // amazon_s3_settings - computed: false, optional: true, required: false
  private _amazonS3Settings = new GoogleChronicleFeedDetailsAmazonS3SettingsOutputReference(this, "amazon_s3_settings");
  public get amazonS3Settings() {
    return this._amazonS3Settings;
  }
  public putAmazonS3Settings(value: GoogleChronicleFeedDetailsAmazonS3Settings) {
    this._amazonS3Settings.internalValue = value;
  }
  public resetAmazonS3Settings() {
    this._amazonS3Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonS3SettingsInput() {
    return this._amazonS3Settings.internalValue;
  }

  // amazon_s3_v2_settings - computed: false, optional: true, required: false
  private _amazonS3V2Settings = new GoogleChronicleFeedDetailsAmazonS3V2SettingsOutputReference(this, "amazon_s3_v2_settings");
  public get amazonS3V2Settings() {
    return this._amazonS3V2Settings;
  }
  public putAmazonS3V2Settings(value: GoogleChronicleFeedDetailsAmazonS3V2Settings) {
    this._amazonS3V2Settings.internalValue = value;
  }
  public resetAmazonS3V2Settings() {
    this._amazonS3V2Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonS3V2SettingsInput() {
    return this._amazonS3V2Settings.internalValue;
  }

  // amazon_sqs_settings - computed: false, optional: true, required: false
  private _amazonSqsSettings = new GoogleChronicleFeedDetailsAmazonSqsSettingsOutputReference(this, "amazon_sqs_settings");
  public get amazonSqsSettings() {
    return this._amazonSqsSettings;
  }
  public putAmazonSqsSettings(value: GoogleChronicleFeedDetailsAmazonSqsSettings) {
    this._amazonSqsSettings.internalValue = value;
  }
  public resetAmazonSqsSettings() {
    this._amazonSqsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonSqsSettingsInput() {
    return this._amazonSqsSettings.internalValue;
  }

  // amazon_sqs_v2_settings - computed: false, optional: true, required: false
  private _amazonSqsV2Settings = new GoogleChronicleFeedDetailsAmazonSqsV2SettingsOutputReference(this, "amazon_sqs_v2_settings");
  public get amazonSqsV2Settings() {
    return this._amazonSqsV2Settings;
  }
  public putAmazonSqsV2Settings(value: GoogleChronicleFeedDetailsAmazonSqsV2Settings) {
    this._amazonSqsV2Settings.internalValue = value;
  }
  public resetAmazonSqsV2Settings() {
    this._amazonSqsV2Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonSqsV2SettingsInput() {
    return this._amazonSqsV2Settings.internalValue;
  }

  // anomali_settings - computed: false, optional: true, required: false
  private _anomaliSettings = new GoogleChronicleFeedDetailsAnomaliSettingsOutputReference(this, "anomali_settings");
  public get anomaliSettings() {
    return this._anomaliSettings;
  }
  public putAnomaliSettings(value: GoogleChronicleFeedDetailsAnomaliSettings) {
    this._anomaliSettings.internalValue = value;
  }
  public resetAnomaliSettings() {
    this._anomaliSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomaliSettingsInput() {
    return this._anomaliSettings.internalValue;
  }

  // aws_ec2_hosts_settings - computed: false, optional: true, required: false
  private _awsEc2HostsSettings = new GoogleChronicleFeedDetailsAwsEc2HostsSettingsOutputReference(this, "aws_ec2_hosts_settings");
  public get awsEc2HostsSettings() {
    return this._awsEc2HostsSettings;
  }
  public putAwsEc2HostsSettings(value: GoogleChronicleFeedDetailsAwsEc2HostsSettings) {
    this._awsEc2HostsSettings.internalValue = value;
  }
  public resetAwsEc2HostsSettings() {
    this._awsEc2HostsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEc2HostsSettingsInput() {
    return this._awsEc2HostsSettings.internalValue;
  }

  // aws_ec2_instances_settings - computed: false, optional: true, required: false
  private _awsEc2InstancesSettings = new GoogleChronicleFeedDetailsAwsEc2InstancesSettingsOutputReference(this, "aws_ec2_instances_settings");
  public get awsEc2InstancesSettings() {
    return this._awsEc2InstancesSettings;
  }
  public putAwsEc2InstancesSettings(value: GoogleChronicleFeedDetailsAwsEc2InstancesSettings) {
    this._awsEc2InstancesSettings.internalValue = value;
  }
  public resetAwsEc2InstancesSettings() {
    this._awsEc2InstancesSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEc2InstancesSettingsInput() {
    return this._awsEc2InstancesSettings.internalValue;
  }

  // aws_ec2_vpcs_settings - computed: false, optional: true, required: false
  private _awsEc2VpcsSettings = new GoogleChronicleFeedDetailsAwsEc2VpcsSettingsOutputReference(this, "aws_ec2_vpcs_settings");
  public get awsEc2VpcsSettings() {
    return this._awsEc2VpcsSettings;
  }
  public putAwsEc2VpcsSettings(value: GoogleChronicleFeedDetailsAwsEc2VpcsSettings) {
    this._awsEc2VpcsSettings.internalValue = value;
  }
  public resetAwsEc2VpcsSettings() {
    this._awsEc2VpcsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEc2VpcsSettingsInput() {
    return this._awsEc2VpcsSettings.internalValue;
  }

  // aws_iam_settings - computed: false, optional: true, required: false
  private _awsIamSettings = new GoogleChronicleFeedDetailsAwsIamSettingsOutputReference(this, "aws_iam_settings");
  public get awsIamSettings() {
    return this._awsIamSettings;
  }
  public putAwsIamSettings(value: GoogleChronicleFeedDetailsAwsIamSettings) {
    this._awsIamSettings.internalValue = value;
  }
  public resetAwsIamSettings() {
    this._awsIamSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamSettingsInput() {
    return this._awsIamSettings.internalValue;
  }

  // azure_ad_audit_settings - computed: false, optional: true, required: false
  private _azureAdAuditSettings = new GoogleChronicleFeedDetailsAzureAdAuditSettingsOutputReference(this, "azure_ad_audit_settings");
  public get azureAdAuditSettings() {
    return this._azureAdAuditSettings;
  }
  public putAzureAdAuditSettings(value: GoogleChronicleFeedDetailsAzureAdAuditSettings) {
    this._azureAdAuditSettings.internalValue = value;
  }
  public resetAzureAdAuditSettings() {
    this._azureAdAuditSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdAuditSettingsInput() {
    return this._azureAdAuditSettings.internalValue;
  }

  // azure_ad_context_settings - computed: false, optional: true, required: false
  private _azureAdContextSettings = new GoogleChronicleFeedDetailsAzureAdContextSettingsOutputReference(this, "azure_ad_context_settings");
  public get azureAdContextSettings() {
    return this._azureAdContextSettings;
  }
  public putAzureAdContextSettings(value: GoogleChronicleFeedDetailsAzureAdContextSettings) {
    this._azureAdContextSettings.internalValue = value;
  }
  public resetAzureAdContextSettings() {
    this._azureAdContextSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdContextSettingsInput() {
    return this._azureAdContextSettings.internalValue;
  }

  // azure_ad_settings - computed: false, optional: true, required: false
  private _azureAdSettings = new GoogleChronicleFeedDetailsAzureAdSettingsOutputReference(this, "azure_ad_settings");
  public get azureAdSettings() {
    return this._azureAdSettings;
  }
  public putAzureAdSettings(value: GoogleChronicleFeedDetailsAzureAdSettings) {
    this._azureAdSettings.internalValue = value;
  }
  public resetAzureAdSettings() {
    this._azureAdSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdSettingsInput() {
    return this._azureAdSettings.internalValue;
  }

  // azure_blob_store_settings - computed: false, optional: true, required: false
  private _azureBlobStoreSettings = new GoogleChronicleFeedDetailsAzureBlobStoreSettingsOutputReference(this, "azure_blob_store_settings");
  public get azureBlobStoreSettings() {
    return this._azureBlobStoreSettings;
  }
  public putAzureBlobStoreSettings(value: GoogleChronicleFeedDetailsAzureBlobStoreSettings) {
    this._azureBlobStoreSettings.internalValue = value;
  }
  public resetAzureBlobStoreSettings() {
    this._azureBlobStoreSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStoreSettingsInput() {
    return this._azureBlobStoreSettings.internalValue;
  }

  // azure_blob_store_v2_settings - computed: false, optional: true, required: false
  private _azureBlobStoreV2Settings = new GoogleChronicleFeedDetailsAzureBlobStoreV2SettingsOutputReference(this, "azure_blob_store_v2_settings");
  public get azureBlobStoreV2Settings() {
    return this._azureBlobStoreV2Settings;
  }
  public putAzureBlobStoreV2Settings(value: GoogleChronicleFeedDetailsAzureBlobStoreV2Settings) {
    this._azureBlobStoreV2Settings.internalValue = value;
  }
  public resetAzureBlobStoreV2Settings() {
    this._azureBlobStoreV2Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStoreV2SettingsInput() {
    return this._azureBlobStoreV2Settings.internalValue;
  }

  // azure_event_hub_settings - computed: false, optional: true, required: false
  private _azureEventHubSettings = new GoogleChronicleFeedDetailsAzureEventHubSettingsOutputReference(this, "azure_event_hub_settings");
  public get azureEventHubSettings() {
    return this._azureEventHubSettings;
  }
  public putAzureEventHubSettings(value: GoogleChronicleFeedDetailsAzureEventHubSettings) {
    this._azureEventHubSettings.internalValue = value;
  }
  public resetAzureEventHubSettings() {
    this._azureEventHubSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEventHubSettingsInput() {
    return this._azureEventHubSettings.internalValue;
  }

  // azure_mdm_intune_settings - computed: false, optional: true, required: false
  private _azureMdmIntuneSettings = new GoogleChronicleFeedDetailsAzureMdmIntuneSettingsOutputReference(this, "azure_mdm_intune_settings");
  public get azureMdmIntuneSettings() {
    return this._azureMdmIntuneSettings;
  }
  public putAzureMdmIntuneSettings(value: GoogleChronicleFeedDetailsAzureMdmIntuneSettings) {
    this._azureMdmIntuneSettings.internalValue = value;
  }
  public resetAzureMdmIntuneSettings() {
    this._azureMdmIntuneSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMdmIntuneSettingsInput() {
    return this._azureMdmIntuneSettings.internalValue;
  }

  // cloud_passage_settings - computed: false, optional: true, required: false
  private _cloudPassageSettings = new GoogleChronicleFeedDetailsCloudPassageSettingsOutputReference(this, "cloud_passage_settings");
  public get cloudPassageSettings() {
    return this._cloudPassageSettings;
  }
  public putCloudPassageSettings(value: GoogleChronicleFeedDetailsCloudPassageSettings) {
    this._cloudPassageSettings.internalValue = value;
  }
  public resetCloudPassageSettings() {
    this._cloudPassageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudPassageSettingsInput() {
    return this._cloudPassageSettings.internalValue;
  }

  // cortex_xdr_settings - computed: false, optional: true, required: false
  private _cortexXdrSettings = new GoogleChronicleFeedDetailsCortexXdrSettingsOutputReference(this, "cortex_xdr_settings");
  public get cortexXdrSettings() {
    return this._cortexXdrSettings;
  }
  public putCortexXdrSettings(value: GoogleChronicleFeedDetailsCortexXdrSettings) {
    this._cortexXdrSettings.internalValue = value;
  }
  public resetCortexXdrSettings() {
    this._cortexXdrSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cortexXdrSettingsInput() {
    return this._cortexXdrSettings.internalValue;
  }

  // crowdstrike_alerts_settings - computed: false, optional: true, required: false
  private _crowdstrikeAlertsSettings = new GoogleChronicleFeedDetailsCrowdstrikeAlertsSettingsOutputReference(this, "crowdstrike_alerts_settings");
  public get crowdstrikeAlertsSettings() {
    return this._crowdstrikeAlertsSettings;
  }
  public putCrowdstrikeAlertsSettings(value: GoogleChronicleFeedDetailsCrowdstrikeAlertsSettings) {
    this._crowdstrikeAlertsSettings.internalValue = value;
  }
  public resetCrowdstrikeAlertsSettings() {
    this._crowdstrikeAlertsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crowdstrikeAlertsSettingsInput() {
    return this._crowdstrikeAlertsSettings.internalValue;
  }

  // crowdstrike_detects_settings - computed: false, optional: true, required: false
  private _crowdstrikeDetectsSettings = new GoogleChronicleFeedDetailsCrowdstrikeDetectsSettingsOutputReference(this, "crowdstrike_detects_settings");
  public get crowdstrikeDetectsSettings() {
    return this._crowdstrikeDetectsSettings;
  }
  public putCrowdstrikeDetectsSettings(value: GoogleChronicleFeedDetailsCrowdstrikeDetectsSettings) {
    this._crowdstrikeDetectsSettings.internalValue = value;
  }
  public resetCrowdstrikeDetectsSettings() {
    this._crowdstrikeDetectsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crowdstrikeDetectsSettingsInput() {
    return this._crowdstrikeDetectsSettings.internalValue;
  }

  // dummy_log_type_settings - computed: false, optional: true, required: false
  private _dummyLogTypeSettings = new GoogleChronicleFeedDetailsDummyLogTypeSettingsOutputReference(this, "dummy_log_type_settings");
  public get dummyLogTypeSettings() {
    return this._dummyLogTypeSettings;
  }
  public putDummyLogTypeSettings(value: GoogleChronicleFeedDetailsDummyLogTypeSettings) {
    this._dummyLogTypeSettings.internalValue = value;
  }
  public resetDummyLogTypeSettings() {
    this._dummyLogTypeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyLogTypeSettingsInput() {
    return this._dummyLogTypeSettings.internalValue;
  }

  // duo_auth_settings - computed: false, optional: true, required: false
  private _duoAuthSettings = new GoogleChronicleFeedDetailsDuoAuthSettingsOutputReference(this, "duo_auth_settings");
  public get duoAuthSettings() {
    return this._duoAuthSettings;
  }
  public putDuoAuthSettings(value: GoogleChronicleFeedDetailsDuoAuthSettings) {
    this._duoAuthSettings.internalValue = value;
  }
  public resetDuoAuthSettings() {
    this._duoAuthSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duoAuthSettingsInput() {
    return this._duoAuthSettings.internalValue;
  }

  // duo_user_context_settings - computed: false, optional: true, required: false
  private _duoUserContextSettings = new GoogleChronicleFeedDetailsDuoUserContextSettingsOutputReference(this, "duo_user_context_settings");
  public get duoUserContextSettings() {
    return this._duoUserContextSettings;
  }
  public putDuoUserContextSettings(value: GoogleChronicleFeedDetailsDuoUserContextSettings) {
    this._duoUserContextSettings.internalValue = value;
  }
  public resetDuoUserContextSettings() {
    this._duoUserContextSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duoUserContextSettingsInput() {
    return this._duoUserContextSettings.internalValue;
  }

  // fox_it_stix_settings - computed: false, optional: true, required: false
  private _foxItStixSettings = new GoogleChronicleFeedDetailsFoxItStixSettingsOutputReference(this, "fox_it_stix_settings");
  public get foxItStixSettings() {
    return this._foxItStixSettings;
  }
  public putFoxItStixSettings(value: GoogleChronicleFeedDetailsFoxItStixSettings) {
    this._foxItStixSettings.internalValue = value;
  }
  public resetFoxItStixSettings() {
    this._foxItStixSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foxItStixSettingsInput() {
    return this._foxItStixSettings.internalValue;
  }

  // gcs_settings - computed: false, optional: true, required: false
  private _gcsSettings = new GoogleChronicleFeedDetailsGcsSettingsOutputReference(this, "gcs_settings");
  public get gcsSettings() {
    return this._gcsSettings;
  }
  public putGcsSettings(value: GoogleChronicleFeedDetailsGcsSettings) {
    this._gcsSettings.internalValue = value;
  }
  public resetGcsSettings() {
    this._gcsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsSettingsInput() {
    return this._gcsSettings.internalValue;
  }

  // gcs_v2_settings - computed: false, optional: true, required: false
  private _gcsV2Settings = new GoogleChronicleFeedDetailsGcsV2SettingsOutputReference(this, "gcs_v2_settings");
  public get gcsV2Settings() {
    return this._gcsV2Settings;
  }
  public putGcsV2Settings(value: GoogleChronicleFeedDetailsGcsV2Settings) {
    this._gcsV2Settings.internalValue = value;
  }
  public resetGcsV2Settings() {
    this._gcsV2Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsV2SettingsInput() {
    return this._gcsV2Settings.internalValue;
  }

  // google_cloud_identity_device_users_settings - computed: false, optional: true, required: false
  private _googleCloudIdentityDeviceUsersSettings = new GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsOutputReference(this, "google_cloud_identity_device_users_settings");
  public get googleCloudIdentityDeviceUsersSettings() {
    return this._googleCloudIdentityDeviceUsersSettings;
  }
  public putGoogleCloudIdentityDeviceUsersSettings(value: GoogleChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettings) {
    this._googleCloudIdentityDeviceUsersSettings.internalValue = value;
  }
  public resetGoogleCloudIdentityDeviceUsersSettings() {
    this._googleCloudIdentityDeviceUsersSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudIdentityDeviceUsersSettingsInput() {
    return this._googleCloudIdentityDeviceUsersSettings.internalValue;
  }

  // google_cloud_identity_devices_settings - computed: false, optional: true, required: false
  private _googleCloudIdentityDevicesSettings = new GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsOutputReference(this, "google_cloud_identity_devices_settings");
  public get googleCloudIdentityDevicesSettings() {
    return this._googleCloudIdentityDevicesSettings;
  }
  public putGoogleCloudIdentityDevicesSettings(value: GoogleChronicleFeedDetailsGoogleCloudIdentityDevicesSettings) {
    this._googleCloudIdentityDevicesSettings.internalValue = value;
  }
  public resetGoogleCloudIdentityDevicesSettings() {
    this._googleCloudIdentityDevicesSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudIdentityDevicesSettingsInput() {
    return this._googleCloudIdentityDevicesSettings.internalValue;
  }

  // google_cloud_storage_event_driven_settings - computed: false, optional: true, required: false
  private _googleCloudStorageEventDrivenSettings = new GoogleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsOutputReference(this, "google_cloud_storage_event_driven_settings");
  public get googleCloudStorageEventDrivenSettings() {
    return this._googleCloudStorageEventDrivenSettings;
  }
  public putGoogleCloudStorageEventDrivenSettings(value: GoogleChronicleFeedDetailsGoogleCloudStorageEventDrivenSettings) {
    this._googleCloudStorageEventDrivenSettings.internalValue = value;
  }
  public resetGoogleCloudStorageEventDrivenSettings() {
    this._googleCloudStorageEventDrivenSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageEventDrivenSettingsInput() {
    return this._googleCloudStorageEventDrivenSettings.internalValue;
  }

  // http_settings - computed: false, optional: true, required: false
  private _httpSettings = new GoogleChronicleFeedDetailsHttpSettingsOutputReference(this, "http_settings");
  public get httpSettings() {
    return this._httpSettings;
  }
  public putHttpSettings(value: GoogleChronicleFeedDetailsHttpSettings) {
    this._httpSettings.internalValue = value;
  }
  public resetHttpSettings() {
    this._httpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSettingsInput() {
    return this._httpSettings.internalValue;
  }

  // https_push_amazon_kinesis_firehose_settings - computed: false, optional: true, required: false
  private _httpsPushAmazonKinesisFirehoseSettings = new GoogleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsOutputReference(this, "https_push_amazon_kinesis_firehose_settings");
  public get httpsPushAmazonKinesisFirehoseSettings() {
    return this._httpsPushAmazonKinesisFirehoseSettings;
  }
  public putHttpsPushAmazonKinesisFirehoseSettings(value: GoogleChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettings) {
    this._httpsPushAmazonKinesisFirehoseSettings.internalValue = value;
  }
  public resetHttpsPushAmazonKinesisFirehoseSettings() {
    this._httpsPushAmazonKinesisFirehoseSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPushAmazonKinesisFirehoseSettingsInput() {
    return this._httpsPushAmazonKinesisFirehoseSettings.internalValue;
  }

  // https_push_google_cloud_pubsub_settings - computed: false, optional: true, required: false
  private _httpsPushGoogleCloudPubsubSettings = new GoogleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsOutputReference(this, "https_push_google_cloud_pubsub_settings");
  public get httpsPushGoogleCloudPubsubSettings() {
    return this._httpsPushGoogleCloudPubsubSettings;
  }
  public putHttpsPushGoogleCloudPubsubSettings(value: GoogleChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettings) {
    this._httpsPushGoogleCloudPubsubSettings.internalValue = value;
  }
  public resetHttpsPushGoogleCloudPubsubSettings() {
    this._httpsPushGoogleCloudPubsubSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPushGoogleCloudPubsubSettingsInput() {
    return this._httpsPushGoogleCloudPubsubSettings.internalValue;
  }

  // https_push_webhook_settings - computed: false, optional: true, required: false
  private _httpsPushWebhookSettings = new GoogleChronicleFeedDetailsHttpsPushWebhookSettingsOutputReference(this, "https_push_webhook_settings");
  public get httpsPushWebhookSettings() {
    return this._httpsPushWebhookSettings;
  }
  public putHttpsPushWebhookSettings(value: GoogleChronicleFeedDetailsHttpsPushWebhookSettings) {
    this._httpsPushWebhookSettings.internalValue = value;
  }
  public resetHttpsPushWebhookSettings() {
    this._httpsPushWebhookSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPushWebhookSettingsInput() {
    return this._httpsPushWebhookSettings.internalValue;
  }

  // imperva_waf_settings - computed: false, optional: true, required: false
  private _impervaWafSettings = new GoogleChronicleFeedDetailsImpervaWafSettingsOutputReference(this, "imperva_waf_settings");
  public get impervaWafSettings() {
    return this._impervaWafSettings;
  }
  public putImpervaWafSettings(value: GoogleChronicleFeedDetailsImpervaWafSettings) {
    this._impervaWafSettings.internalValue = value;
  }
  public resetImpervaWafSettings() {
    this._impervaWafSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impervaWafSettingsInput() {
    return this._impervaWafSettings.internalValue;
  }

  // mandiant_ioc_settings - computed: false, optional: true, required: false
  private _mandiantIocSettings = new GoogleChronicleFeedDetailsMandiantIocSettingsOutputReference(this, "mandiant_ioc_settings");
  public get mandiantIocSettings() {
    return this._mandiantIocSettings;
  }
  public putMandiantIocSettings(value: GoogleChronicleFeedDetailsMandiantIocSettings) {
    this._mandiantIocSettings.internalValue = value;
  }
  public resetMandiantIocSettings() {
    this._mandiantIocSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandiantIocSettingsInput() {
    return this._mandiantIocSettings.internalValue;
  }

  // microsoft_graph_alert_settings - computed: false, optional: true, required: false
  private _microsoftGraphAlertSettings = new GoogleChronicleFeedDetailsMicrosoftGraphAlertSettingsOutputReference(this, "microsoft_graph_alert_settings");
  public get microsoftGraphAlertSettings() {
    return this._microsoftGraphAlertSettings;
  }
  public putMicrosoftGraphAlertSettings(value: GoogleChronicleFeedDetailsMicrosoftGraphAlertSettings) {
    this._microsoftGraphAlertSettings.internalValue = value;
  }
  public resetMicrosoftGraphAlertSettings() {
    this._microsoftGraphAlertSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftGraphAlertSettingsInput() {
    return this._microsoftGraphAlertSettings.internalValue;
  }

  // microsoft_security_center_alert_settings - computed: false, optional: true, required: false
  private _microsoftSecurityCenterAlertSettings = new GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsOutputReference(this, "microsoft_security_center_alert_settings");
  public get microsoftSecurityCenterAlertSettings() {
    return this._microsoftSecurityCenterAlertSettings;
  }
  public putMicrosoftSecurityCenterAlertSettings(value: GoogleChronicleFeedDetailsMicrosoftSecurityCenterAlertSettings) {
    this._microsoftSecurityCenterAlertSettings.internalValue = value;
  }
  public resetMicrosoftSecurityCenterAlertSettings() {
    this._microsoftSecurityCenterAlertSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftSecurityCenterAlertSettingsInput() {
    return this._microsoftSecurityCenterAlertSettings.internalValue;
  }

  // mimecast_mail_settings - computed: false, optional: true, required: false
  private _mimecastMailSettings = new GoogleChronicleFeedDetailsMimecastMailSettingsOutputReference(this, "mimecast_mail_settings");
  public get mimecastMailSettings() {
    return this._mimecastMailSettings;
  }
  public putMimecastMailSettings(value: GoogleChronicleFeedDetailsMimecastMailSettings) {
    this._mimecastMailSettings.internalValue = value;
  }
  public resetMimecastMailSettings() {
    this._mimecastMailSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimecastMailSettingsInput() {
    return this._mimecastMailSettings.internalValue;
  }

  // mimecast_mail_v2_settings - computed: false, optional: true, required: false
  private _mimecastMailV2Settings = new GoogleChronicleFeedDetailsMimecastMailV2SettingsOutputReference(this, "mimecast_mail_v2_settings");
  public get mimecastMailV2Settings() {
    return this._mimecastMailV2Settings;
  }
  public putMimecastMailV2Settings(value: GoogleChronicleFeedDetailsMimecastMailV2Settings) {
    this._mimecastMailV2Settings.internalValue = value;
  }
  public resetMimecastMailV2Settings() {
    this._mimecastMailV2Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimecastMailV2SettingsInput() {
    return this._mimecastMailV2Settings.internalValue;
  }

  // netskope_alert_settings - computed: false, optional: true, required: false
  private _netskopeAlertSettings = new GoogleChronicleFeedDetailsNetskopeAlertSettingsOutputReference(this, "netskope_alert_settings");
  public get netskopeAlertSettings() {
    return this._netskopeAlertSettings;
  }
  public putNetskopeAlertSettings(value: GoogleChronicleFeedDetailsNetskopeAlertSettings) {
    this._netskopeAlertSettings.internalValue = value;
  }
  public resetNetskopeAlertSettings() {
    this._netskopeAlertSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netskopeAlertSettingsInput() {
    return this._netskopeAlertSettings.internalValue;
  }

  // netskope_alert_v2_settings - computed: false, optional: true, required: false
  private _netskopeAlertV2Settings = new GoogleChronicleFeedDetailsNetskopeAlertV2SettingsOutputReference(this, "netskope_alert_v2_settings");
  public get netskopeAlertV2Settings() {
    return this._netskopeAlertV2Settings;
  }
  public putNetskopeAlertV2Settings(value: GoogleChronicleFeedDetailsNetskopeAlertV2Settings) {
    this._netskopeAlertV2Settings.internalValue = value;
  }
  public resetNetskopeAlertV2Settings() {
    this._netskopeAlertV2Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netskopeAlertV2SettingsInput() {
    return this._netskopeAlertV2Settings.internalValue;
  }

  // office365_settings - computed: false, optional: true, required: false
  private _office365Settings = new GoogleChronicleFeedDetailsOffice365SettingsOutputReference(this, "office365_settings");
  public get office365Settings() {
    return this._office365Settings;
  }
  public putOffice365Settings(value: GoogleChronicleFeedDetailsOffice365Settings) {
    this._office365Settings.internalValue = value;
  }
  public resetOffice365Settings() {
    this._office365Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get office365SettingsInput() {
    return this._office365Settings.internalValue;
  }

  // okta_settings - computed: false, optional: true, required: false
  private _oktaSettings = new GoogleChronicleFeedDetailsOktaSettingsOutputReference(this, "okta_settings");
  public get oktaSettings() {
    return this._oktaSettings;
  }
  public putOktaSettings(value: GoogleChronicleFeedDetailsOktaSettings) {
    this._oktaSettings.internalValue = value;
  }
  public resetOktaSettings() {
    this._oktaSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaSettingsInput() {
    return this._oktaSettings.internalValue;
  }

  // okta_user_context_settings - computed: false, optional: true, required: false
  private _oktaUserContextSettings = new GoogleChronicleFeedDetailsOktaUserContextSettingsOutputReference(this, "okta_user_context_settings");
  public get oktaUserContextSettings() {
    return this._oktaUserContextSettings;
  }
  public putOktaUserContextSettings(value: GoogleChronicleFeedDetailsOktaUserContextSettings) {
    this._oktaUserContextSettings.internalValue = value;
  }
  public resetOktaUserContextSettings() {
    this._oktaUserContextSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaUserContextSettingsInput() {
    return this._oktaUserContextSettings.internalValue;
  }

  // pan_ioc_settings - computed: false, optional: true, required: false
  private _panIocSettings = new GoogleChronicleFeedDetailsPanIocSettingsOutputReference(this, "pan_ioc_settings");
  public get panIocSettings() {
    return this._panIocSettings;
  }
  public putPanIocSettings(value: GoogleChronicleFeedDetailsPanIocSettings) {
    this._panIocSettings.internalValue = value;
  }
  public resetPanIocSettings() {
    this._panIocSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panIocSettingsInput() {
    return this._panIocSettings.internalValue;
  }

  // pan_prisma_cloud_settings - computed: false, optional: true, required: false
  private _panPrismaCloudSettings = new GoogleChronicleFeedDetailsPanPrismaCloudSettingsOutputReference(this, "pan_prisma_cloud_settings");
  public get panPrismaCloudSettings() {
    return this._panPrismaCloudSettings;
  }
  public putPanPrismaCloudSettings(value: GoogleChronicleFeedDetailsPanPrismaCloudSettings) {
    this._panPrismaCloudSettings.internalValue = value;
  }
  public resetPanPrismaCloudSettings() {
    this._panPrismaCloudSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panPrismaCloudSettingsInput() {
    return this._panPrismaCloudSettings.internalValue;
  }

  // proofpoint_mail_settings - computed: false, optional: true, required: false
  private _proofpointMailSettings = new GoogleChronicleFeedDetailsProofpointMailSettingsOutputReference(this, "proofpoint_mail_settings");
  public get proofpointMailSettings() {
    return this._proofpointMailSettings;
  }
  public putProofpointMailSettings(value: GoogleChronicleFeedDetailsProofpointMailSettings) {
    this._proofpointMailSettings.internalValue = value;
  }
  public resetProofpointMailSettings() {
    this._proofpointMailSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proofpointMailSettingsInput() {
    return this._proofpointMailSettings.internalValue;
  }

  // proofpoint_on_demand_settings - computed: false, optional: true, required: false
  private _proofpointOnDemandSettings = new GoogleChronicleFeedDetailsProofpointOnDemandSettingsOutputReference(this, "proofpoint_on_demand_settings");
  public get proofpointOnDemandSettings() {
    return this._proofpointOnDemandSettings;
  }
  public putProofpointOnDemandSettings(value: GoogleChronicleFeedDetailsProofpointOnDemandSettings) {
    this._proofpointOnDemandSettings.internalValue = value;
  }
  public resetProofpointOnDemandSettings() {
    this._proofpointOnDemandSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proofpointOnDemandSettingsInput() {
    return this._proofpointOnDemandSettings.internalValue;
  }

  // pubsub_settings - computed: false, optional: true, required: false
  private _pubsubSettings = new GoogleChronicleFeedDetailsPubsubSettingsOutputReference(this, "pubsub_settings");
  public get pubsubSettings() {
    return this._pubsubSettings;
  }
  public putPubsubSettings(value: GoogleChronicleFeedDetailsPubsubSettings) {
    this._pubsubSettings.internalValue = value;
  }
  public resetPubsubSettings() {
    this._pubsubSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubSettingsInput() {
    return this._pubsubSettings.internalValue;
  }

  // qualys_scan_settings - computed: false, optional: true, required: false
  private _qualysScanSettings = new GoogleChronicleFeedDetailsQualysScanSettingsOutputReference(this, "qualys_scan_settings");
  public get qualysScanSettings() {
    return this._qualysScanSettings;
  }
  public putQualysScanSettings(value: GoogleChronicleFeedDetailsQualysScanSettings) {
    this._qualysScanSettings.internalValue = value;
  }
  public resetQualysScanSettings() {
    this._qualysScanSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualysScanSettingsInput() {
    return this._qualysScanSettings.internalValue;
  }

  // qualys_vm_settings - computed: false, optional: true, required: false
  private _qualysVmSettings = new GoogleChronicleFeedDetailsQualysVmSettingsOutputReference(this, "qualys_vm_settings");
  public get qualysVmSettings() {
    return this._qualysVmSettings;
  }
  public putQualysVmSettings(value: GoogleChronicleFeedDetailsQualysVmSettings) {
    this._qualysVmSettings.internalValue = value;
  }
  public resetQualysVmSettings() {
    this._qualysVmSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualysVmSettingsInput() {
    return this._qualysVmSettings.internalValue;
  }

  // rapid7_insight_settings - computed: false, optional: true, required: false
  private _rapid7InsightSettings = new GoogleChronicleFeedDetailsRapid7InsightSettingsOutputReference(this, "rapid7_insight_settings");
  public get rapid7InsightSettings() {
    return this._rapid7InsightSettings;
  }
  public putRapid7InsightSettings(value: GoogleChronicleFeedDetailsRapid7InsightSettings) {
    this._rapid7InsightSettings.internalValue = value;
  }
  public resetRapid7InsightSettings() {
    this._rapid7InsightSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rapid7InsightSettingsInput() {
    return this._rapid7InsightSettings.internalValue;
  }

  // recorded_future_ioc_settings - computed: false, optional: true, required: false
  private _recordedFutureIocSettings = new GoogleChronicleFeedDetailsRecordedFutureIocSettingsOutputReference(this, "recorded_future_ioc_settings");
  public get recordedFutureIocSettings() {
    return this._recordedFutureIocSettings;
  }
  public putRecordedFutureIocSettings(value: GoogleChronicleFeedDetailsRecordedFutureIocSettings) {
    this._recordedFutureIocSettings.internalValue = value;
  }
  public resetRecordedFutureIocSettings() {
    this._recordedFutureIocSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordedFutureIocSettingsInput() {
    return this._recordedFutureIocSettings.internalValue;
  }

  // rh_isac_ioc_settings - computed: false, optional: true, required: false
  private _rhIsacIocSettings = new GoogleChronicleFeedDetailsRhIsacIocSettingsOutputReference(this, "rh_isac_ioc_settings");
  public get rhIsacIocSettings() {
    return this._rhIsacIocSettings;
  }
  public putRhIsacIocSettings(value: GoogleChronicleFeedDetailsRhIsacIocSettings) {
    this._rhIsacIocSettings.internalValue = value;
  }
  public resetRhIsacIocSettings() {
    this._rhIsacIocSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rhIsacIocSettingsInput() {
    return this._rhIsacIocSettings.internalValue;
  }

  // salesforce_settings - computed: false, optional: true, required: false
  private _salesforceSettings = new GoogleChronicleFeedDetailsSalesforceSettingsOutputReference(this, "salesforce_settings");
  public get salesforceSettings() {
    return this._salesforceSettings;
  }
  public putSalesforceSettings(value: GoogleChronicleFeedDetailsSalesforceSettings) {
    this._salesforceSettings.internalValue = value;
  }
  public resetSalesforceSettings() {
    this._salesforceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceSettingsInput() {
    return this._salesforceSettings.internalValue;
  }

  // sentinelone_alert_settings - computed: false, optional: true, required: false
  private _sentineloneAlertSettings = new GoogleChronicleFeedDetailsSentineloneAlertSettingsOutputReference(this, "sentinelone_alert_settings");
  public get sentineloneAlertSettings() {
    return this._sentineloneAlertSettings;
  }
  public putSentineloneAlertSettings(value: GoogleChronicleFeedDetailsSentineloneAlertSettings) {
    this._sentineloneAlertSettings.internalValue = value;
  }
  public resetSentineloneAlertSettings() {
    this._sentineloneAlertSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentineloneAlertSettingsInput() {
    return this._sentineloneAlertSettings.internalValue;
  }

  // service_now_cmdb_settings - computed: false, optional: true, required: false
  private _serviceNowCmdbSettings = new GoogleChronicleFeedDetailsServiceNowCmdbSettingsOutputReference(this, "service_now_cmdb_settings");
  public get serviceNowCmdbSettings() {
    return this._serviceNowCmdbSettings;
  }
  public putServiceNowCmdbSettings(value: GoogleChronicleFeedDetailsServiceNowCmdbSettings) {
    this._serviceNowCmdbSettings.internalValue = value;
  }
  public resetServiceNowCmdbSettings() {
    this._serviceNowCmdbSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowCmdbSettingsInput() {
    return this._serviceNowCmdbSettings.internalValue;
  }

  // sftp_settings - computed: false, optional: true, required: false
  private _sftpSettings = new GoogleChronicleFeedDetailsSftpSettingsOutputReference(this, "sftp_settings");
  public get sftpSettings() {
    return this._sftpSettings;
  }
  public putSftpSettings(value: GoogleChronicleFeedDetailsSftpSettings) {
    this._sftpSettings.internalValue = value;
  }
  public resetSftpSettings() {
    this._sftpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpSettingsInput() {
    return this._sftpSettings.internalValue;
  }

  // symantec_event_export_settings - computed: false, optional: true, required: false
  private _symantecEventExportSettings = new GoogleChronicleFeedDetailsSymantecEventExportSettingsOutputReference(this, "symantec_event_export_settings");
  public get symantecEventExportSettings() {
    return this._symantecEventExportSettings;
  }
  public putSymantecEventExportSettings(value: GoogleChronicleFeedDetailsSymantecEventExportSettings) {
    this._symantecEventExportSettings.internalValue = value;
  }
  public resetSymantecEventExportSettings() {
    this._symantecEventExportSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symantecEventExportSettingsInput() {
    return this._symantecEventExportSettings.internalValue;
  }

  // thinkst_canary_settings - computed: false, optional: true, required: false
  private _thinkstCanarySettings = new GoogleChronicleFeedDetailsThinkstCanarySettingsOutputReference(this, "thinkst_canary_settings");
  public get thinkstCanarySettings() {
    return this._thinkstCanarySettings;
  }
  public putThinkstCanarySettings(value: GoogleChronicleFeedDetailsThinkstCanarySettings) {
    this._thinkstCanarySettings.internalValue = value;
  }
  public resetThinkstCanarySettings() {
    this._thinkstCanarySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thinkstCanarySettingsInput() {
    return this._thinkstCanarySettings.internalValue;
  }

  // threat_connect_ioc_settings - computed: false, optional: true, required: false
  private _threatConnectIocSettings = new GoogleChronicleFeedDetailsThreatConnectIocSettingsOutputReference(this, "threat_connect_ioc_settings");
  public get threatConnectIocSettings() {
    return this._threatConnectIocSettings;
  }
  public putThreatConnectIocSettings(value: GoogleChronicleFeedDetailsThreatConnectIocSettings) {
    this._threatConnectIocSettings.internalValue = value;
  }
  public resetThreatConnectIocSettings() {
    this._threatConnectIocSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatConnectIocSettingsInput() {
    return this._threatConnectIocSettings.internalValue;
  }

  // threat_connect_ioc_v3_settings - computed: false, optional: true, required: false
  private _threatConnectIocV3Settings = new GoogleChronicleFeedDetailsThreatConnectIocV3SettingsOutputReference(this, "threat_connect_ioc_v3_settings");
  public get threatConnectIocV3Settings() {
    return this._threatConnectIocV3Settings;
  }
  public putThreatConnectIocV3Settings(value: GoogleChronicleFeedDetailsThreatConnectIocV3Settings) {
    this._threatConnectIocV3Settings.internalValue = value;
  }
  public resetThreatConnectIocV3Settings() {
    this._threatConnectIocV3Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatConnectIocV3SettingsInput() {
    return this._threatConnectIocV3Settings.internalValue;
  }

  // trellix_hx_alerts_settings - computed: false, optional: true, required: false
  private _trellixHxAlertsSettings = new GoogleChronicleFeedDetailsTrellixHxAlertsSettingsOutputReference(this, "trellix_hx_alerts_settings");
  public get trellixHxAlertsSettings() {
    return this._trellixHxAlertsSettings;
  }
  public putTrellixHxAlertsSettings(value: GoogleChronicleFeedDetailsTrellixHxAlertsSettings) {
    this._trellixHxAlertsSettings.internalValue = value;
  }
  public resetTrellixHxAlertsSettings() {
    this._trellixHxAlertsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trellixHxAlertsSettingsInput() {
    return this._trellixHxAlertsSettings.internalValue;
  }

  // trellix_hx_bulk_acqs_settings - computed: false, optional: true, required: false
  private _trellixHxBulkAcqsSettings = new GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettingsOutputReference(this, "trellix_hx_bulk_acqs_settings");
  public get trellixHxBulkAcqsSettings() {
    return this._trellixHxBulkAcqsSettings;
  }
  public putTrellixHxBulkAcqsSettings(value: GoogleChronicleFeedDetailsTrellixHxBulkAcqsSettings) {
    this._trellixHxBulkAcqsSettings.internalValue = value;
  }
  public resetTrellixHxBulkAcqsSettings() {
    this._trellixHxBulkAcqsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trellixHxBulkAcqsSettingsInput() {
    return this._trellixHxBulkAcqsSettings.internalValue;
  }

  // trellix_hx_hosts_settings - computed: false, optional: true, required: false
  private _trellixHxHostsSettings = new GoogleChronicleFeedDetailsTrellixHxHostsSettingsOutputReference(this, "trellix_hx_hosts_settings");
  public get trellixHxHostsSettings() {
    return this._trellixHxHostsSettings;
  }
  public putTrellixHxHostsSettings(value: GoogleChronicleFeedDetailsTrellixHxHostsSettings) {
    this._trellixHxHostsSettings.internalValue = value;
  }
  public resetTrellixHxHostsSettings() {
    this._trellixHxHostsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trellixHxHostsSettingsInput() {
    return this._trellixHxHostsSettings.internalValue;
  }

  // webhook_settings - computed: false, optional: true, required: false
  private _webhookSettings = new GoogleChronicleFeedDetailsWebhookSettingsOutputReference(this, "webhook_settings");
  public get webhookSettings() {
    return this._webhookSettings;
  }
  public putWebhookSettings(value: GoogleChronicleFeedDetailsWebhookSettings) {
    this._webhookSettings.internalValue = value;
  }
  public resetWebhookSettings() {
    this._webhookSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSettingsInput() {
    return this._webhookSettings.internalValue;
  }

  // workday_settings - computed: false, optional: true, required: false
  private _workdaySettings = new GoogleChronicleFeedDetailsWorkdaySettingsOutputReference(this, "workday_settings");
  public get workdaySettings() {
    return this._workdaySettings;
  }
  public putWorkdaySettings(value: GoogleChronicleFeedDetailsWorkdaySettings) {
    this._workdaySettings.internalValue = value;
  }
  public resetWorkdaySettings() {
    this._workdaySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workdaySettingsInput() {
    return this._workdaySettings.internalValue;
  }

  // workspace_activity_settings - computed: false, optional: true, required: false
  private _workspaceActivitySettings = new GoogleChronicleFeedDetailsWorkspaceActivitySettingsOutputReference(this, "workspace_activity_settings");
  public get workspaceActivitySettings() {
    return this._workspaceActivitySettings;
  }
  public putWorkspaceActivitySettings(value: GoogleChronicleFeedDetailsWorkspaceActivitySettings) {
    this._workspaceActivitySettings.internalValue = value;
  }
  public resetWorkspaceActivitySettings() {
    this._workspaceActivitySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceActivitySettingsInput() {
    return this._workspaceActivitySettings.internalValue;
  }

  // workspace_alerts_settings - computed: false, optional: true, required: false
  private _workspaceAlertsSettings = new GoogleChronicleFeedDetailsWorkspaceAlertsSettingsOutputReference(this, "workspace_alerts_settings");
  public get workspaceAlertsSettings() {
    return this._workspaceAlertsSettings;
  }
  public putWorkspaceAlertsSettings(value: GoogleChronicleFeedDetailsWorkspaceAlertsSettings) {
    this._workspaceAlertsSettings.internalValue = value;
  }
  public resetWorkspaceAlertsSettings() {
    this._workspaceAlertsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceAlertsSettingsInput() {
    return this._workspaceAlertsSettings.internalValue;
  }

  // workspace_chrome_os_settings - computed: false, optional: true, required: false
  private _workspaceChromeOsSettings = new GoogleChronicleFeedDetailsWorkspaceChromeOsSettingsOutputReference(this, "workspace_chrome_os_settings");
  public get workspaceChromeOsSettings() {
    return this._workspaceChromeOsSettings;
  }
  public putWorkspaceChromeOsSettings(value: GoogleChronicleFeedDetailsWorkspaceChromeOsSettings) {
    this._workspaceChromeOsSettings.internalValue = value;
  }
  public resetWorkspaceChromeOsSettings() {
    this._workspaceChromeOsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceChromeOsSettingsInput() {
    return this._workspaceChromeOsSettings.internalValue;
  }

  // workspace_groups_settings - computed: false, optional: true, required: false
  private _workspaceGroupsSettings = new GoogleChronicleFeedDetailsWorkspaceGroupsSettingsOutputReference(this, "workspace_groups_settings");
  public get workspaceGroupsSettings() {
    return this._workspaceGroupsSettings;
  }
  public putWorkspaceGroupsSettings(value: GoogleChronicleFeedDetailsWorkspaceGroupsSettings) {
    this._workspaceGroupsSettings.internalValue = value;
  }
  public resetWorkspaceGroupsSettings() {
    this._workspaceGroupsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceGroupsSettingsInput() {
    return this._workspaceGroupsSettings.internalValue;
  }

  // workspace_mobile_settings - computed: false, optional: true, required: false
  private _workspaceMobileSettings = new GoogleChronicleFeedDetailsWorkspaceMobileSettingsOutputReference(this, "workspace_mobile_settings");
  public get workspaceMobileSettings() {
    return this._workspaceMobileSettings;
  }
  public putWorkspaceMobileSettings(value: GoogleChronicleFeedDetailsWorkspaceMobileSettings) {
    this._workspaceMobileSettings.internalValue = value;
  }
  public resetWorkspaceMobileSettings() {
    this._workspaceMobileSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceMobileSettingsInput() {
    return this._workspaceMobileSettings.internalValue;
  }

  // workspace_privileges_settings - computed: false, optional: true, required: false
  private _workspacePrivilegesSettings = new GoogleChronicleFeedDetailsWorkspacePrivilegesSettingsOutputReference(this, "workspace_privileges_settings");
  public get workspacePrivilegesSettings() {
    return this._workspacePrivilegesSettings;
  }
  public putWorkspacePrivilegesSettings(value: GoogleChronicleFeedDetailsWorkspacePrivilegesSettings) {
    this._workspacePrivilegesSettings.internalValue = value;
  }
  public resetWorkspacePrivilegesSettings() {
    this._workspacePrivilegesSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspacePrivilegesSettingsInput() {
    return this._workspacePrivilegesSettings.internalValue;
  }

  // workspace_users_settings - computed: false, optional: true, required: false
  private _workspaceUsersSettings = new GoogleChronicleFeedDetailsWorkspaceUsersSettingsOutputReference(this, "workspace_users_settings");
  public get workspaceUsersSettings() {
    return this._workspaceUsersSettings;
  }
  public putWorkspaceUsersSettings(value: GoogleChronicleFeedDetailsWorkspaceUsersSettings) {
    this._workspaceUsersSettings.internalValue = value;
  }
  public resetWorkspaceUsersSettings() {
    this._workspaceUsersSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceUsersSettingsInput() {
    return this._workspaceUsersSettings.internalValue;
  }
}
export interface GoogleChronicleFeedFailureDetails {
}

export function googleChronicleFeedFailureDetailsToTerraform(struct?: GoogleChronicleFeedFailureDetailsOutputReference | GoogleChronicleFeedFailureDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleChronicleFeedFailureDetailsToHclTerraform(struct?: GoogleChronicleFeedFailureDetailsOutputReference | GoogleChronicleFeedFailureDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleChronicleFeedFailureDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleFeedFailureDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFeedFailureDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_action - computed: true, optional: false, required: false
  public get errorAction() {
    return this.getStringAttribute('error_action');
  }

  // error_cause - computed: true, optional: false, required: false
  public get errorCause() {
    return this.getStringAttribute('error_cause');
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // http_error_code - computed: true, optional: false, required: false
  public get httpErrorCode() {
    return this.getNumberAttribute('http_error_code');
  }
}
export interface GoogleChronicleFeedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#create GoogleChronicleFeed#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#delete GoogleChronicleFeed#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_feed#update GoogleChronicleFeed#update}
  */
  readonly update?: string;
}

export function googleChronicleFeedTimeoutsToTerraform(struct?: GoogleChronicleFeedTimeouts | cdktf.IResolvable): any {
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


export function googleChronicleFeedTimeoutsToHclTerraform(struct?: GoogleChronicleFeedTimeouts | cdktf.IResolvable): any {
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

export class GoogleChronicleFeedTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleChronicleFeedTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleChronicleFeedTimeouts | cdktf.IResolvable | undefined) {
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
