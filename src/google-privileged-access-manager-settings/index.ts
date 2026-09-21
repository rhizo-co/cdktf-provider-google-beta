// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GooglePrivilegedAccessManagerSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#id GooglePrivilegedAccessManagerSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The region of the PAM settings resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#location GooglePrivilegedAccessManagerSettings#location}
  */
  readonly location: string;
  /**
  * Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#parent GooglePrivilegedAccessManagerSettings#parent}
  */
  readonly parent: string;
  /**
  * email_notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#email_notification_settings GooglePrivilegedAccessManagerSettings#email_notification_settings}
  */
  readonly emailNotificationSettings?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettings;
  /**
  * service_account_approver_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#service_account_approver_settings GooglePrivilegedAccessManagerSettings#service_account_approver_settings}
  */
  readonly serviceAccountApproverSettings?: GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#timeouts GooglePrivilegedAccessManagerSettings#timeouts}
  */
  readonly timeouts?: GooglePrivilegedAccessManagerSettingsTimeouts;
}
export interface GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications {
  /**
  * Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#grant_activated GooglePrivilegedAccessManagerSettings#grant_activated}
  */
  readonly grantActivated?: string;
  /**
  * Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#grant_activation_failed GooglePrivilegedAccessManagerSettings#grant_activation_failed}
  */
  readonly grantActivationFailed?: string;
  /**
  * Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#grant_ended GooglePrivilegedAccessManagerSettings#grant_ended}
  */
  readonly grantEnded?: string;
  /**
  * Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#grant_externally_modified GooglePrivilegedAccessManagerSettings#grant_externally_modified}
  */
  readonly grantExternallyModified?: string;
}

export function googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsToTerraform(struct?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference | GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grant_activated: cdktf.stringToTerraform(struct!.grantActivated),
    grant_activation_failed: cdktf.stringToTerraform(struct!.grantActivationFailed),
    grant_ended: cdktf.stringToTerraform(struct!.grantEnded),
    grant_externally_modified: cdktf.stringToTerraform(struct!.grantExternallyModified),
  }
}


