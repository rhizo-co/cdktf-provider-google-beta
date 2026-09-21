// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleVertexAiRagCorpusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#deletion_policy GoogleVertexAiRagCorpus#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Optional. The description of the RagCorpus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#description GoogleVertexAiRagCorpus#description}
  */
  readonly description?: string;
  /**
  * Required. The display name of the RagCorpus. The name can be up to 128
  * characters long and can consist of any UTF-8 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#display_name GoogleVertexAiRagCorpus#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#id GoogleVertexAiRagCorpus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#project GoogleVertexAiRagCorpus#project}
  */
  readonly project?: string;
  /**
  * The region of the RagCorpus. eg europe-west4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#region GoogleVertexAiRagCorpus#region}
  */
  readonly region: string;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#encryption_spec GoogleVertexAiRagCorpus#encryption_spec}
  */
  readonly encryptionSpec?: GoogleVertexAiRagCorpusEncryptionSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#timeouts GoogleVertexAiRagCorpus#timeouts}
  */
  readonly timeouts?: GoogleVertexAiRagCorpusTimeouts;
  /**
  * vector_db_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#vector_db_config GoogleVertexAiRagCorpus#vector_db_config}
  */
  readonly vectorDbConfig?: GoogleVertexAiRagCorpusVectorDbConfig;
}
export interface GoogleVertexAiRagCorpusCorpusStatus {
}

