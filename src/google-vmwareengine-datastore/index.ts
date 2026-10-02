// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleVmwareengineDatastoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#deletion_policy GoogleVmwareengineDatastore#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * User-provided description for this datastore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#description GoogleVmwareengineDatastore#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#id GoogleVmwareengineDatastore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#location GoogleVmwareengineDatastore#location}
  */
  readonly location: string;
  /**
  * The user-provided identifier of the datastore to be created.
  * This identifier must be unique among each 'Datastore' within the parent
  * and becomes the final token in the name URI.
  * The identifier must meet the following requirements:
  * 
  * * Only contains 1-63 alphanumeric characters and hyphens
  * * Begins with an alphabetical character
  * * Ends with a non-hyphen character
  * * Not formatted as a UUID
  * * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
  * (section 3.5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#name GoogleVmwareengineDatastore#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#project GoogleVmwareengineDatastore#project}
  */
  readonly project?: string;
  /**
  * nfs_datastore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#nfs_datastore GoogleVmwareengineDatastore#nfs_datastore}
  */
  readonly nfsDatastore: GoogleVmwareengineDatastoreNfsDatastore;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#timeouts GoogleVmwareengineDatastore#timeouts}
  */
  readonly timeouts?: GoogleVmwareengineDatastoreTimeouts;
}
export interface GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService {
  /**
  * Google filestore instance resource name
  * e.g. projects/my-project/locations/me-west1-b/instances/my-instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#filestore_instance GoogleVmwareengineDatastore#filestore_instance}
  */
  readonly filestoreInstance?: string;
  /**
  * Google netapp volume resource name
  * e.g. projects/my-project/locations/me-west1-b/volumes/my-volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#netapp_volume GoogleVmwareengineDatastore#netapp_volume}
  */
  readonly netappVolume?: string;
}

export function googleVmwareengineDatastoreNfsDatastoreGoogleFileServiceToTerraform(struct?: GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference | GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filestore_instance: cdktf.stringToTerraform(struct!.filestoreInstance),
    netapp_volume: cdktf.stringToTerraform(struct!.netappVolume),
  }
}