export function googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsToHclTerraform(struct?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference | GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grant_activated: {
      value: cdktf.stringToHclTerraform(struct!.grantActivated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_activation_failed: {
      value: cdktf.stringToHclTerraform(struct!.grantActivationFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_ended: {
      value: cdktf.stringToHclTerraform(struct!.grantEnded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_externally_modified: {
      value: cdktf.stringToHclTerraform(struct!.grantExternallyModified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grantActivated !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantActivated = this._grantActivated;
    }
    if (this._grantActivationFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantActivationFailed = this._grantActivationFailed;
    }
    if (this._grantEnded !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantEnded = this._grantEnded;
    }
    if (this._grantExternallyModified !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantExternallyModified = this._grantExternallyModified;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grantActivated = undefined;
      this._grantActivationFailed = undefined;
      this._grantEnded = undefined;
      this._grantExternallyModified = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grantActivated = value.grantActivated;
      this._grantActivationFailed = value.grantActivationFailed;
      this._grantEnded = value.grantEnded;
      this._grantExternallyModified = value.grantExternallyModified;
    }
  }

  // grant_activated - computed: true, optional: true, required: false
  private _grantActivated?: string; 
  public get grantActivated() {
    return this.getStringAttribute('grant_activated');
  }
  public set grantActivated(value: string) {
    this._grantActivated = value;
  }
  public resetGrantActivated() {
    this._grantActivated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantActivatedInput() {
    return this._grantActivated;
  }

  // grant_activation_failed - computed: true, optional: true, required: false
  private _grantActivationFailed?: string; 
  public get grantActivationFailed() {
    return this.getStringAttribute('grant_activation_failed');
  }
  public set grantActivationFailed(value: string) {
    this._grantActivationFailed = value;
  }
  public resetGrantActivationFailed() {
    this._grantActivationFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantActivationFailedInput() {
    return this._grantActivationFailed;
  }

  // grant_ended - computed: true, optional: true, required: false
  private _grantEnded?: string; 
  public get grantEnded() {
    return this.getStringAttribute('grant_ended');
  }
  public set grantEnded(value: string) {
    this._grantEnded = value;
  }
  public resetGrantEnded() {
    this._grantEnded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantEndedInput() {
    return this._grantEnded;
  }

  // grant_externally_modified - computed: true, optional: true, required: false
  private _grantExternallyModified?: string; 
  public get grantExternallyModified() {
    return this.getStringAttribute('grant_externally_modified');
  }
  public set grantExternallyModified(value: string) {
    this._grantExternallyModified = value;
  }
  public resetGrantExternallyModified() {
    this._grantExternallyModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantExternallyModifiedInput() {
    return this._grantExternallyModified;
  }
}
export interface GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications {
  /**
  * Notification mode for pending approval. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#pending_approval GooglePrivilegedAccessManagerSettings#pending_approval}
  */
  readonly pendingApproval?: string;
}

export function googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsToTerraform(struct?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference | GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pending_approval: cdktf.stringToTerraform(struct!.pendingApproval),
  }
}


export function googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsToHclTerraform(struct?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference | GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pending_approval: {
      value: cdktf.stringToHclTerraform(struct!.pendingApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pendingApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingApproval = this._pendingApproval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pendingApproval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pendingApproval = value.pendingApproval;
    }
  }

  // pending_approval - computed: true, optional: true, required: false
  private _pendingApproval?: string; 
  public get pendingApproval() {
    return this.getStringAttribute('pending_approval');
  }
  public set pendingApproval(value: string) {
    this._pendingApproval = value;
  }
  public resetPendingApproval() {
    this._pendingApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingApprovalInput() {
    return this._pendingApproval;
  }
}
export interface GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications {
  /**
  * Notification mode for entitlement assigned. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#entitlement_assigned GooglePrivilegedAccessManagerSettings#entitlement_assigned}
  */
  readonly entitlementAssigned?: string;
  /**
  * Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#grant_activated GooglePrivilegedAccessManagerSettings#grant_activated}
  */
  readonly grantActivated?: string;
  /**
  * Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#grant_activation_failed GooglePrivilegedAccessManagerSettings#grant_activation_failed}
  */
  readonly grantActivationFailed?: string;
  /**
  * Notification mode for grant denied. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#grant_denied GooglePrivilegedAccessManagerSettings#grant_denied}
  */
  readonly grantDenied?: string;
  /**
  * Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#grant_ended GooglePrivilegedAccessManagerSettings#grant_ended}
  */
  readonly grantEnded?: string;
  /**
  * Notification mode for grant expired. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#grant_expired GooglePrivilegedAccessManagerSettings#grant_expired}
  */
  readonly grantExpired?: string;
  /**
  * Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#grant_externally_modified GooglePrivilegedAccessManagerSettings#grant_externally_modified}
  */
  readonly grantExternallyModified?: string;
  /**
  * Notification mode for grant revoked. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#grant_revoked GooglePrivilegedAccessManagerSettings#grant_revoked}
  */
  readonly grantRevoked?: string;
}

export function googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsToTerraform(struct?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference | GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entitlement_assigned: cdktf.stringToTerraform(struct!.entitlementAssigned),
    grant_activated: cdktf.stringToTerraform(struct!.grantActivated),
    grant_activation_failed: cdktf.stringToTerraform(struct!.grantActivationFailed),
    grant_denied: cdktf.stringToTerraform(struct!.grantDenied),
    grant_ended: cdktf.stringToTerraform(struct!.grantEnded),
    grant_expired: cdktf.stringToTerraform(struct!.grantExpired),
    grant_externally_modified: cdktf.stringToTerraform(struct!.grantExternallyModified),
    grant_revoked: cdktf.stringToTerraform(struct!.grantRevoked),
  }
}


export function googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsToHclTerraform(struct?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference | GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entitlement_assigned: {
      value: cdktf.stringToHclTerraform(struct!.entitlementAssigned),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_activated: {
      value: cdktf.stringToHclTerraform(struct!.grantActivated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_activation_failed: {
      value: cdktf.stringToHclTerraform(struct!.grantActivationFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_denied: {
      value: cdktf.stringToHclTerraform(struct!.grantDenied),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_ended: {
      value: cdktf.stringToHclTerraform(struct!.grantEnded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_expired: {
      value: cdktf.stringToHclTerraform(struct!.grantExpired),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_externally_modified: {
      value: cdktf.stringToHclTerraform(struct!.grantExternallyModified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_revoked: {
      value: cdktf.stringToHclTerraform(struct!.grantRevoked),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entitlementAssigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitlementAssigned = this._entitlementAssigned;
    }
    if (this._grantActivated !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantActivated = this._grantActivated;
    }
    if (this._grantActivationFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantActivationFailed = this._grantActivationFailed;
    }
    if (this._grantDenied !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantDenied = this._grantDenied;
    }
    if (this._grantEnded !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantEnded = this._grantEnded;
    }
    if (this._grantExpired !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantExpired = this._grantExpired;
    }
    if (this._grantExternallyModified !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantExternallyModified = this._grantExternallyModified;
    }
    if (this._grantRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantRevoked = this._grantRevoked;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entitlementAssigned = undefined;
      this._grantActivated = undefined;
      this._grantActivationFailed = undefined;
      this._grantDenied = undefined;
      this._grantEnded = undefined;
      this._grantExpired = undefined;
      this._grantExternallyModified = undefined;
      this._grantRevoked = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entitlementAssigned = value.entitlementAssigned;
      this._grantActivated = value.grantActivated;
      this._grantActivationFailed = value.grantActivationFailed;
      this._grantDenied = value.grantDenied;
      this._grantEnded = value.grantEnded;
      this._grantExpired = value.grantExpired;
      this._grantExternallyModified = value.grantExternallyModified;
      this._grantRevoked = value.grantRevoked;
    }
  }

  // entitlement_assigned - computed: true, optional: true, required: false
  private _entitlementAssigned?: string; 
  public get entitlementAssigned() {
    return this.getStringAttribute('entitlement_assigned');
  }
  public set entitlementAssigned(value: string) {
    this._entitlementAssigned = value;
  }
  public resetEntitlementAssigned() {
    this._entitlementAssigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementAssignedInput() {
    return this._entitlementAssigned;
  }

  // grant_activated - computed: true, optional: true, required: false
  private _grantActivated?: string; 
  public get grantActivated() {
    return this.getStringAttribute('grant_activated');
  }
  public set grantActivated(value: string) {
    this._grantActivated = value;
  }
  public resetGrantActivated() {
    this._grantActivated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantActivatedInput() {
    return this._grantActivated;
  }

  // grant_activation_failed - computed: true, optional: true, required: false
  private _grantActivationFailed?: string; 
  public get grantActivationFailed() {
    return this.getStringAttribute('grant_activation_failed');
  }
  public set grantActivationFailed(value: string) {
    this._grantActivationFailed = value;
  }
  public resetGrantActivationFailed() {
    this._grantActivationFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantActivationFailedInput() {
    return this._grantActivationFailed;
  }

  // grant_denied - computed: true, optional: true, required: false
  private _grantDenied?: string; 
  public get grantDenied() {
    return this.getStringAttribute('grant_denied');
  }
  public set grantDenied(value: string) {
    this._grantDenied = value;
  }
  public resetGrantDenied() {
    this._grantDenied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantDeniedInput() {
    return this._grantDenied;
  }

  // grant_ended - computed: true, optional: true, required: false
  private _grantEnded?: string; 
  public get grantEnded() {
    return this.getStringAttribute('grant_ended');
  }
  public set grantEnded(value: string) {
    this._grantEnded = value;
  }
  public resetGrantEnded() {
    this._grantEnded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantEndedInput() {
    return this._grantEnded;
  }

  // grant_expired - computed: true, optional: true, required: false
  private _grantExpired?: string; 
  public get grantExpired() {
    return this.getStringAttribute('grant_expired');
  }
  public set grantExpired(value: string) {
    this._grantExpired = value;
  }
  public resetGrantExpired() {
    this._grantExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantExpiredInput() {
    return this._grantExpired;
  }

  // grant_externally_modified - computed: true, optional: true, required: false
  private _grantExternallyModified?: string; 
  public get grantExternallyModified() {
    return this.getStringAttribute('grant_externally_modified');
  }
  public set grantExternallyModified(value: string) {
    this._grantExternallyModified = value;
  }
  public resetGrantExternallyModified() {
    this._grantExternallyModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantExternallyModifiedInput() {
    return this._grantExternallyModified;
  }

  // grant_revoked - computed: true, optional: true, required: false
  private _grantRevoked?: string; 
  public get grantRevoked() {
    return this.getStringAttribute('grant_revoked');
  }
  public set grantRevoked(value: string) {
    this._grantRevoked = value;
  }
  public resetGrantRevoked() {
    this._grantRevoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantRevokedInput() {
    return this._grantRevoked;
  }
}
export interface GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior {
  /**
  * admin_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#admin_notifications GooglePrivilegedAccessManagerSettings#admin_notifications}
  */
  readonly adminNotifications?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications;
  /**
  * approver_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#approver_notifications GooglePrivilegedAccessManagerSettings#approver_notifications}
  */
  readonly approverNotifications?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications;
  /**
  * requester_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#requester_notifications GooglePrivilegedAccessManagerSettings#requester_notifications}
  */
  readonly requesterNotifications?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications;
}

export function googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorToTerraform(struct?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference | GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_notifications: googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsToTerraform(struct!.adminNotifications),
    approver_notifications: googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsToTerraform(struct!.approverNotifications),
    requester_notifications: googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsToTerraform(struct!.requesterNotifications),
  }
}


export function googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorToHclTerraform(struct?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference | GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_notifications: {
      value: googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsToHclTerraform(struct!.adminNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsList",
    },
    approver_notifications: {
      value: googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsToHclTerraform(struct!.approverNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsList",
    },
    requester_notifications: {
      value: googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsToHclTerraform(struct!.requesterNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminNotifications = this._adminNotifications?.internalValue;
    }
    if (this._approverNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approverNotifications = this._approverNotifications?.internalValue;
    }
    if (this._requesterNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requesterNotifications = this._requesterNotifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminNotifications.internalValue = undefined;
      this._approverNotifications.internalValue = undefined;
      this._requesterNotifications.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminNotifications.internalValue = value.adminNotifications;
      this._approverNotifications.internalValue = value.approverNotifications;
      this._requesterNotifications.internalValue = value.requesterNotifications;
    }
  }

  // admin_notifications - computed: false, optional: true, required: false
  private _adminNotifications = new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference(this, "admin_notifications");
  public get adminNotifications() {
    return this._adminNotifications;
  }
  public putAdminNotifications(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications) {
    this._adminNotifications.internalValue = value;
  }
  public resetAdminNotifications() {
    this._adminNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNotificationsInput() {
    return this._adminNotifications.internalValue;
  }

  // approver_notifications - computed: false, optional: true, required: false
  private _approverNotifications = new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference(this, "approver_notifications");
  public get approverNotifications() {
    return this._approverNotifications;
  }
  public putApproverNotifications(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications) {
    this._approverNotifications.internalValue = value;
  }
  public resetApproverNotifications() {
    this._approverNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approverNotificationsInput() {
    return this._approverNotifications.internalValue;
  }

  // requester_notifications - computed: false, optional: true, required: false
  private _requesterNotifications = new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference(this, "requester_notifications");
  public get requesterNotifications() {
    return this._requesterNotifications;
  }
  public putRequesterNotifications(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications) {
    this._requesterNotifications.internalValue = value;
  }
  public resetRequesterNotifications() {
    this._requesterNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterNotificationsInput() {
    return this._requesterNotifications.internalValue;
  }
}
export interface GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications {
}

export function googlePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsToTerraform(struct?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference | GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googlePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsToHclTerraform(struct?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference | GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GooglePrivilegedAccessManagerSettingsEmailNotificationSettings {
  /**
  * custom_notification_behavior block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#custom_notification_behavior GooglePrivilegedAccessManagerSettings#custom_notification_behavior}
  */
  readonly customNotificationBehavior?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior;
  /**
  * disable_all_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#disable_all_notifications GooglePrivilegedAccessManagerSettings#disable_all_notifications}
  */
  readonly disableAllNotifications?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications;
}

export function googlePrivilegedAccessManagerSettingsEmailNotificationSettingsToTerraform(struct?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference | GooglePrivilegedAccessManagerSettingsEmailNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_notification_behavior: googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorToTerraform(struct!.customNotificationBehavior),
    disable_all_notifications: googlePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsToTerraform(struct!.disableAllNotifications),
  }
}


export function googlePrivilegedAccessManagerSettingsEmailNotificationSettingsToHclTerraform(struct?: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference | GooglePrivilegedAccessManagerSettingsEmailNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_notification_behavior: {
      value: googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorToHclTerraform(struct!.customNotificationBehavior),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorList",
    },
    disable_all_notifications: {
      value: googlePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsToHclTerraform(struct!.disableAllNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivilegedAccessManagerSettingsEmailNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customNotificationBehavior?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNotificationBehavior = this._customNotificationBehavior?.internalValue;
    }
    if (this._disableAllNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAllNotifications = this._disableAllNotifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customNotificationBehavior.internalValue = undefined;
      this._disableAllNotifications.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customNotificationBehavior.internalValue = value.customNotificationBehavior;
      this._disableAllNotifications.internalValue = value.disableAllNotifications;
    }
  }

  // custom_notification_behavior - computed: false, optional: true, required: false
  private _customNotificationBehavior = new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference(this, "custom_notification_behavior");
  public get customNotificationBehavior() {
    return this._customNotificationBehavior;
  }
  public putCustomNotificationBehavior(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior) {
    this._customNotificationBehavior.internalValue = value;
  }
  public resetCustomNotificationBehavior() {
    this._customNotificationBehavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNotificationBehaviorInput() {
    return this._customNotificationBehavior.internalValue;
  }

  // disable_all_notifications - computed: false, optional: true, required: false
  private _disableAllNotifications = new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference(this, "disable_all_notifications");
  public get disableAllNotifications() {
    return this._disableAllNotifications;
  }
  public putDisableAllNotifications(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications) {
    this._disableAllNotifications.internalValue = value;
  }
  public resetDisableAllNotifications() {
    this._disableAllNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAllNotificationsInput() {
    return this._disableAllNotifications.internalValue;
  }
}
export interface GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings {
  /**
  * Indicates whether service account is allowed to grant approvals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#enabled GooglePrivilegedAccessManagerSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function googlePrivilegedAccessManagerSettingsServiceAccountApproverSettingsToTerraform(struct?: GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference | GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googlePrivilegedAccessManagerSettingsServiceAccountApproverSettingsToHclTerraform(struct?: GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference | GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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
}
export interface GooglePrivilegedAccessManagerSettingsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#create GooglePrivilegedAccessManagerSettings#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#delete GooglePrivilegedAccessManagerSettings#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#update GooglePrivilegedAccessManagerSettings#update}
  */
  readonly update?: string;
}

export function googlePrivilegedAccessManagerSettingsTimeoutsToTerraform(struct?: GooglePrivilegedAccessManagerSettingsTimeouts | cdktf.IResolvable): any {
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


export function googlePrivilegedAccessManagerSettingsTimeoutsToHclTerraform(struct?: GooglePrivilegedAccessManagerSettingsTimeouts | cdktf.IResolvable): any {
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

export class GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GooglePrivilegedAccessManagerSettingsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GooglePrivilegedAccessManagerSettingsTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings google_privileged_access_manager_settings}
*/
export class GooglePrivilegedAccessManagerSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_privileged_access_manager_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GooglePrivilegedAccessManagerSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GooglePrivilegedAccessManagerSettings to import
  * @param importFromId The id of the existing GooglePrivilegedAccessManagerSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GooglePrivilegedAccessManagerSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_privileged_access_manager_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_privileged_access_manager_settings google_privileged_access_manager_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GooglePrivilegedAccessManagerSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: GooglePrivilegedAccessManagerSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_privileged_access_manager_settings',
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
    this._id = config.id;
    this._location = config.location;
    this._parent = config.parent;
    this._emailNotificationSettings.internalValue = config.emailNotificationSettings;
    this._serviceAccountApproverSettings.internalValue = config.serviceAccountApproverSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // email_notification_settings - computed: false, optional: true, required: false
  private _emailNotificationSettings = new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference(this, "email_notification_settings");
  public get emailNotificationSettings() {
    return this._emailNotificationSettings;
  }
  public putEmailNotificationSettings(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettings) {
    this._emailNotificationSettings.internalValue = value;
  }
  public resetEmailNotificationSettings() {
    this._emailNotificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailNotificationSettingsInput() {
    return this._emailNotificationSettings.internalValue;
  }

  // service_account_approver_settings - computed: false, optional: true, required: false
  private _serviceAccountApproverSettings = new GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference(this, "service_account_approver_settings");
  public get serviceAccountApproverSettings() {
    return this._serviceAccountApproverSettings;
  }
  public putServiceAccountApproverSettings(value: GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings) {
    this._serviceAccountApproverSettings.internalValue = value;
  }
  public resetServiceAccountApproverSettings() {
    this._serviceAccountApproverSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountApproverSettingsInput() {
    return this._serviceAccountApproverSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GooglePrivilegedAccessManagerSettingsTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      parent: cdktf.stringToTerraform(this._parent),
      email_notification_settings: googlePrivilegedAccessManagerSettingsEmailNotificationSettingsToTerraform(this._emailNotificationSettings.internalValue),
      service_account_approver_settings: googlePrivilegedAccessManagerSettingsServiceAccountApproverSettingsToTerraform(this._serviceAccountApproverSettings.internalValue),
      timeouts: googlePrivilegedAccessManagerSettingsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_notification_settings: {
        value: googlePrivilegedAccessManagerSettingsEmailNotificationSettingsToHclTerraform(this._emailNotificationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsList",
      },
      service_account_approver_settings: {
        value: googlePrivilegedAccessManagerSettingsServiceAccountApproverSettingsToHclTerraform(this._serviceAccountApproverSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsList",
      },
      timeouts: {
        value: googlePrivilegedAccessManagerSettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GooglePrivilegedAccessManagerSettingsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
