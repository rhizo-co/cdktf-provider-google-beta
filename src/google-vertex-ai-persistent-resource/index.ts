// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleVertexAiPersistentResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#deletion_policy GoogleVertexAiPersistentResource#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The display name of the PersistentResource.
  * The name can be up to 128 characters long and can consist of any UTF-8
  * characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#display_name GoogleVertexAiPersistentResource#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#id GoogleVertexAiPersistentResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels with user-defined metadata to organize PersistentResource.
  * 
  * Label keys and values can be no longer than 64 characters
  * (Unicode codepoints), can only contain lowercase letters, numeric
  * characters, underscores and dashes. International characters are allowed.
  * 
  * See https://goo.gl/xmQnxf for more information and examples of labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#labels GoogleVertexAiPersistentResource#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the PersistentResource. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#location GoogleVertexAiPersistentResource#location}
  */
  readonly location?: string;
  /**
  * The ID to use for the PersistentResource, which become the final component
  * of the PersistentResource's resource name.
  * 
  * The maximum length is 63 characters, and valid characters
  * are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#name GoogleVertexAiPersistentResource#name}
  */
  readonly name: string;
  /**
  * The full name of the Compute Engine
  * [network](/compute/docs/networks-and-firewalls#networks) to peered with
  * Vertex AI to host the persistent resources.
  * For example, 'projects/12345/global/networks/myVPC'.
  * [Format](/compute/docs/reference/rest/v1/networks/insert)
  * is of the form 'projects/{project}/global/networks/{network}'.
  * Where {project} is a project number, as in '12345', and {network} is a
  * network name.
  * 
  * To specify this field, you must have already [configured VPC Network
  * Peering for Vertex
  * AI](https://cloud.google.com/vertex-ai/docs/general/vpc-peering).
  * 
  * If this field is left unspecified, the resources aren't peered with any
  * network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#network GoogleVertexAiPersistentResource#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#project GoogleVertexAiPersistentResource#project}
  */
  readonly project?: string;
  /**
  * A list of names for the reserved IP ranges under the VPC network
  * that can be used for this persistent resource.
  * 
  * If set, we will deploy the persistent resource within the provided IP
  * ranges. Otherwise, the persistent resource is deployed to any IP
  * ranges under the provided VPC network.
  * 
  * Example: ['vertex-ai-ip-range'].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#reserved_ip_ranges GoogleVertexAiPersistentResource#reserved_ip_ranges}
  */
  readonly reservedIpRanges?: string[];
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#encryption_spec GoogleVertexAiPersistentResource#encryption_spec}
  */
  readonly encryptionSpec?: GoogleVertexAiPersistentResourceEncryptionSpec;
  /**
  * psc_interface_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#psc_interface_config GoogleVertexAiPersistentResource#psc_interface_config}
  */
  readonly pscInterfaceConfig?: GoogleVertexAiPersistentResourcePscInterfaceConfig;
  /**
  * resource_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#resource_pools GoogleVertexAiPersistentResource#resource_pools}
  */
  readonly resourcePools: GoogleVertexAiPersistentResourceResourcePools[] | cdktf.IResolvable;
  /**
  * resource_runtime_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#resource_runtime_spec GoogleVertexAiPersistentResource#resource_runtime_spec}
  */
  readonly resourceRuntimeSpec?: GoogleVertexAiPersistentResourceResourceRuntimeSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#timeouts GoogleVertexAiPersistentResource#timeouts}
  */
  readonly timeouts?: GoogleVertexAiPersistentResourceTimeouts;
}
export interface GoogleVertexAiPersistentResourceError {
}