export function googleVmwareengineDatastoreNfsDatastoreGoogleFileServiceToHclTerraform(struct?: GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference | GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filestore_instance: {
      value: cdktf.stringToHclTerraform(struct!.filestoreInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netapp_volume: {
      value: cdktf.stringToHclTerraform(struct!.netappVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filestoreInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.filestoreInstance = this._filestoreInstance;
    }
    if (this._netappVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.netappVolume = this._netappVolume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filestoreInstance = undefined;
      this._netappVolume = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filestoreInstance = value.filestoreInstance;
      this._netappVolume = value.netappVolume;
    }
  }

  // filestore_instance - computed: false, optional: true, required: false
  private _filestoreInstance?: string; 
  public get filestoreInstance() {
    return this.getStringAttribute('filestore_instance');
  }
  public set filestoreInstance(value: string) {
    this._filestoreInstance = value;
  }
  public resetFilestoreInstance() {
    this._filestoreInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filestoreInstanceInput() {
    return this._filestoreInstance;
  }

  // netapp_volume - computed: false, optional: true, required: false
  private _netappVolume?: string; 
  public get netappVolume() {
    return this.getStringAttribute('netapp_volume');
  }
  public set netappVolume(value: string) {
    this._netappVolume = value;
  }
  public resetNetappVolume() {
    this._netappVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netappVolumeInput() {
    return this._netappVolume;
  }
}
export interface GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService {
  /**
  * Required
  * Mount Folder name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#file_share GoogleVmwareengineDatastore#file_share}
  */
  readonly fileShare: string;
  /**
  * Required to identify vpc peering used for NFS access
  * network name of NFS's vpc
  * e.g. projects/project-id/global/networks/my-network_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#network GoogleVmwareengineDatastore#network}
  */
  readonly network: string;
  /**
  * Server IP addresses of the NFS file service.
  * NFS v3, provide a single IP address or DNS name.
  * Multiple servers can be supported in future when NFS 4.1 protocol support
  * is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#servers GoogleVmwareengineDatastore#servers}
  */
  readonly servers: string[];
}

export function googleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceToTerraform(struct?: GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference | GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_share: cdktf.stringToTerraform(struct!.fileShare),
    network: cdktf.stringToTerraform(struct!.network),
    servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servers),
  }
}


export function googleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceToHclTerraform(struct?: GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference | GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_share: {
      value: cdktf.stringToHclTerraform(struct!.fileShare),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileShare !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileShare = this._fileShare;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileShare = undefined;
      this._network = undefined;
      this._servers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileShare = value.fileShare;
      this._network = value.network;
      this._servers = value.servers;
    }
  }

  // file_share - computed: false, optional: false, required: true
  private _fileShare?: string; 
  public get fileShare() {
    return this.getStringAttribute('file_share');
  }
  public set fileShare(value: string) {
    this._fileShare = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileShareInput() {
    return this._fileShare;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // servers - computed: false, optional: false, required: true
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }
}
export interface GoogleVmwareengineDatastoreNfsDatastore {
  /**
  * google_file_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#google_file_service GoogleVmwareengineDatastore#google_file_service}
  */
  readonly googleFileService?: GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService;
  /**
  * third_party_file_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#third_party_file_service GoogleVmwareengineDatastore#third_party_file_service}
  */
  readonly thirdPartyFileService?: GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService;
}

export function googleVmwareengineDatastoreNfsDatastoreToTerraform(struct?: GoogleVmwareengineDatastoreNfsDatastoreOutputReference | GoogleVmwareengineDatastoreNfsDatastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_file_service: googleVmwareengineDatastoreNfsDatastoreGoogleFileServiceToTerraform(struct!.googleFileService),
    third_party_file_service: googleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceToTerraform(struct!.thirdPartyFileService),
  }
}


export function googleVmwareengineDatastoreNfsDatastoreToHclTerraform(struct?: GoogleVmwareengineDatastoreNfsDatastoreOutputReference | GoogleVmwareengineDatastoreNfsDatastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    google_file_service: {
      value: googleVmwareengineDatastoreNfsDatastoreGoogleFileServiceToHclTerraform(struct!.googleFileService),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList",
    },
    third_party_file_service: {
      value: googleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceToHclTerraform(struct!.thirdPartyFileService),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVmwareengineDatastoreNfsDatastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVmwareengineDatastoreNfsDatastore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._googleFileService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleFileService = this._googleFileService?.internalValue;
    }
    if (this._thirdPartyFileService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPartyFileService = this._thirdPartyFileService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVmwareengineDatastoreNfsDatastore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._googleFileService.internalValue = undefined;
      this._thirdPartyFileService.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._googleFileService.internalValue = value.googleFileService;
      this._thirdPartyFileService.internalValue = value.thirdPartyFileService;
    }
  }

  // google_file_service - computed: false, optional: true, required: false
  private _googleFileService = new GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference(this, "google_file_service");
  public get googleFileService() {
    return this._googleFileService;
  }
  public putGoogleFileService(value: GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService) {
    this._googleFileService.internalValue = value;
  }
  public resetGoogleFileService() {
    this._googleFileService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleFileServiceInput() {
    return this._googleFileService.internalValue;
  }

  // third_party_file_service - computed: false, optional: true, required: false
  private _thirdPartyFileService = new GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference(this, "third_party_file_service");
  public get thirdPartyFileService() {
    return this._thirdPartyFileService;
  }
  public putThirdPartyFileService(value: GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService) {
    this._thirdPartyFileService.internalValue = value;
  }
  public resetThirdPartyFileService() {
    this._thirdPartyFileService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyFileServiceInput() {
    return this._thirdPartyFileService.internalValue;
  }
}
export interface GoogleVmwareengineDatastoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#create GoogleVmwareengineDatastore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#delete GoogleVmwareengineDatastore#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#update GoogleVmwareengineDatastore#update}
  */
  readonly update?: string;
}

export function googleVmwareengineDatastoreTimeoutsToTerraform(struct?: GoogleVmwareengineDatastoreTimeouts | cdktf.IResolvable): any {
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


export function googleVmwareengineDatastoreTimeoutsToHclTerraform(struct?: GoogleVmwareengineDatastoreTimeouts | cdktf.IResolvable): any {
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

export class GoogleVmwareengineDatastoreTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleVmwareengineDatastoreTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleVmwareengineDatastoreTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore google_vmwareengine_datastore}
*/
export class GoogleVmwareengineDatastore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vmwareengine_datastore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleVmwareengineDatastore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleVmwareengineDatastore to import
  * @param importFromId The id of the existing GoogleVmwareengineDatastore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleVmwareengineDatastore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vmwareengine_datastore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vmwareengine_datastore google_vmwareengine_datastore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVmwareengineDatastoreConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleVmwareengineDatastoreConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vmwareengine_datastore',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '7.46.1',
        providerVersionConstraint: '~> 7.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._nfsDatastore.internalValue = config.nfsDatastore;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clusters - computed: true, optional: false, required: false
  public get clusters() {
    return this.getListAttribute('clusters');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // nfs_datastore - computed: false, optional: false, required: true
  private _nfsDatastore = new GoogleVmwareengineDatastoreNfsDatastoreOutputReference(this, "nfs_datastore");
  public get nfsDatastore() {
    return this._nfsDatastore;
  }
  public putNfsDatastore(value: GoogleVmwareengineDatastoreNfsDatastore) {
    this._nfsDatastore.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsDatastoreInput() {
    return this._nfsDatastore.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVmwareengineDatastoreTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVmwareengineDatastoreTimeouts) {
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
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      nfs_datastore: googleVmwareengineDatastoreNfsDatastoreToTerraform(this._nfsDatastore.internalValue),
      timeouts: googleVmwareengineDatastoreTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nfs_datastore: {
        value: googleVmwareengineDatastoreNfsDatastoreToHclTerraform(this._nfsDatastore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVmwareengineDatastoreNfsDatastoreList",
      },
      timeouts: {
        value: googleVmwareengineDatastoreTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleVmwareengineDatastoreTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