export function googleVertexAiRagCorpusCorpusStatusToTerraform(struct?: GoogleVertexAiRagCorpusCorpusStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVertexAiRagCorpusCorpusStatusToHclTerraform(struct?: GoogleVertexAiRagCorpusCorpusStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiRagCorpusCorpusStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleVertexAiRagCorpusCorpusStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiRagCorpusCorpusStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_status - computed: true, optional: false, required: false
  public get errorStatus() {
    return this.getStringAttribute('error_status');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class GoogleVertexAiRagCorpusCorpusStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleVertexAiRagCorpusCorpusStatusOutputReference {
    return new GoogleVertexAiRagCorpusCorpusStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiRagCorpusEncryptionSpec {
  /**
  * Required. The Cloud KMS resource identifier of the customer managed
  * encryption key used to protect the resource. Has the form:
  * projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
  * The key needs to be in the same region as where the resource is
  * created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#kms_key_name GoogleVertexAiRagCorpus#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function googleVertexAiRagCorpusEncryptionSpecToTerraform(struct?: GoogleVertexAiRagCorpusEncryptionSpecOutputReference | GoogleVertexAiRagCorpusEncryptionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function googleVertexAiRagCorpusEncryptionSpecToHclTerraform(struct?: GoogleVertexAiRagCorpusEncryptionSpecOutputReference | GoogleVertexAiRagCorpusEncryptionSpec): any {
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

export class GoogleVertexAiRagCorpusEncryptionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiRagCorpusEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiRagCorpusEncryptionSpec | undefined) {
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
export interface GoogleVertexAiRagCorpusTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#create GoogleVertexAiRagCorpus#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#delete GoogleVertexAiRagCorpus#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#update GoogleVertexAiRagCorpus#update}
  */
  readonly update?: string;
}

export function googleVertexAiRagCorpusTimeoutsToTerraform(struct?: GoogleVertexAiRagCorpusTimeouts | cdktf.IResolvable): any {
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


export function googleVertexAiRagCorpusTimeoutsToHclTerraform(struct?: GoogleVertexAiRagCorpusTimeouts | cdktf.IResolvable): any {
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

export class GoogleVertexAiRagCorpusTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleVertexAiRagCorpusTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleVertexAiRagCorpusTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint {
  /**
  * Required. The endpoint resource name. Format:
  * projects/{project}/locations/{location}/publishers/{publisher}/models/{model}
  * or projects/{project}/locations/{location}/endpoints/{endpoint}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#endpoint GoogleVertexAiRagCorpus#endpoint}
  */
  readonly endpoint: string;
}

export function googleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointToTerraform(struct?: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference | GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}


export function googleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointToHclTerraform(struct?: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference | GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
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

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // model_version_id - computed: true, optional: false, required: false
  public get modelVersionId() {
    return this.getStringAttribute('model_version_id');
  }
}
export interface GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig {
  /**
  * vertex_prediction_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#vertex_prediction_endpoint GoogleVertexAiRagCorpus#vertex_prediction_endpoint}
  */
  readonly vertexPredictionEndpoint?: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint;
}

export function googleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigToTerraform(struct?: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference | GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vertex_prediction_endpoint: googleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointToTerraform(struct!.vertexPredictionEndpoint),
  }
}


export function googleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigToHclTerraform(struct?: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference | GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vertex_prediction_endpoint: {
      value: googleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointToHclTerraform(struct!.vertexPredictionEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vertexPredictionEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vertexPredictionEndpoint = this._vertexPredictionEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vertexPredictionEndpoint.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vertexPredictionEndpoint.internalValue = value.vertexPredictionEndpoint;
    }
  }

  // vertex_prediction_endpoint - computed: false, optional: true, required: false
  private _vertexPredictionEndpoint = new GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference(this, "vertex_prediction_endpoint");
  public get vertexPredictionEndpoint() {
    return this._vertexPredictionEndpoint;
  }
  public putVertexPredictionEndpoint(value: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint) {
    this._vertexPredictionEndpoint.internalValue = value;
  }
  public resetVertexPredictionEndpoint() {
    this._vertexPredictionEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vertexPredictionEndpointInput() {
    return this._vertexPredictionEndpoint.internalValue;
  }
}
export interface GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn {
  /**
  * Number of leaf nodes in the tree-based structure. Default value is 500.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#leaf_count GoogleVertexAiRagCorpus#leaf_count}
  */
  readonly leafCount?: number;
  /**
  * The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#tree_depth GoogleVertexAiRagCorpus#tree_depth}
  */
  readonly treeDepth?: number;
}

export function googleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnToTerraform(struct?: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference | GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    leaf_count: cdktf.numberToTerraform(struct!.leafCount),
    tree_depth: cdktf.numberToTerraform(struct!.treeDepth),
  }
}


export function googleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnToHclTerraform(struct?: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference | GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    leaf_count: {
      value: cdktf.numberToHclTerraform(struct!.leafCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tree_depth: {
      value: cdktf.numberToHclTerraform(struct!.treeDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leafCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.leafCount = this._leafCount;
    }
    if (this._treeDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.treeDepth = this._treeDepth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._leafCount = undefined;
      this._treeDepth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._leafCount = value.leafCount;
      this._treeDepth = value.treeDepth;
    }
  }

  // leaf_count - computed: true, optional: true, required: false
  private _leafCount?: number; 
  public get leafCount() {
    return this.getNumberAttribute('leaf_count');
  }
  public set leafCount(value: number) {
    this._leafCount = value;
  }
  public resetLeafCount() {
    this._leafCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafCountInput() {
    return this._leafCount;
  }

  // tree_depth - computed: true, optional: true, required: false
  private _treeDepth?: number; 
  public get treeDepth() {
    return this.getNumberAttribute('tree_depth');
  }
  public set treeDepth(value: number) {
    this._treeDepth = value;
  }
  public resetTreeDepth() {
    this._treeDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treeDepthInput() {
    return this._treeDepth;
  }
}
export interface GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn {
}

export function googleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnToTerraform(struct?: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference | GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnToHclTerraform(struct?: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference | GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb {
  /**
  * ann block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#ann GoogleVertexAiRagCorpus#ann}
  */
  readonly ann?: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn;
  /**
  * knn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#knn GoogleVertexAiRagCorpus#knn}
  */
  readonly knn?: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn;
}

export function googleVertexAiRagCorpusVectorDbConfigRagManagedDbToTerraform(struct?: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference | GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ann: googleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnToTerraform(struct!.ann),
    knn: googleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnToTerraform(struct!.knn),
  }
}


export function googleVertexAiRagCorpusVectorDbConfigRagManagedDbToHclTerraform(struct?: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference | GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ann: {
      value: googleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnToHclTerraform(struct!.ann),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnList",
    },
    knn: {
      value: googleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnToHclTerraform(struct!.knn),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ann?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ann = this._ann?.internalValue;
    }
    if (this._knn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knn = this._knn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ann.internalValue = undefined;
      this._knn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ann.internalValue = value.ann;
      this._knn.internalValue = value.knn;
    }
  }

  // ann - computed: false, optional: true, required: false
  private _ann = new GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference(this, "ann");
  public get ann() {
    return this._ann;
  }
  public putAnn(value: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn) {
    this._ann.internalValue = value;
  }
  public resetAnn() {
    this._ann.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annInput() {
    return this._ann.internalValue;
  }

  // knn - computed: false, optional: true, required: false
  private _knn = new GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference(this, "knn");
  public get knn() {
    return this._knn;
  }
  public putKnn(value: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn) {
    this._knn.internalValue = value;
  }
  public resetKnn() {
    this._knn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knnInput() {
    return this._knn.internalValue;
  }
}
export interface GoogleVertexAiRagCorpusVectorDbConfig {
  /**
  * rag_embedding_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#rag_embedding_model_config GoogleVertexAiRagCorpus#rag_embedding_model_config}
  */
  readonly ragEmbeddingModelConfig?: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig;
  /**
  * rag_managed_db block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#rag_managed_db GoogleVertexAiRagCorpus#rag_managed_db}
  */
  readonly ragManagedDb?: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb;
}

export function googleVertexAiRagCorpusVectorDbConfigToTerraform(struct?: GoogleVertexAiRagCorpusVectorDbConfigOutputReference | GoogleVertexAiRagCorpusVectorDbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rag_embedding_model_config: googleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigToTerraform(struct!.ragEmbeddingModelConfig),
    rag_managed_db: googleVertexAiRagCorpusVectorDbConfigRagManagedDbToTerraform(struct!.ragManagedDb),
  }
}


export function googleVertexAiRagCorpusVectorDbConfigToHclTerraform(struct?: GoogleVertexAiRagCorpusVectorDbConfigOutputReference | GoogleVertexAiRagCorpusVectorDbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rag_embedding_model_config: {
      value: googleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigToHclTerraform(struct!.ragEmbeddingModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigList",
    },
    rag_managed_db: {
      value: googleVertexAiRagCorpusVectorDbConfigRagManagedDbToHclTerraform(struct!.ragManagedDb),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiRagCorpusVectorDbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiRagCorpusVectorDbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ragEmbeddingModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ragEmbeddingModelConfig = this._ragEmbeddingModelConfig?.internalValue;
    }
    if (this._ragManagedDb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ragManagedDb = this._ragManagedDb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiRagCorpusVectorDbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ragEmbeddingModelConfig.internalValue = undefined;
      this._ragManagedDb.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ragEmbeddingModelConfig.internalValue = value.ragEmbeddingModelConfig;
      this._ragManagedDb.internalValue = value.ragManagedDb;
    }
  }

  // rag_embedding_model_config - computed: false, optional: true, required: false
  private _ragEmbeddingModelConfig = new GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference(this, "rag_embedding_model_config");
  public get ragEmbeddingModelConfig() {
    return this._ragEmbeddingModelConfig;
  }
  public putRagEmbeddingModelConfig(value: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig) {
    this._ragEmbeddingModelConfig.internalValue = value;
  }
  public resetRagEmbeddingModelConfig() {
    this._ragEmbeddingModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ragEmbeddingModelConfigInput() {
    return this._ragEmbeddingModelConfig.internalValue;
  }

  // rag_managed_db - computed: false, optional: true, required: false
  private _ragManagedDb = new GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference(this, "rag_managed_db");
  public get ragManagedDb() {
    return this._ragManagedDb;
  }
  public putRagManagedDb(value: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb) {
    this._ragManagedDb.internalValue = value;
  }
  public resetRagManagedDb() {
    this._ragManagedDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ragManagedDbInput() {
    return this._ragManagedDb.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus google_vertex_ai_rag_corpus}
*/
export class GoogleVertexAiRagCorpus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_rag_corpus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleVertexAiRagCorpus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleVertexAiRagCorpus to import
  * @param importFromId The id of the existing GoogleVertexAiRagCorpus that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleVertexAiRagCorpus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_rag_corpus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_vertex_ai_rag_corpus google_vertex_ai_rag_corpus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVertexAiRagCorpusConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleVertexAiRagCorpusConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_rag_corpus',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._project = config.project;
    this._region = config.region;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._timeouts.internalValue = config.timeouts;
    this._vectorDbConfig.internalValue = config.vectorDbConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // corpus_status - computed: true, optional: false, required: false
  private _corpusStatus = new GoogleVertexAiRagCorpusCorpusStatusList(this, "corpus_status", false);
  public get corpusStatus() {
    return this._corpusStatus;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new GoogleVertexAiRagCorpusEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: GoogleVertexAiRagCorpusEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVertexAiRagCorpusTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVertexAiRagCorpusTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vector_db_config - computed: false, optional: true, required: false
  private _vectorDbConfig = new GoogleVertexAiRagCorpusVectorDbConfigOutputReference(this, "vector_db_config");
  public get vectorDbConfig() {
    return this._vectorDbConfig;
  }
  public putVectorDbConfig(value: GoogleVertexAiRagCorpusVectorDbConfig) {
    this._vectorDbConfig.internalValue = value;
  }
  public resetVectorDbConfig() {
    this._vectorDbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorDbConfigInput() {
    return this._vectorDbConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      encryption_spec: googleVertexAiRagCorpusEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      timeouts: googleVertexAiRagCorpusTimeoutsToTerraform(this._timeouts.internalValue),
      vector_db_config: googleVertexAiRagCorpusVectorDbConfigToTerraform(this._vectorDbConfig.internalValue),
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
      encryption_spec: {
        value: googleVertexAiRagCorpusEncryptionSpecToHclTerraform(this._encryptionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiRagCorpusEncryptionSpecList",
      },
      timeouts: {
        value: googleVertexAiRagCorpusTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleVertexAiRagCorpusTimeouts",
      },
      vector_db_config: {
        value: googleVertexAiRagCorpusVectorDbConfigToHclTerraform(this._vectorDbConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiRagCorpusVectorDbConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