export function googleVertexAiPersistentResourceErrorToTerraform(struct?: GoogleVertexAiPersistentResourceError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVertexAiPersistentResourceErrorToHclTerraform(struct?: GoogleVertexAiPersistentResourceError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiPersistentResourceErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleVertexAiPersistentResourceError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPersistentResourceError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class GoogleVertexAiPersistentResourceErrorList extends cdktf.ComplexList {

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
  public get(index: number): GoogleVertexAiPersistentResourceErrorOutputReference {
    return new GoogleVertexAiPersistentResourceErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiPersistentResourceResourceRuntime {
}

export function googleVertexAiPersistentResourceResourceRuntimeToTerraform(struct?: GoogleVertexAiPersistentResourceResourceRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVertexAiPersistentResourceResourceRuntimeToHclTerraform(struct?: GoogleVertexAiPersistentResourceResourceRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiPersistentResourceResourceRuntimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleVertexAiPersistentResourceResourceRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPersistentResourceResourceRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_uris - computed: true, optional: false, required: false
  private _accessUris = new cdktf.StringMap(this, "access_uris");
  public get accessUris() {
    return this._accessUris;
  }
}

export class GoogleVertexAiPersistentResourceResourceRuntimeList extends cdktf.ComplexList {

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
  public get(index: number): GoogleVertexAiPersistentResourceResourceRuntimeOutputReference {
    return new GoogleVertexAiPersistentResourceResourceRuntimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiPersistentResourceEncryptionSpec {
  /**
  * Resource name of the Cloud KMS key used to protect the resource.
  * 
  * The Cloud KMS key must be in the same region as the resource. It must have
  * the format
  * 'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#kms_key_name GoogleVertexAiPersistentResource#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function googleVertexAiPersistentResourceEncryptionSpecToTerraform(struct?: GoogleVertexAiPersistentResourceEncryptionSpecOutputReference | GoogleVertexAiPersistentResourceEncryptionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function googleVertexAiPersistentResourceEncryptionSpecToHclTerraform(struct?: GoogleVertexAiPersistentResourceEncryptionSpecOutputReference | GoogleVertexAiPersistentResourceEncryptionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiPersistentResourceEncryptionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiPersistentResourceEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPersistentResourceEncryptionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs {
  /**
  * The DNS name suffix of the zone being peered to, e.g.,
  * "my-internal-domain.corp.". Must end with a dot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#domain GoogleVertexAiPersistentResource#domain}
  */
  readonly domain: string;
  /**
  * The VPC network name
  * in the target_project where the DNS zone specified by 'domain' is
  * visible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#target_network GoogleVertexAiPersistentResource#target_network}
  */
  readonly targetNetwork: string;
  /**
  * The project ID hosting the Cloud DNS managed zone that
  * contains the 'domain'. The Vertex AI Service Agent requires the
  * dns.peer role on this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#target_project GoogleVertexAiPersistentResource#target_project}
  */
  readonly targetProject: string;
}

export function googleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsToTerraform(struct?: GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    target_network: cdktf.stringToTerraform(struct!.targetNetwork),
    target_project: cdktf.stringToTerraform(struct!.targetProject),
  }
}


export function googleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsToHclTerraform(struct?: GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs | cdktf.IResolvable): any {
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
    target_network: {
      value: cdktf.stringToHclTerraform(struct!.targetNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_project: {
      value: cdktf.stringToHclTerraform(struct!.targetProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._targetNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNetwork = this._targetNetwork;
    }
    if (this._targetProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetProject = this._targetProject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._targetNetwork = undefined;
      this._targetProject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._targetNetwork = value.targetNetwork;
      this._targetProject = value.targetProject;
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

  // target_network - computed: false, optional: false, required: true
  private _targetNetwork?: string; 
  public get targetNetwork() {
    return this.getStringAttribute('target_network');
  }
  public set targetNetwork(value: string) {
    this._targetNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkInput() {
    return this._targetNetwork;
  }

  // target_project - computed: false, optional: false, required: true
  private _targetProject?: string; 
  public get targetProject() {
    return this.getStringAttribute('target_project');
  }
  public set targetProject(value: string) {
    this._targetProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProjectInput() {
    return this._targetProject;
  }
}

export class GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference {
    return new GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiPersistentResourcePscInterfaceConfig {
  /**
  * The name of the Compute Engine
  * [network
  * attachment](https://cloud.google.com/vpc/docs/about-network-attachments) to
  * attach to the resource within the region and user project.
  * To specify this field, you must have already [created a network attachment]
  * (https://cloud.google.com/vpc/docs/create-manage-network-attachments#create-network-attachments).
  * This field is only used for resources using PSC-I.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#network_attachment GoogleVertexAiPersistentResource#network_attachment}
  */
  readonly networkAttachment?: string;
  /**
  * dns_peering_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#dns_peering_configs GoogleVertexAiPersistentResource#dns_peering_configs}
  */
  readonly dnsPeeringConfigs?: GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs[] | cdktf.IResolvable;
}

export function googleVertexAiPersistentResourcePscInterfaceConfigToTerraform(struct?: GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference | GoogleVertexAiPersistentResourcePscInterfaceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_attachment: cdktf.stringToTerraform(struct!.networkAttachment),
    dns_peering_configs: cdktf.listMapper(googleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsToTerraform, true)(struct!.dnsPeeringConfigs),
  }
}


export function googleVertexAiPersistentResourcePscInterfaceConfigToHclTerraform(struct?: GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference | GoogleVertexAiPersistentResourcePscInterfaceConfig): any {
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
    dns_peering_configs: {
      value: cdktf.listMapperHcl(googleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsToHclTerraform, true)(struct!.dnsPeeringConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiPersistentResourcePscInterfaceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachment = this._networkAttachment;
    }
    if (this._dnsPeeringConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPeeringConfigs = this._dnsPeeringConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPersistentResourcePscInterfaceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkAttachment = undefined;
      this._dnsPeeringConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkAttachment = value.networkAttachment;
      this._dnsPeeringConfigs.internalValue = value.dnsPeeringConfigs;
    }
  }

  // network_attachment - computed: false, optional: true, required: false
  private _networkAttachment?: string; 
  public get networkAttachment() {
    return this.getStringAttribute('network_attachment');
  }
  public set networkAttachment(value: string) {
    this._networkAttachment = value;
  }
  public resetNetworkAttachment() {
    this._networkAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentInput() {
    return this._networkAttachment;
  }

  // dns_peering_configs - computed: false, optional: true, required: false
  private _dnsPeeringConfigs = new GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList(this, "dns_peering_configs", false);
  public get dnsPeeringConfigs() {
    return this._dnsPeeringConfigs;
  }
  public putDnsPeeringConfigs(value: GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs[] | cdktf.IResolvable) {
    this._dnsPeeringConfigs.internalValue = value;
  }
  public resetDnsPeeringConfigs() {
    this._dnsPeeringConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPeeringConfigsInput() {
    return this._dnsPeeringConfigs.internalValue;
  }
}
export interface GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec {
  /**
  * max replicas in the node pool,
  * must be ≥ replica_count and > min_replica_count or will throw error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#max_replica_count GoogleVertexAiPersistentResource#max_replica_count}
  */
  readonly maxReplicaCount?: string;
  /**
  * min replicas in the node pool,
  * must be ≤ replica_count and < max_replica_count or will throw error.
  * For autoscaling enabled Ray-on-Vertex, we allow min_replica_count of a
  * resource_pool to be 0 to match the OSS Ray
  * behavior(https://docs.ray.io/en/latest/cluster/vms/user-guides/configuring-autoscaling.html#cluster-config-parameters).
  * As for Persistent Resource, the min_replica_count must be > 0, we added
  * a corresponding validation inside
  * CreatePersistentResourceRequestValidator.java.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#min_replica_count GoogleVertexAiPersistentResource#min_replica_count}
  */
  readonly minReplicaCount?: string;
}

export function googleVertexAiPersistentResourceResourcePoolsAutoscalingSpecToTerraform(struct?: GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference | GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replica_count: cdktf.stringToTerraform(struct!.maxReplicaCount),
    min_replica_count: cdktf.stringToTerraform(struct!.minReplicaCount),
  }
}


export function googleVertexAiPersistentResourceResourcePoolsAutoscalingSpecToHclTerraform(struct?: GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference | GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_replica_count: {
      value: cdktf.stringToHclTerraform(struct!.maxReplicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_replica_count: {
      value: cdktf.stringToHclTerraform(struct!.minReplicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReplicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicaCount = this._maxReplicaCount;
    }
    if (this._minReplicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicaCount = this._minReplicaCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxReplicaCount = undefined;
      this._minReplicaCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxReplicaCount = value.maxReplicaCount;
      this._minReplicaCount = value.minReplicaCount;
    }
  }

  // max_replica_count - computed: false, optional: true, required: false
  private _maxReplicaCount?: string; 
  public get maxReplicaCount() {
    return this.getStringAttribute('max_replica_count');
  }
  public set maxReplicaCount(value: string) {
    this._maxReplicaCount = value;
  }
  public resetMaxReplicaCount() {
    this._maxReplicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicaCountInput() {
    return this._maxReplicaCount;
  }

  // min_replica_count - computed: false, optional: true, required: false
  private _minReplicaCount?: string; 
  public get minReplicaCount() {
    return this.getStringAttribute('min_replica_count');
  }
  public set minReplicaCount(value: string) {
    this._minReplicaCount = value;
  }
  public resetMinReplicaCount() {
    this._minReplicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicaCountInput() {
    return this._minReplicaCount;
  }
}
export interface GoogleVertexAiPersistentResourceResourcePoolsDiskSpec {
  /**
  * Size in GB of the boot disk (default is 100GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#boot_disk_size_gb GoogleVertexAiPersistentResource#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * Type of the boot disk. For non-A3U machines, the default value is
  * "pd-ssd", for A3U machines, the default value is "hyperdisk-balanced".
  * Valid values: "pd-ssd" (Persistent Disk Solid State Drive),
  * "pd-standard" (Persistent Disk Hard Disk Drive) or "hyperdisk-balanced".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#boot_disk_type GoogleVertexAiPersistentResource#boot_disk_type}
  */
  readonly bootDiskType?: string;
}

export function googleVertexAiPersistentResourceResourcePoolsDiskSpecToTerraform(struct?: GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference | GoogleVertexAiPersistentResourceResourcePoolsDiskSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
  }
}


export function googleVertexAiPersistentResourceResourcePoolsDiskSpecToHclTerraform(struct?: GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference | GoogleVertexAiPersistentResourceResourcePoolsDiskSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.bootDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.bootDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiPersistentResourceResourcePoolsDiskSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPersistentResourceResourcePoolsDiskSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
    }
  }

  // boot_disk_size_gb - computed: true, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: true, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }
}
export interface GoogleVertexAiPersistentResourceResourcePoolsMachineSpec {
  /**
  * The number of accelerators to attach to the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#accelerator_count GoogleVertexAiPersistentResource#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
  * The type of accelerator(s) that may be attached to the machine.
  * Possible values:
  * NVIDIA_TESLA_K80
  * NVIDIA_TESLA_P100
  * NVIDIA_TESLA_V100
  * NVIDIA_TESLA_P4
  * NVIDIA_TESLA_T4
  * NVIDIA_TESLA_A100
  * NVIDIA_A100_80GB
  * NVIDIA_L4
  * NVIDIA_H100_80GB
  * NVIDIA_H100_MEGA_80GB
  * NVIDIA_H200_141GB
  * NVIDIA_B200
  * NVIDIA_GB200
  * NVIDIA_RTX_PRO_6000
  * TPU_V2
  * TPU_V3
  * TPU_V4_POD
  * TPU_V5_LITEPOD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#accelerator_type GoogleVertexAiPersistentResource#accelerator_type}
  */
  readonly acceleratorType?: string;
  /**
  * The type of the machine.
  * 
  * See the [list of machine types supported for
  * prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)
  * 
  * See the [list of machine types supported for custom
  * training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#machine_type GoogleVertexAiPersistentResource#machine_type}
  */
  readonly machineType?: string;
}

export function googleVertexAiPersistentResourceResourcePoolsMachineSpecToTerraform(struct?: GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference | GoogleVertexAiPersistentResourceResourcePoolsMachineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
  }
}


export function googleVertexAiPersistentResourceResourcePoolsMachineSpecToHclTerraform(struct?: GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference | GoogleVertexAiPersistentResourceResourcePoolsMachineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator_count: {
      value: cdktf.numberToHclTerraform(struct!.acceleratorCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerator_type: {
      value: cdktf.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiPersistentResourceResourcePoolsMachineSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorCount = this._acceleratorCount;
    }
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPersistentResourceResourcePoolsMachineSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratorCount = undefined;
      this._acceleratorType = undefined;
      this._machineType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratorCount = value.acceleratorCount;
      this._acceleratorType = value.acceleratorType;
      this._machineType = value.machineType;
    }
  }

  // accelerator_count - computed: false, optional: true, required: false
  private _acceleratorCount?: number; 
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }
  public set acceleratorCount(value: number) {
    this._acceleratorCount = value;
  }
  public resetAcceleratorCount() {
    this._acceleratorCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount;
  }

  // accelerator_type - computed: false, optional: true, required: false
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  public resetAcceleratorType() {
    this._acceleratorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }
}
export interface GoogleVertexAiPersistentResourceResourcePools {
  /**
  * The unique ID in a PersistentResource for referring to this resource pool.
  * User can specify it if necessary. Otherwise, it's generated
  * automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#id GoogleVertexAiPersistentResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The total number of machines to use for this resource pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#replica_count GoogleVertexAiPersistentResource#replica_count}
  */
  readonly replicaCount?: string;
  /**
  * autoscaling_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#autoscaling_spec GoogleVertexAiPersistentResource#autoscaling_spec}
  */
  readonly autoscalingSpec?: GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec;
  /**
  * disk_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#disk_spec GoogleVertexAiPersistentResource#disk_spec}
  */
  readonly diskSpec?: GoogleVertexAiPersistentResourceResourcePoolsDiskSpec;
  /**
  * machine_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#machine_spec GoogleVertexAiPersistentResource#machine_spec}
  */
  readonly machineSpec: GoogleVertexAiPersistentResourceResourcePoolsMachineSpec;
}

export function googleVertexAiPersistentResourceResourcePoolsToTerraform(struct?: GoogleVertexAiPersistentResourceResourcePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    replica_count: cdktf.stringToTerraform(struct!.replicaCount),
    autoscaling_spec: googleVertexAiPersistentResourceResourcePoolsAutoscalingSpecToTerraform(struct!.autoscalingSpec),
    disk_spec: googleVertexAiPersistentResourceResourcePoolsDiskSpecToTerraform(struct!.diskSpec),
    machine_spec: googleVertexAiPersistentResourceResourcePoolsMachineSpecToTerraform(struct!.machineSpec),
  }
}


export function googleVertexAiPersistentResourceResourcePoolsToHclTerraform(struct?: GoogleVertexAiPersistentResourceResourcePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_count: {
      value: cdktf.stringToHclTerraform(struct!.replicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaling_spec: {
      value: googleVertexAiPersistentResourceResourcePoolsAutoscalingSpecToHclTerraform(struct!.autoscalingSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecList",
    },
    disk_spec: {
      value: googleVertexAiPersistentResourceResourcePoolsDiskSpecToHclTerraform(struct!.diskSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiPersistentResourceResourcePoolsDiskSpecList",
    },
    machine_spec: {
      value: googleVertexAiPersistentResourceResourcePoolsMachineSpecToHclTerraform(struct!.machineSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiPersistentResourceResourcePoolsMachineSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiPersistentResourceResourcePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleVertexAiPersistentResourceResourcePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._replicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaCount = this._replicaCount;
    }
    if (this._autoscalingSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingSpec = this._autoscalingSpec?.internalValue;
    }
    if (this._diskSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSpec = this._diskSpec?.internalValue;
    }
    if (this._machineSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineSpec = this._machineSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPersistentResourceResourcePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._replicaCount = undefined;
      this._autoscalingSpec.internalValue = undefined;
      this._diskSpec.internalValue = undefined;
      this._machineSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._replicaCount = value.replicaCount;
      this._autoscalingSpec.internalValue = value.autoscalingSpec;
      this._diskSpec.internalValue = value.diskSpec;
      this._machineSpec.internalValue = value.machineSpec;
    }
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

  // replica_count - computed: false, optional: true, required: false
  private _replicaCount?: string; 
  public get replicaCount() {
    return this.getStringAttribute('replica_count');
  }
  public set replicaCount(value: string) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
  }

  // used_replica_count - computed: true, optional: false, required: false
  public get usedReplicaCount() {
    return this.getStringAttribute('used_replica_count');
  }

  // autoscaling_spec - computed: false, optional: true, required: false
  private _autoscalingSpec = new GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference(this, "autoscaling_spec");
  public get autoscalingSpec() {
    return this._autoscalingSpec;
  }
  public putAutoscalingSpec(value: GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec) {
    this._autoscalingSpec.internalValue = value;
  }
  public resetAutoscalingSpec() {
    this._autoscalingSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingSpecInput() {
    return this._autoscalingSpec.internalValue;
  }

  // disk_spec - computed: false, optional: true, required: false
  private _diskSpec = new GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference(this, "disk_spec");
  public get diskSpec() {
    return this._diskSpec;
  }
  public putDiskSpec(value: GoogleVertexAiPersistentResourceResourcePoolsDiskSpec) {
    this._diskSpec.internalValue = value;
  }
  public resetDiskSpec() {
    this._diskSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSpecInput() {
    return this._diskSpec.internalValue;
  }

  // machine_spec - computed: false, optional: false, required: true
  private _machineSpec = new GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference(this, "machine_spec");
  public get machineSpec() {
    return this._machineSpec;
  }
  public putMachineSpec(value: GoogleVertexAiPersistentResourceResourcePoolsMachineSpec) {
    this._machineSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSpecInput() {
    return this._machineSpec.internalValue;
  }
}

export class GoogleVertexAiPersistentResourceResourcePoolsList extends cdktf.ComplexList {
  public internalValue? : GoogleVertexAiPersistentResourceResourcePools[] | cdktf.IResolvable

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
  public get(index: number): GoogleVertexAiPersistentResourceResourcePoolsOutputReference {
    return new GoogleVertexAiPersistentResourceResourcePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec {
  /**
  * If true, custom user-managed service account is enforced to run any
  * workloads (for example, Vertex Jobs) on the resource.
  * Otherwise, uses the [Vertex AI Custom Code Service
  * Agent](https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#enable_custom_service_account GoogleVertexAiPersistentResource#enable_custom_service_account}
  */
  readonly enableCustomServiceAccount: boolean | cdktf.IResolvable;
}

export function googleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecToTerraform(struct?: GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference | GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_custom_service_account: cdktf.booleanToTerraform(struct!.enableCustomServiceAccount),
  }
}


export function googleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecToHclTerraform(struct?: GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference | GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_custom_service_account: {
      value: cdktf.booleanToHclTerraform(struct!.enableCustomServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCustomServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCustomServiceAccount = this._enableCustomServiceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableCustomServiceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableCustomServiceAccount = value.enableCustomServiceAccount;
    }
  }

  // enable_custom_service_account - computed: false, optional: false, required: true
  private _enableCustomServiceAccount?: boolean | cdktf.IResolvable; 
  public get enableCustomServiceAccount() {
    return this.getBooleanAttribute('enable_custom_service_account');
  }
  public set enableCustomServiceAccount(value: boolean | cdktf.IResolvable) {
    this._enableCustomServiceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCustomServiceAccountInput() {
    return this._enableCustomServiceAccount;
  }
}
export interface GoogleVertexAiPersistentResourceResourceRuntimeSpec {
  /**
  * service_account_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#service_account_spec GoogleVertexAiPersistentResource#service_account_spec}
  */
  readonly serviceAccountSpec?: GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec;
}

export function googleVertexAiPersistentResourceResourceRuntimeSpecToTerraform(struct?: GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference | GoogleVertexAiPersistentResourceResourceRuntimeSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_spec: googleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecToTerraform(struct!.serviceAccountSpec),
  }
}


export function googleVertexAiPersistentResourceResourceRuntimeSpecToHclTerraform(struct?: GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference | GoogleVertexAiPersistentResourceResourceRuntimeSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_spec: {
      value: googleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecToHclTerraform(struct!.serviceAccountSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiPersistentResourceResourceRuntimeSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountSpec = this._serviceAccountSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPersistentResourceResourceRuntimeSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAccountSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAccountSpec.internalValue = value.serviceAccountSpec;
    }
  }

  // service_account_spec - computed: false, optional: true, required: false
  private _serviceAccountSpec = new GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference(this, "service_account_spec");
  public get serviceAccountSpec() {
    return this._serviceAccountSpec;
  }
  public putServiceAccountSpec(value: GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec) {
    this._serviceAccountSpec.internalValue = value;
  }
  public resetServiceAccountSpec() {
    this._serviceAccountSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountSpecInput() {
    return this._serviceAccountSpec.internalValue;
  }
}
export interface GoogleVertexAiPersistentResourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#create GoogleVertexAiPersistentResource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#delete GoogleVertexAiPersistentResource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#update GoogleVertexAiPersistentResource#update}
  */
  readonly update?: string;
}

export function googleVertexAiPersistentResourceTimeoutsToTerraform(struct?: GoogleVertexAiPersistentResourceTimeouts | cdktf.IResolvable): any {
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


export function googleVertexAiPersistentResourceTimeoutsToHclTerraform(struct?: GoogleVertexAiPersistentResourceTimeouts | cdktf.IResolvable): any {
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

export class GoogleVertexAiPersistentResourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleVertexAiPersistentResourceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleVertexAiPersistentResourceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource google_vertex_ai_persistent_resource}
*/
export class GoogleVertexAiPersistentResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_persistent_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleVertexAiPersistentResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleVertexAiPersistentResource to import
  * @param importFromId The id of the existing GoogleVertexAiPersistentResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleVertexAiPersistentResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_persistent_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_persistent_resource google_vertex_ai_persistent_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVertexAiPersistentResourceConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleVertexAiPersistentResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_persistent_resource',
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
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._reservedIpRanges = config.reservedIpRanges;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._pscInterfaceConfig.internalValue = config.pscInterfaceConfig;
    this._resourcePools.internalValue = config.resourcePools;
    this._resourceRuntimeSpec.internalValue = config.resourceRuntimeSpec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
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

  // error - computed: true, optional: false, required: false
  private _error = new GoogleVertexAiPersistentResourceErrorList(this, "error", false);
  public get error() {
    return this._error;
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

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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

  // reserved_ip_ranges - computed: false, optional: true, required: false
  private _reservedIpRanges?: string[]; 
  public get reservedIpRanges() {
    return this.getListAttribute('reserved_ip_ranges');
  }
  public set reservedIpRanges(value: string[]) {
    this._reservedIpRanges = value;
  }
  public resetReservedIpRanges() {
    this._reservedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpRangesInput() {
    return this._reservedIpRanges;
  }

  // resource_runtime - computed: true, optional: false, required: false
  private _resourceRuntime = new GoogleVertexAiPersistentResourceResourceRuntimeList(this, "resource_runtime", false);
  public get resourceRuntime() {
    return this._resourceRuntime;
  }

  // satisfies_pzi - computed: true, optional: false, required: false
  public get satisfiesPzi() {
    return this.getBooleanAttribute('satisfies_pzi');
  }

  // satisfies_pzs - computed: true, optional: false, required: false
  public get satisfiesPzs() {
    return this.getBooleanAttribute('satisfies_pzs');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new GoogleVertexAiPersistentResourceEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: GoogleVertexAiPersistentResourceEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // psc_interface_config - computed: false, optional: true, required: false
  private _pscInterfaceConfig = new GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference(this, "psc_interface_config");
  public get pscInterfaceConfig() {
    return this._pscInterfaceConfig;
  }
  public putPscInterfaceConfig(value: GoogleVertexAiPersistentResourcePscInterfaceConfig) {
    this._pscInterfaceConfig.internalValue = value;
  }
  public resetPscInterfaceConfig() {
    this._pscInterfaceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscInterfaceConfigInput() {
    return this._pscInterfaceConfig.internalValue;
  }

  // resource_pools - computed: false, optional: false, required: true
  private _resourcePools = new GoogleVertexAiPersistentResourceResourcePoolsList(this, "resource_pools", false);
  public get resourcePools() {
    return this._resourcePools;
  }
  public putResourcePools(value: GoogleVertexAiPersistentResourceResourcePools[] | cdktf.IResolvable) {
    this._resourcePools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolsInput() {
    return this._resourcePools.internalValue;
  }

  // resource_runtime_spec - computed: false, optional: true, required: false
  private _resourceRuntimeSpec = new GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference(this, "resource_runtime_spec");
  public get resourceRuntimeSpec() {
    return this._resourceRuntimeSpec;
  }
  public putResourceRuntimeSpec(value: GoogleVertexAiPersistentResourceResourceRuntimeSpec) {
    this._resourceRuntimeSpec.internalValue = value;
  }
  public resetResourceRuntimeSpec() {
    this._resourceRuntimeSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRuntimeSpecInput() {
    return this._resourceRuntimeSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVertexAiPersistentResourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVertexAiPersistentResourceTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      reserved_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._reservedIpRanges),
      encryption_spec: googleVertexAiPersistentResourceEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      psc_interface_config: googleVertexAiPersistentResourcePscInterfaceConfigToTerraform(this._pscInterfaceConfig.internalValue),
      resource_pools: cdktf.listMapper(googleVertexAiPersistentResourceResourcePoolsToTerraform, true)(this._resourcePools.internalValue),
      resource_runtime_spec: googleVertexAiPersistentResourceResourceRuntimeSpecToTerraform(this._resourceRuntimeSpec.internalValue),
      timeouts: googleVertexAiPersistentResourceTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
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
      reserved_ip_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._reservedIpRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      encryption_spec: {
        value: googleVertexAiPersistentResourceEncryptionSpecToHclTerraform(this._encryptionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiPersistentResourceEncryptionSpecList",
      },
      psc_interface_config: {
        value: googleVertexAiPersistentResourcePscInterfaceConfigToHclTerraform(this._pscInterfaceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiPersistentResourcePscInterfaceConfigList",
      },
      resource_pools: {
        value: cdktf.listMapperHcl(googleVertexAiPersistentResourceResourcePoolsToHclTerraform, true)(this._resourcePools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiPersistentResourceResourcePoolsList",
      },
      resource_runtime_spec: {
        value: googleVertexAiPersistentResourceResourceRuntimeSpecToHclTerraform(this._resourceRuntimeSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiPersistentResourceResourceRuntimeSpecList",
      },
      timeouts: {
        value: googleVertexAiPersistentResourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleVertexAiPersistentResourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
