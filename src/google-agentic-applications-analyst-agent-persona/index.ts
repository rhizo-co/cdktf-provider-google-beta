// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleAgenticApplicationsAnalystAgentPersonaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the requesting object
  * If auto-generating Id server-side, remove this field and
  * analyst_agent_persona_id from the method_signature of Create RPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#analyst_agent_persona_id GoogleAgenticApplicationsAnalystAgentPersona#analyst_agent_persona_id}
  */
  readonly analystAgentPersonaId: string;
  /**
  * The customer-specific context to be used by the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#customer_context GoogleAgenticApplicationsAnalystAgentPersona#customer_context}
  */
  readonly customerContext?: string[];
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#deletion_policy GoogleAgenticApplicationsAnalystAgentPersona#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The description of the persona, shown to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#display_description GoogleAgenticApplicationsAnalystAgentPersona#display_description}
  */
  readonly displayDescription?: string;
  /**
  * The display name of the persona, shown to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#display_name GoogleAgenticApplicationsAnalystAgentPersona#display_name}
  */
  readonly displayName: string;
  /**
  * The Gemini Enterprise Engine ID associated with this persona.
  * If set, any requests coming from this GE Engine will be routed to this
  * persona.
  * If not set, requests from GE will only be routed to this persona if its
  * name ends in "/default".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#gemini_enterprise_engine GoogleAgenticApplicationsAnalystAgentPersona#gemini_enterprise_engine}
  */
  readonly geminiEnterpriseEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#id GoogleAgenticApplicationsAnalystAgentPersona#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#location GoogleAgenticApplicationsAnalystAgentPersona#location}
  */
  readonly location: string;
  /**
  * The description of the persona review, used by the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#model_description GoogleAgenticApplicationsAnalystAgentPersona#model_description}
  */
  readonly modelDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#project GoogleAgenticApplicationsAnalystAgentPersona#project}
  */
  readonly project?: string;
  /**
  * Possible values:
  * ANALYST_ROLE_GENERIC_FINANCE_ANALYST
  * ANALYST_ROLE_CORPORATE_FINANCE_ANALYST
  * ANALYST_ROLE_CROSS_ASSET_DERIVATIVES_STRATEGIST
  * ANALYST_ROLE_KYC_ANALYST
  * ANALYST_ROLE_SALES_TRADER
  * ANALYST_ROLE_QUANT_ANALYST
  * ANALYST_ROLE_EXCHANGE_MANAGER
  * ANALYST_ROLE_PORTFOLIO_MANAGER
  * ANALYST_ROLE_WEALTH_MANAGER
  * ANALYST_ROLE_INSTITUTIONAL_PORTFOLIO_STRATEGIST
  * ANALYST_ROLE_MNA_EXECUTION_ANALYST
  * ANALYST_ROLE_ECM_ORIGINATION_STRATEGIST
  * ANALYST_ROLE_LEVERAGED_FINANCE_SPECIALIST
  * ANALYST_ROLE_INVESTMENT_RESEARCH_ANALYST
  * ANALYST_ROLE_CORPORATE_BANKING_ANALYST
  * ANALYST_ROLE_CREDIT_RISK_STRATEGIST
  * ANALYST_ROLE_BEHAVIORAL_FINANCIAL_STRATEGIST
  * ANALYST_ROLE_FUND_ACCOUNTANT
  * ANALYST_ROLE_MODEL_VALIDATION_AUDITOR
  * ANALYST_ROLE_PRIVATE_EQUITY_SPECIALIST
  * ANALYST_ROLE_TREASURY_ANALYST
  * ANALYST_ROLE_VENTURE_CAPITAL_ANALYST
  * ANALYST_ROLE_AML_INVESTIGATOR
  * ANALYST_ROLE_DUE_DILIGENCE_ANALYST
  * ANALYST_ROLE_INSURANCE_CLAIMS_ANALYST
  * ANALYST_ROLE_SPECIALTY_LIABILITY_UNDERWRITER
  * ANALYST_ROLE_CATASTROPHE_EXPOSURE_MODELER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#role GoogleAgenticApplicationsAnalystAgentPersona#role}
  */
  readonly role?: string;
  /**
  * artifact_examples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#artifact_examples GoogleAgenticApplicationsAnalystAgentPersona#artifact_examples}
  */
  readonly artifactExamples?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamples[] | cdktf.IResolvable;
  /**
  * artifacts_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#artifacts_config GoogleAgenticApplicationsAnalystAgentPersona#artifacts_config}
  */
  readonly artifactsConfig?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfig;
  /**
  * external_data_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#external_data_sources GoogleAgenticApplicationsAnalystAgentPersona#external_data_sources}
  */
  readonly externalDataSources?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSources[] | cdktf.IResolvable;
  /**
  * mcp_data_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#mcp_data_sources GoogleAgenticApplicationsAnalystAgentPersona#mcp_data_sources}
  */
  readonly mcpDataSources?: GoogleAgenticApplicationsAnalystAgentPersonaMcpDataSources[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#resources GoogleAgenticApplicationsAnalystAgentPersona#resources}
  */
  readonly resources?: GoogleAgenticApplicationsAnalystAgentPersonaResources[] | cdktf.IResolvable;
  /**
  * skills block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#skills GoogleAgenticApplicationsAnalystAgentPersona#skills}
  */
  readonly skills?: GoogleAgenticApplicationsAnalystAgentPersonaSkills[] | cdktf.IResolvable;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#tables GoogleAgenticApplicationsAnalystAgentPersona#tables}
  */
  readonly tables?: GoogleAgenticApplicationsAnalystAgentPersonaTables[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#timeouts GoogleAgenticApplicationsAnalystAgentPersona#timeouts}
  */
  readonly timeouts?: GoogleAgenticApplicationsAnalystAgentPersonaTimeouts;
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResource {
  /**
  * Points to a bigquery dataset to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#bigquery_dataset GoogleAgenticApplicationsAnalystAgentPersona#bigquery_dataset}
  */
  readonly bigqueryDataset?: string;
  /**
  * Points to a bigquery table to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}/tables/{table_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#bigquery_table GoogleAgenticApplicationsAnalystAgentPersona#bigquery_table}
  */
  readonly bigqueryTable?: string;
  /**
  * A map of column names to column descriptions for the bigquery_table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#column_descriptions GoogleAgenticApplicationsAnalystAgentPersona#column_descriptions}
  */
  readonly columnDescriptions?: { [key: string]: string };
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bigquery_dataset: cdktf.stringToTerraform(struct!.bigqueryDataset),
    bigquery_table: cdktf.stringToTerraform(struct!.bigqueryTable),
    column_descriptions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.columnDescriptions),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bigquery_dataset: {
      value: cdktf.stringToHclTerraform(struct!.bigqueryDataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bigquery_table: {
      value: cdktf.stringToHclTerraform(struct!.bigqueryTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_descriptions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.columnDescriptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigqueryDataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDataset = this._bigqueryDataset;
    }
    if (this._bigqueryTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryTable = this._bigqueryTable;
    }
    if (this._columnDescriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDescriptions = this._columnDescriptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigqueryDataset = undefined;
      this._bigqueryTable = undefined;
      this._columnDescriptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigqueryDataset = value.bigqueryDataset;
      this._bigqueryTable = value.bigqueryTable;
      this._columnDescriptions = value.columnDescriptions;
    }
  }

  // bigquery_dataset - computed: false, optional: true, required: false
  private _bigqueryDataset?: string; 
  public get bigqueryDataset() {
    return this.getStringAttribute('bigquery_dataset');
  }
  public set bigqueryDataset(value: string) {
    this._bigqueryDataset = value;
  }
  public resetBigqueryDataset() {
    this._bigqueryDataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDatasetInput() {
    return this._bigqueryDataset;
  }

  // bigquery_table - computed: false, optional: true, required: false
  private _bigqueryTable?: string; 
  public get bigqueryTable() {
    return this.getStringAttribute('bigquery_table');
  }
  public set bigqueryTable(value: string) {
    this._bigqueryTable = value;
  }
  public resetBigqueryTable() {
    this._bigqueryTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryTableInput() {
    return this._bigqueryTable;
  }

  // column_descriptions - computed: false, optional: true, required: false
  private _columnDescriptions?: { [key: string]: string }; 
  public get columnDescriptions() {
    return this.getStringMapAttribute('column_descriptions');
  }
  public set columnDescriptions(value: { [key: string]: string }) {
    this._columnDescriptions = value;
  }
  public resetColumnDescriptions() {
    this._columnDescriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDescriptionsInput() {
    return this._columnDescriptions;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1Resource {
  /**
  * ## - Points to an f1 table to use.
  * 
  * - Expected Format:
  * - {group}.{table_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#f1_table GoogleAgenticApplicationsAnalystAgentPersona#f1_table}
  */
  readonly f1Table?: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1Resource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    f1_table: cdktf.stringToTerraform(struct!.f1Table),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1Resource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    f1_table: {
      value: cdktf.stringToHclTerraform(struct!.f1Table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1Resource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f1Table !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Table = this._f1Table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1Resource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f1Table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f1Table = value.f1Table;
    }
  }

  // f1_table - computed: false, optional: true, required: false
  private _f1Table?: string; 
  public get f1Table() {
    return this.getStringAttribute('f1_table');
  }
  public set f1Table(value: string) {
    this._f1Table = value;
  }
  public resetF1Table() {
    this._f1Table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1TableInput() {
    return this._f1Table;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_extension_restrictions GoogleAgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * The Google Cloud Storage object or folder.
  * 
  * Format: /
  * or: //
  * 
  * Note that to refer to a folder, it _must_ end in a slash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#google_cloud_storage_object GoogleAgenticApplicationsAnalystAgentPersona#google_cloud_storage_object}
  */
  readonly googleCloudStorageObject: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_extension_restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    google_cloud_storage_object: cdktf.stringToTerraform(struct!.googleCloudStorageObject),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    google_cloud_storage_object: {
      value: cdktf.stringToHclTerraform(struct!.googleCloudStorageObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._googleCloudStorageObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageObject = this._googleCloudStorageObject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._googleCloudStorageObject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._googleCloudStorageObject = value.googleCloudStorageObject;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // google_cloud_storage_object - computed: false, optional: false, required: true
  private _googleCloudStorageObject?: string; 
  public get googleCloudStorageObject() {
    return this.getStringAttribute('google_cloud_storage_object');
  }
  public set googleCloudStorageObject(value: string) {
    this._googleCloudStorageObject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageObjectInput() {
    return this._googleCloudStorageObject;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_extension_restrictions GoogleAgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * Points to a drive file to use. May refer to workspace files or folders
  * as well.  If folder is specifically, all files in the folder
  * (recursively) are used.
  * 
  * Expected Format:
  * files/{file_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_reference GoogleAgenticApplicationsAnalystAgentPersona#file_reference}
  */
  readonly fileReference?: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_extension_restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    file_reference: cdktf.stringToTerraform(struct!.fileReference),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_reference: {
      value: cdktf.stringToHclTerraform(struct!.fileReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._fileReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileReference = this._fileReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._fileReference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._fileReference = value.fileReference;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // file_reference - computed: false, optional: true, required: false
  private _fileReference?: string; 
  public get fileReference() {
    return this.getStringAttribute('file_reference');
  }
  public set fileReference(value: string) {
    this._fileReference = value;
  }
  public resetFileReference() {
    this._fileReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileReferenceInput() {
    return this._fileReference;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResource {
  /**
  * The raw file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_content GoogleAgenticApplicationsAnalystAgentPersona#file_content}
  */
  readonly fileContent: string;
  /**
  * The title of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_title GoogleAgenticApplicationsAnalystAgentPersona#file_title}
  */
  readonly fileTitle: string;
  /**
  * The mime type of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#mime_type GoogleAgenticApplicationsAnalystAgentPersona#mime_type}
  */
  readonly mimeType: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_title: cdktf.stringToTerraform(struct!.fileTitle),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_title: {
      value: cdktf.stringToHclTerraform(struct!.fileTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_type: {
      value: cdktf.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTitle = this._fileTitle;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileContent = undefined;
      this._fileTitle = undefined;
      this._mimeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileContent = value.fileContent;
      this._fileTitle = value.fileTitle;
      this._mimeType = value.mimeType;
    }
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_title - computed: false, optional: false, required: true
  private _fileTitle?: string; 
  public get fileTitle() {
    return this.getStringAttribute('file_title');
  }
  public set fileTitle(value: string) {
    this._fileTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTitleInput() {
    return this._fileTitle;
  }

  // mime_type - computed: false, optional: false, required: true
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResource {
  /**
  * A user-friendly name for this resource. This can be shown to the user
  * and used by the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#display_label GoogleAgenticApplicationsAnalystAgentPersona#display_label}
  */
  readonly displayLabel?: string;
  /**
  * A description of the resource. The model may use this, it will not be
  * shown to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#model_description GoogleAgenticApplicationsAnalystAgentPersona#model_description}
  */
  readonly modelDescription?: string;
  /**
  * If true, use RAG to retrieve relevant information from the resources.
  * 
  * Must only be set for file-based resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#use_rag GoogleAgenticApplicationsAnalystAgentPersona#use_rag}
  */
  readonly useRag?: boolean | cdktf.IResolvable;
  /**
  * bigquery_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#bigquery_resource GoogleAgenticApplicationsAnalystAgentPersona#bigquery_resource}
  */
  readonly bigqueryResource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResource;
  /**
  * f1_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#f1_resource GoogleAgenticApplicationsAnalystAgentPersona#f1_resource}
  */
  readonly f1Resource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1Resource;
  /**
  * google_cloud_storage_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#google_cloud_storage_resource GoogleAgenticApplicationsAnalystAgentPersona#google_cloud_storage_resource}
  */
  readonly googleCloudStorageResource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResource;
  /**
  * google_drive_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#google_drive_resource GoogleAgenticApplicationsAnalystAgentPersona#google_drive_resource}
  */
  readonly googleDriveResource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResource;
  /**
  * raw_file_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#raw_file_resource GoogleAgenticApplicationsAnalystAgentPersona#raw_file_resource}
  */
  readonly rawFileResource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResource;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_label: cdktf.stringToTerraform(struct!.displayLabel),
    model_description: cdktf.stringToTerraform(struct!.modelDescription),
    use_rag: cdktf.booleanToTerraform(struct!.useRag),
    bigquery_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceToTerraform(struct!.bigqueryResource),
    f1_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceToTerraform(struct!.f1Resource),
    google_cloud_storage_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceToTerraform(struct!.googleCloudStorageResource),
    google_drive_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceToTerraform(struct!.googleDriveResource),
    raw_file_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceToTerraform(struct!.rawFileResource),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_label: {
      value: cdktf.stringToHclTerraform(struct!.displayLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_description: {
      value: cdktf.stringToHclTerraform(struct!.modelDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_rag: {
      value: cdktf.booleanToHclTerraform(struct!.useRag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bigquery_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceToHclTerraform(struct!.bigqueryResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceList",
    },
    f1_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceToHclTerraform(struct!.f1Resource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceList",
    },
    google_cloud_storage_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceToHclTerraform(struct!.googleCloudStorageResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceList",
    },
    google_drive_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceToHclTerraform(struct!.googleDriveResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceList",
    },
    raw_file_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceToHclTerraform(struct!.rawFileResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayLabel = this._displayLabel;
    }
    if (this._modelDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDescription = this._modelDescription;
    }
    if (this._useRag !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRag = this._useRag;
    }
    if (this._bigqueryResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryResource = this._bigqueryResource?.internalValue;
    }
    if (this._f1Resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Resource = this._f1Resource?.internalValue;
    }
    if (this._googleCloudStorageResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageResource = this._googleCloudStorageResource?.internalValue;
    }
    if (this._googleDriveResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleDriveResource = this._googleDriveResource?.internalValue;
    }
    if (this._rawFileResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawFileResource = this._rawFileResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayLabel = undefined;
      this._modelDescription = undefined;
      this._useRag = undefined;
      this._bigqueryResource.internalValue = undefined;
      this._f1Resource.internalValue = undefined;
      this._googleCloudStorageResource.internalValue = undefined;
      this._googleDriveResource.internalValue = undefined;
      this._rawFileResource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayLabel = value.displayLabel;
      this._modelDescription = value.modelDescription;
      this._useRag = value.useRag;
      this._bigqueryResource.internalValue = value.bigqueryResource;
      this._f1Resource.internalValue = value.f1Resource;
      this._googleCloudStorageResource.internalValue = value.googleCloudStorageResource;
      this._googleDriveResource.internalValue = value.googleDriveResource;
      this._rawFileResource.internalValue = value.rawFileResource;
    }
  }

  // display_label - computed: false, optional: true, required: false
  private _displayLabel?: string; 
  public get displayLabel() {
    return this.getStringAttribute('display_label');
  }
  public set displayLabel(value: string) {
    this._displayLabel = value;
  }
  public resetDisplayLabel() {
    this._displayLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayLabelInput() {
    return this._displayLabel;
  }

  // model_description - computed: false, optional: true, required: false
  private _modelDescription?: string; 
  public get modelDescription() {
    return this.getStringAttribute('model_description');
  }
  public set modelDescription(value: string) {
    this._modelDescription = value;
  }
  public resetModelDescription() {
    this._modelDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDescriptionInput() {
    return this._modelDescription;
  }

  // use_rag - computed: false, optional: true, required: false
  private _useRag?: boolean | cdktf.IResolvable; 
  public get useRag() {
    return this.getBooleanAttribute('use_rag');
  }
  public set useRag(value: boolean | cdktf.IResolvable) {
    this._useRag = value;
  }
  public resetUseRag() {
    this._useRag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRagInput() {
    return this._useRag;
  }

  // bigquery_resource - computed: false, optional: true, required: false
  private _bigqueryResource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceOutputReference(this, "bigquery_resource");
  public get bigqueryResource() {
    return this._bigqueryResource;
  }
  public putBigqueryResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResource) {
    this._bigqueryResource.internalValue = value;
  }
  public resetBigqueryResource() {
    this._bigqueryResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryResourceInput() {
    return this._bigqueryResource.internalValue;
  }

  // f1_resource - computed: false, optional: true, required: false
  private _f1Resource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceOutputReference(this, "f1_resource");
  public get f1Resource() {
    return this._f1Resource;
  }
  public putF1Resource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1Resource) {
    this._f1Resource.internalValue = value;
  }
  public resetF1Resource() {
    this._f1Resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1ResourceInput() {
    return this._f1Resource.internalValue;
  }

  // google_cloud_storage_resource - computed: false, optional: true, required: false
  private _googleCloudStorageResource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceOutputReference(this, "google_cloud_storage_resource");
  public get googleCloudStorageResource() {
    return this._googleCloudStorageResource;
  }
  public putGoogleCloudStorageResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResource) {
    this._googleCloudStorageResource.internalValue = value;
  }
  public resetGoogleCloudStorageResource() {
    this._googleCloudStorageResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageResourceInput() {
    return this._googleCloudStorageResource.internalValue;
  }

  // google_drive_resource - computed: false, optional: true, required: false
  private _googleDriveResource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceOutputReference(this, "google_drive_resource");
  public get googleDriveResource() {
    return this._googleDriveResource;
  }
  public putGoogleDriveResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResource) {
    this._googleDriveResource.internalValue = value;
  }
  public resetGoogleDriveResource() {
    this._googleDriveResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleDriveResourceInput() {
    return this._googleDriveResource.internalValue;
  }

  // raw_file_resource - computed: false, optional: true, required: false
  private _rawFileResource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceOutputReference(this, "raw_file_resource");
  public get rawFileResource() {
    return this._rawFileResource;
  }
  public putRawFileResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResource) {
    this._rawFileResource.internalValue = value;
  }
  public resetRawFileResource() {
    this._rawFileResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawFileResourceInput() {
    return this._rawFileResource.internalValue;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamples {
  /**
  * resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#resource GoogleAgenticApplicationsAnalystAgentPersona#resource}
  */
  readonly resource: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResource;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceToTerraform(struct!.resource),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamples | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamples | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resource.internalValue = value.resource;
    }
  }

  // resource - computed: false, optional: false, required: true
  private _resource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesResource) {
    this._resource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesList extends cdktf.ComplexList {
  public internalValue? : GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamples[] | cdktf.IResolvable

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
  public get(index: number): GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesOutputReference {
    return new GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResource {
  /**
  * Points to a bigquery dataset to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#bigquery_dataset GoogleAgenticApplicationsAnalystAgentPersona#bigquery_dataset}
  */
  readonly bigqueryDataset?: string;
  /**
  * Points to a bigquery table to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}/tables/{table_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#bigquery_table GoogleAgenticApplicationsAnalystAgentPersona#bigquery_table}
  */
  readonly bigqueryTable?: string;
  /**
  * A map of column names to column descriptions for the bigquery_table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#column_descriptions GoogleAgenticApplicationsAnalystAgentPersona#column_descriptions}
  */
  readonly columnDescriptions?: { [key: string]: string };
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bigquery_dataset: cdktf.stringToTerraform(struct!.bigqueryDataset),
    bigquery_table: cdktf.stringToTerraform(struct!.bigqueryTable),
    column_descriptions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.columnDescriptions),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bigquery_dataset: {
      value: cdktf.stringToHclTerraform(struct!.bigqueryDataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bigquery_table: {
      value: cdktf.stringToHclTerraform(struct!.bigqueryTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_descriptions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.columnDescriptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigqueryDataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDataset = this._bigqueryDataset;
    }
    if (this._bigqueryTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryTable = this._bigqueryTable;
    }
    if (this._columnDescriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDescriptions = this._columnDescriptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigqueryDataset = undefined;
      this._bigqueryTable = undefined;
      this._columnDescriptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigqueryDataset = value.bigqueryDataset;
      this._bigqueryTable = value.bigqueryTable;
      this._columnDescriptions = value.columnDescriptions;
    }
  }

  // bigquery_dataset - computed: false, optional: true, required: false
  private _bigqueryDataset?: string; 
  public get bigqueryDataset() {
    return this.getStringAttribute('bigquery_dataset');
  }
  public set bigqueryDataset(value: string) {
    this._bigqueryDataset = value;
  }
  public resetBigqueryDataset() {
    this._bigqueryDataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDatasetInput() {
    return this._bigqueryDataset;
  }

  // bigquery_table - computed: false, optional: true, required: false
  private _bigqueryTable?: string; 
  public get bigqueryTable() {
    return this.getStringAttribute('bigquery_table');
  }
  public set bigqueryTable(value: string) {
    this._bigqueryTable = value;
  }
  public resetBigqueryTable() {
    this._bigqueryTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryTableInput() {
    return this._bigqueryTable;
  }

  // column_descriptions - computed: false, optional: true, required: false
  private _columnDescriptions?: { [key: string]: string }; 
  public get columnDescriptions() {
    return this.getStringMapAttribute('column_descriptions');
  }
  public set columnDescriptions(value: { [key: string]: string }) {
    this._columnDescriptions = value;
  }
  public resetColumnDescriptions() {
    this._columnDescriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDescriptionsInput() {
    return this._columnDescriptions;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1Resource {
  /**
  * ## - Points to an f1 table to use.
  * 
  * - Expected Format:
  * - {group}.{table_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#f1_table GoogleAgenticApplicationsAnalystAgentPersona#f1_table}
  */
  readonly f1Table?: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1Resource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    f1_table: cdktf.stringToTerraform(struct!.f1Table),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1Resource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    f1_table: {
      value: cdktf.stringToHclTerraform(struct!.f1Table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1Resource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f1Table !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Table = this._f1Table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1Resource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f1Table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f1Table = value.f1Table;
    }
  }

  // f1_table - computed: false, optional: true, required: false
  private _f1Table?: string; 
  public get f1Table() {
    return this.getStringAttribute('f1_table');
  }
  public set f1Table(value: string) {
    this._f1Table = value;
  }
  public resetF1Table() {
    this._f1Table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1TableInput() {
    return this._f1Table;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_extension_restrictions GoogleAgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * The Google Cloud Storage object or folder.
  * 
  * Format: /
  * or: //
  * 
  * Note that to refer to a folder, it _must_ end in a slash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#google_cloud_storage_object GoogleAgenticApplicationsAnalystAgentPersona#google_cloud_storage_object}
  */
  readonly googleCloudStorageObject: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_extension_restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    google_cloud_storage_object: cdktf.stringToTerraform(struct!.googleCloudStorageObject),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    google_cloud_storage_object: {
      value: cdktf.stringToHclTerraform(struct!.googleCloudStorageObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._googleCloudStorageObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageObject = this._googleCloudStorageObject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._googleCloudStorageObject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._googleCloudStorageObject = value.googleCloudStorageObject;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // google_cloud_storage_object - computed: false, optional: false, required: true
  private _googleCloudStorageObject?: string; 
  public get googleCloudStorageObject() {
    return this.getStringAttribute('google_cloud_storage_object');
  }
  public set googleCloudStorageObject(value: string) {
    this._googleCloudStorageObject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageObjectInput() {
    return this._googleCloudStorageObject;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_extension_restrictions GoogleAgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * Points to a drive file to use. May refer to workspace files or folders
  * as well.  If folder is specifically, all files in the folder
  * (recursively) are used.
  * 
  * Expected Format:
  * files/{file_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_reference GoogleAgenticApplicationsAnalystAgentPersona#file_reference}
  */
  readonly fileReference?: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_extension_restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    file_reference: cdktf.stringToTerraform(struct!.fileReference),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_reference: {
      value: cdktf.stringToHclTerraform(struct!.fileReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._fileReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileReference = this._fileReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._fileReference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._fileReference = value.fileReference;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // file_reference - computed: false, optional: true, required: false
  private _fileReference?: string; 
  public get fileReference() {
    return this.getStringAttribute('file_reference');
  }
  public set fileReference(value: string) {
    this._fileReference = value;
  }
  public resetFileReference() {
    this._fileReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileReferenceInput() {
    return this._fileReference;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResource {
  /**
  * The raw file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_content GoogleAgenticApplicationsAnalystAgentPersona#file_content}
  */
  readonly fileContent: string;
  /**
  * The title of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_title GoogleAgenticApplicationsAnalystAgentPersona#file_title}
  */
  readonly fileTitle: string;
  /**
  * The mime type of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#mime_type GoogleAgenticApplicationsAnalystAgentPersona#mime_type}
  */
  readonly mimeType: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_title: cdktf.stringToTerraform(struct!.fileTitle),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_title: {
      value: cdktf.stringToHclTerraform(struct!.fileTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_type: {
      value: cdktf.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTitle = this._fileTitle;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileContent = undefined;
      this._fileTitle = undefined;
      this._mimeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileContent = value.fileContent;
      this._fileTitle = value.fileTitle;
      this._mimeType = value.mimeType;
    }
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_title - computed: false, optional: false, required: true
  private _fileTitle?: string; 
  public get fileTitle() {
    return this.getStringAttribute('file_title');
  }
  public set fileTitle(value: string) {
    this._fileTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTitleInput() {
    return this._fileTitle;
  }

  // mime_type - computed: false, optional: false, required: true
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResource {
  /**
  * A user-friendly name for this resource. This can be shown to the user
  * and used by the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#display_label GoogleAgenticApplicationsAnalystAgentPersona#display_label}
  */
  readonly displayLabel?: string;
  /**
  * A description of the resource. The model may use this, it will not be
  * shown to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#model_description GoogleAgenticApplicationsAnalystAgentPersona#model_description}
  */
  readonly modelDescription?: string;
  /**
  * If true, use RAG to retrieve relevant information from the resources.
  * 
  * Must only be set for file-based resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#use_rag GoogleAgenticApplicationsAnalystAgentPersona#use_rag}
  */
  readonly useRag?: boolean | cdktf.IResolvable;
  /**
  * bigquery_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#bigquery_resource GoogleAgenticApplicationsAnalystAgentPersona#bigquery_resource}
  */
  readonly bigqueryResource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResource;
  /**
  * f1_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#f1_resource GoogleAgenticApplicationsAnalystAgentPersona#f1_resource}
  */
  readonly f1Resource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1Resource;
  /**
  * google_cloud_storage_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#google_cloud_storage_resource GoogleAgenticApplicationsAnalystAgentPersona#google_cloud_storage_resource}
  */
  readonly googleCloudStorageResource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResource;
  /**
  * google_drive_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#google_drive_resource GoogleAgenticApplicationsAnalystAgentPersona#google_drive_resource}
  */
  readonly googleDriveResource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResource;
  /**
  * raw_file_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#raw_file_resource GoogleAgenticApplicationsAnalystAgentPersona#raw_file_resource}
  */
  readonly rawFileResource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResource;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_label: cdktf.stringToTerraform(struct!.displayLabel),
    model_description: cdktf.stringToTerraform(struct!.modelDescription),
    use_rag: cdktf.booleanToTerraform(struct!.useRag),
    bigquery_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceToTerraform(struct!.bigqueryResource),
    f1_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceToTerraform(struct!.f1Resource),
    google_cloud_storage_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceToTerraform(struct!.googleCloudStorageResource),
    google_drive_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceToTerraform(struct!.googleDriveResource),
    raw_file_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceToTerraform(struct!.rawFileResource),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_label: {
      value: cdktf.stringToHclTerraform(struct!.displayLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_description: {
      value: cdktf.stringToHclTerraform(struct!.modelDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_rag: {
      value: cdktf.booleanToHclTerraform(struct!.useRag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bigquery_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceToHclTerraform(struct!.bigqueryResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceList",
    },
    f1_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceToHclTerraform(struct!.f1Resource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceList",
    },
    google_cloud_storage_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceToHclTerraform(struct!.googleCloudStorageResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceList",
    },
    google_drive_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceToHclTerraform(struct!.googleDriveResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceList",
    },
    raw_file_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceToHclTerraform(struct!.rawFileResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayLabel = this._displayLabel;
    }
    if (this._modelDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDescription = this._modelDescription;
    }
    if (this._useRag !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRag = this._useRag;
    }
    if (this._bigqueryResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryResource = this._bigqueryResource?.internalValue;
    }
    if (this._f1Resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Resource = this._f1Resource?.internalValue;
    }
    if (this._googleCloudStorageResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageResource = this._googleCloudStorageResource?.internalValue;
    }
    if (this._googleDriveResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleDriveResource = this._googleDriveResource?.internalValue;
    }
    if (this._rawFileResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawFileResource = this._rawFileResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayLabel = undefined;
      this._modelDescription = undefined;
      this._useRag = undefined;
      this._bigqueryResource.internalValue = undefined;
      this._f1Resource.internalValue = undefined;
      this._googleCloudStorageResource.internalValue = undefined;
      this._googleDriveResource.internalValue = undefined;
      this._rawFileResource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayLabel = value.displayLabel;
      this._modelDescription = value.modelDescription;
      this._useRag = value.useRag;
      this._bigqueryResource.internalValue = value.bigqueryResource;
      this._f1Resource.internalValue = value.f1Resource;
      this._googleCloudStorageResource.internalValue = value.googleCloudStorageResource;
      this._googleDriveResource.internalValue = value.googleDriveResource;
      this._rawFileResource.internalValue = value.rawFileResource;
    }
  }

  // display_label - computed: false, optional: true, required: false
  private _displayLabel?: string; 
  public get displayLabel() {
    return this.getStringAttribute('display_label');
  }
  public set displayLabel(value: string) {
    this._displayLabel = value;
  }
  public resetDisplayLabel() {
    this._displayLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayLabelInput() {
    return this._displayLabel;
  }

  // model_description - computed: false, optional: true, required: false
  private _modelDescription?: string; 
  public get modelDescription() {
    return this.getStringAttribute('model_description');
  }
  public set modelDescription(value: string) {
    this._modelDescription = value;
  }
  public resetModelDescription() {
    this._modelDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDescriptionInput() {
    return this._modelDescription;
  }

  // use_rag - computed: false, optional: true, required: false
  private _useRag?: boolean | cdktf.IResolvable; 
  public get useRag() {
    return this.getBooleanAttribute('use_rag');
  }
  public set useRag(value: boolean | cdktf.IResolvable) {
    this._useRag = value;
  }
  public resetUseRag() {
    this._useRag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRagInput() {
    return this._useRag;
  }

  // bigquery_resource - computed: false, optional: true, required: false
  private _bigqueryResource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceOutputReference(this, "bigquery_resource");
  public get bigqueryResource() {
    return this._bigqueryResource;
  }
  public putBigqueryResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResource) {
    this._bigqueryResource.internalValue = value;
  }
  public resetBigqueryResource() {
    this._bigqueryResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryResourceInput() {
    return this._bigqueryResource.internalValue;
  }

  // f1_resource - computed: false, optional: true, required: false
  private _f1Resource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceOutputReference(this, "f1_resource");
  public get f1Resource() {
    return this._f1Resource;
  }
  public putF1Resource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1Resource) {
    this._f1Resource.internalValue = value;
  }
  public resetF1Resource() {
    this._f1Resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1ResourceInput() {
    return this._f1Resource.internalValue;
  }

  // google_cloud_storage_resource - computed: false, optional: true, required: false
  private _googleCloudStorageResource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceOutputReference(this, "google_cloud_storage_resource");
  public get googleCloudStorageResource() {
    return this._googleCloudStorageResource;
  }
  public putGoogleCloudStorageResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResource) {
    this._googleCloudStorageResource.internalValue = value;
  }
  public resetGoogleCloudStorageResource() {
    this._googleCloudStorageResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageResourceInput() {
    return this._googleCloudStorageResource.internalValue;
  }

  // google_drive_resource - computed: false, optional: true, required: false
  private _googleDriveResource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceOutputReference(this, "google_drive_resource");
  public get googleDriveResource() {
    return this._googleDriveResource;
  }
  public putGoogleDriveResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResource) {
    this._googleDriveResource.internalValue = value;
  }
  public resetGoogleDriveResource() {
    this._googleDriveResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleDriveResourceInput() {
    return this._googleDriveResource.internalValue;
  }

  // raw_file_resource - computed: false, optional: true, required: false
  private _rawFileResource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceOutputReference(this, "raw_file_resource");
  public get rawFileResource() {
    return this._rawFileResource;
  }
  public putRawFileResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResource) {
    this._rawFileResource.internalValue = value;
  }
  public resetRawFileResource() {
    this._rawFileResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawFileResourceInput() {
    return this._rawFileResource.internalValue;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamples {
  /**
  * resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#resource GoogleAgenticApplicationsAnalystAgentPersona#resource}
  */
  readonly resource: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResource;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceToTerraform(struct!.resource),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamples | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamples | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resource.internalValue = value.resource;
    }
  }

  // resource - computed: false, optional: false, required: true
  private _resource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResource) {
    this._resource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesList extends cdktf.ComplexList {
  public internalValue? : GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamples[] | cdktf.IResolvable

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
  public get(index: number): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesOutputReference {
    return new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptions {
  /**
  * Format for document export.
  * Possible values:
  * PDF
  * DOCX
  * GOOGLE_DOCS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#export_format GoogleAgenticApplicationsAnalystAgentPersona#export_format}
  */
  readonly exportFormat?: string;
  /**
  * document_examples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#document_examples GoogleAgenticApplicationsAnalystAgentPersona#document_examples}
  */
  readonly documentExamples?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamples[] | cdktf.IResolvable;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_format: cdktf.stringToTerraform(struct!.exportFormat),
    document_examples: cdktf.listMapper(googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesToTerraform, true)(struct!.documentExamples),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_format: {
      value: cdktf.stringToHclTerraform(struct!.exportFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_examples: {
      value: cdktf.listMapperHcl(googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesToHclTerraform, true)(struct!.documentExamples),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportFormat = this._exportFormat;
    }
    if (this._documentExamples?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentExamples = this._documentExamples?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exportFormat = undefined;
      this._documentExamples.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exportFormat = value.exportFormat;
      this._documentExamples.internalValue = value.documentExamples;
    }
  }

  // export_format - computed: false, optional: true, required: false
  private _exportFormat?: string; 
  public get exportFormat() {
    return this.getStringAttribute('export_format');
  }
  public set exportFormat(value: string) {
    this._exportFormat = value;
  }
  public resetExportFormat() {
    this._exportFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportFormatInput() {
    return this._exportFormat;
  }

  // document_examples - computed: false, optional: true, required: false
  private _documentExamples = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesList(this, "document_examples", false);
  public get documentExamples() {
    return this._documentExamples;
  }
  public putDocumentExamples(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamples[] | cdktf.IResolvable) {
    this._documentExamples.internalValue = value;
  }
  public resetDocumentExamples() {
    this._documentExamples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentExamplesInput() {
    return this._documentExamples.internalValue;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResource {
  /**
  * Points to a bigquery dataset to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#bigquery_dataset GoogleAgenticApplicationsAnalystAgentPersona#bigquery_dataset}
  */
  readonly bigqueryDataset?: string;
  /**
  * Points to a bigquery table to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}/tables/{table_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#bigquery_table GoogleAgenticApplicationsAnalystAgentPersona#bigquery_table}
  */
  readonly bigqueryTable?: string;
  /**
  * A map of column names to column descriptions for the bigquery_table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#column_descriptions GoogleAgenticApplicationsAnalystAgentPersona#column_descriptions}
  */
  readonly columnDescriptions?: { [key: string]: string };
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bigquery_dataset: cdktf.stringToTerraform(struct!.bigqueryDataset),
    bigquery_table: cdktf.stringToTerraform(struct!.bigqueryTable),
    column_descriptions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.columnDescriptions),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bigquery_dataset: {
      value: cdktf.stringToHclTerraform(struct!.bigqueryDataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bigquery_table: {
      value: cdktf.stringToHclTerraform(struct!.bigqueryTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_descriptions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.columnDescriptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigqueryDataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDataset = this._bigqueryDataset;
    }
    if (this._bigqueryTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryTable = this._bigqueryTable;
    }
    if (this._columnDescriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDescriptions = this._columnDescriptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigqueryDataset = undefined;
      this._bigqueryTable = undefined;
      this._columnDescriptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigqueryDataset = value.bigqueryDataset;
      this._bigqueryTable = value.bigqueryTable;
      this._columnDescriptions = value.columnDescriptions;
    }
  }

  // bigquery_dataset - computed: false, optional: true, required: false
  private _bigqueryDataset?: string; 
  public get bigqueryDataset() {
    return this.getStringAttribute('bigquery_dataset');
  }
  public set bigqueryDataset(value: string) {
    this._bigqueryDataset = value;
  }
  public resetBigqueryDataset() {
    this._bigqueryDataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDatasetInput() {
    return this._bigqueryDataset;
  }

  // bigquery_table - computed: false, optional: true, required: false
  private _bigqueryTable?: string; 
  public get bigqueryTable() {
    return this.getStringAttribute('bigquery_table');
  }
  public set bigqueryTable(value: string) {
    this._bigqueryTable = value;
  }
  public resetBigqueryTable() {
    this._bigqueryTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryTableInput() {
    return this._bigqueryTable;
  }

  // column_descriptions - computed: false, optional: true, required: false
  private _columnDescriptions?: { [key: string]: string }; 
  public get columnDescriptions() {
    return this.getStringMapAttribute('column_descriptions');
  }
  public set columnDescriptions(value: { [key: string]: string }) {
    this._columnDescriptions = value;
  }
  public resetColumnDescriptions() {
    this._columnDescriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDescriptionsInput() {
    return this._columnDescriptions;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1Resource {
  /**
  * ## - Points to an f1 table to use.
  * 
  * - Expected Format:
  * - {group}.{table_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#f1_table GoogleAgenticApplicationsAnalystAgentPersona#f1_table}
  */
  readonly f1Table?: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1Resource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    f1_table: cdktf.stringToTerraform(struct!.f1Table),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1Resource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    f1_table: {
      value: cdktf.stringToHclTerraform(struct!.f1Table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1Resource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f1Table !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Table = this._f1Table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1Resource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f1Table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f1Table = value.f1Table;
    }
  }

  // f1_table - computed: false, optional: true, required: false
  private _f1Table?: string; 
  public get f1Table() {
    return this.getStringAttribute('f1_table');
  }
  public set f1Table(value: string) {
    this._f1Table = value;
  }
  public resetF1Table() {
    this._f1Table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1TableInput() {
    return this._f1Table;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_extension_restrictions GoogleAgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * The Google Cloud Storage object or folder.
  * 
  * Format: /
  * or: //
  * 
  * Note that to refer to a folder, it _must_ end in a slash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#google_cloud_storage_object GoogleAgenticApplicationsAnalystAgentPersona#google_cloud_storage_object}
  */
  readonly googleCloudStorageObject: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_extension_restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    google_cloud_storage_object: cdktf.stringToTerraform(struct!.googleCloudStorageObject),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    google_cloud_storage_object: {
      value: cdktf.stringToHclTerraform(struct!.googleCloudStorageObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._googleCloudStorageObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageObject = this._googleCloudStorageObject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._googleCloudStorageObject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._googleCloudStorageObject = value.googleCloudStorageObject;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // google_cloud_storage_object - computed: false, optional: false, required: true
  private _googleCloudStorageObject?: string; 
  public get googleCloudStorageObject() {
    return this.getStringAttribute('google_cloud_storage_object');
  }
  public set googleCloudStorageObject(value: string) {
    this._googleCloudStorageObject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageObjectInput() {
    return this._googleCloudStorageObject;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_extension_restrictions GoogleAgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * Points to a drive file to use. May refer to workspace files or folders
  * as well.  If folder is specifically, all files in the folder
  * (recursively) are used.
  * 
  * Expected Format:
  * files/{file_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_reference GoogleAgenticApplicationsAnalystAgentPersona#file_reference}
  */
  readonly fileReference?: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_extension_restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    file_reference: cdktf.stringToTerraform(struct!.fileReference),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_reference: {
      value: cdktf.stringToHclTerraform(struct!.fileReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._fileReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileReference = this._fileReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._fileReference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._fileReference = value.fileReference;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // file_reference - computed: false, optional: true, required: false
  private _fileReference?: string; 
  public get fileReference() {
    return this.getStringAttribute('file_reference');
  }
  public set fileReference(value: string) {
    this._fileReference = value;
  }
  public resetFileReference() {
    this._fileReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileReferenceInput() {
    return this._fileReference;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResource {
  /**
  * The raw file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_content GoogleAgenticApplicationsAnalystAgentPersona#file_content}
  */
  readonly fileContent: string;
  /**
  * The title of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_title GoogleAgenticApplicationsAnalystAgentPersona#file_title}
  */
  readonly fileTitle: string;
  /**
  * The mime type of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#mime_type GoogleAgenticApplicationsAnalystAgentPersona#mime_type}
  */
  readonly mimeType: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_title: cdktf.stringToTerraform(struct!.fileTitle),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_title: {
      value: cdktf.stringToHclTerraform(struct!.fileTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_type: {
      value: cdktf.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTitle = this._fileTitle;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileContent = undefined;
      this._fileTitle = undefined;
      this._mimeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileContent = value.fileContent;
      this._fileTitle = value.fileTitle;
      this._mimeType = value.mimeType;
    }
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_title - computed: false, optional: false, required: true
  private _fileTitle?: string; 
  public get fileTitle() {
    return this.getStringAttribute('file_title');
  }
  public set fileTitle(value: string) {
    this._fileTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTitleInput() {
    return this._fileTitle;
  }

  // mime_type - computed: false, optional: false, required: true
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResource {
  /**
  * A user-friendly name for this resource. This can be shown to the user
  * and used by the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#display_label GoogleAgenticApplicationsAnalystAgentPersona#display_label}
  */
  readonly displayLabel?: string;
  /**
  * A description of the resource. The model may use this, it will not be
  * shown to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#model_description GoogleAgenticApplicationsAnalystAgentPersona#model_description}
  */
  readonly modelDescription?: string;
  /**
  * If true, use RAG to retrieve relevant information from the resources.
  * 
  * Must only be set for file-based resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#use_rag GoogleAgenticApplicationsAnalystAgentPersona#use_rag}
  */
  readonly useRag?: boolean | cdktf.IResolvable;
  /**
  * bigquery_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#bigquery_resource GoogleAgenticApplicationsAnalystAgentPersona#bigquery_resource}
  */
  readonly bigqueryResource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResource;
  /**
  * f1_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#f1_resource GoogleAgenticApplicationsAnalystAgentPersona#f1_resource}
  */
  readonly f1Resource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1Resource;
  /**
  * google_cloud_storage_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#google_cloud_storage_resource GoogleAgenticApplicationsAnalystAgentPersona#google_cloud_storage_resource}
  */
  readonly googleCloudStorageResource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResource;
  /**
  * google_drive_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#google_drive_resource GoogleAgenticApplicationsAnalystAgentPersona#google_drive_resource}
  */
  readonly googleDriveResource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResource;
  /**
  * raw_file_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#raw_file_resource GoogleAgenticApplicationsAnalystAgentPersona#raw_file_resource}
  */
  readonly rawFileResource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResource;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_label: cdktf.stringToTerraform(struct!.displayLabel),
    model_description: cdktf.stringToTerraform(struct!.modelDescription),
    use_rag: cdktf.booleanToTerraform(struct!.useRag),
    bigquery_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceToTerraform(struct!.bigqueryResource),
    f1_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceToTerraform(struct!.f1Resource),
    google_cloud_storage_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceToTerraform(struct!.googleCloudStorageResource),
    google_drive_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceToTerraform(struct!.googleDriveResource),
    raw_file_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceToTerraform(struct!.rawFileResource),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_label: {
      value: cdktf.stringToHclTerraform(struct!.displayLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_description: {
      value: cdktf.stringToHclTerraform(struct!.modelDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_rag: {
      value: cdktf.booleanToHclTerraform(struct!.useRag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bigquery_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceToHclTerraform(struct!.bigqueryResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceList",
    },
    f1_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceToHclTerraform(struct!.f1Resource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceList",
    },
    google_cloud_storage_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceToHclTerraform(struct!.googleCloudStorageResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceList",
    },
    google_drive_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceToHclTerraform(struct!.googleDriveResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceList",
    },
    raw_file_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceToHclTerraform(struct!.rawFileResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayLabel = this._displayLabel;
    }
    if (this._modelDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDescription = this._modelDescription;
    }
    if (this._useRag !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRag = this._useRag;
    }
    if (this._bigqueryResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryResource = this._bigqueryResource?.internalValue;
    }
    if (this._f1Resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Resource = this._f1Resource?.internalValue;
    }
    if (this._googleCloudStorageResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageResource = this._googleCloudStorageResource?.internalValue;
    }
    if (this._googleDriveResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleDriveResource = this._googleDriveResource?.internalValue;
    }
    if (this._rawFileResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawFileResource = this._rawFileResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayLabel = undefined;
      this._modelDescription = undefined;
      this._useRag = undefined;
      this._bigqueryResource.internalValue = undefined;
      this._f1Resource.internalValue = undefined;
      this._googleCloudStorageResource.internalValue = undefined;
      this._googleDriveResource.internalValue = undefined;
      this._rawFileResource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayLabel = value.displayLabel;
      this._modelDescription = value.modelDescription;
      this._useRag = value.useRag;
      this._bigqueryResource.internalValue = value.bigqueryResource;
      this._f1Resource.internalValue = value.f1Resource;
      this._googleCloudStorageResource.internalValue = value.googleCloudStorageResource;
      this._googleDriveResource.internalValue = value.googleDriveResource;
      this._rawFileResource.internalValue = value.rawFileResource;
    }
  }

  // display_label - computed: false, optional: true, required: false
  private _displayLabel?: string; 
  public get displayLabel() {
    return this.getStringAttribute('display_label');
  }
  public set displayLabel(value: string) {
    this._displayLabel = value;
  }
  public resetDisplayLabel() {
    this._displayLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayLabelInput() {
    return this._displayLabel;
  }

  // model_description - computed: false, optional: true, required: false
  private _modelDescription?: string; 
  public get modelDescription() {
    return this.getStringAttribute('model_description');
  }
  public set modelDescription(value: string) {
    this._modelDescription = value;
  }
  public resetModelDescription() {
    this._modelDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDescriptionInput() {
    return this._modelDescription;
  }

  // use_rag - computed: false, optional: true, required: false
  private _useRag?: boolean | cdktf.IResolvable; 
  public get useRag() {
    return this.getBooleanAttribute('use_rag');
  }
  public set useRag(value: boolean | cdktf.IResolvable) {
    this._useRag = value;
  }
  public resetUseRag() {
    this._useRag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRagInput() {
    return this._useRag;
  }

  // bigquery_resource - computed: false, optional: true, required: false
  private _bigqueryResource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceOutputReference(this, "bigquery_resource");
  public get bigqueryResource() {
    return this._bigqueryResource;
  }
  public putBigqueryResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResource) {
    this._bigqueryResource.internalValue = value;
  }
  public resetBigqueryResource() {
    this._bigqueryResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryResourceInput() {
    return this._bigqueryResource.internalValue;
  }

  // f1_resource - computed: false, optional: true, required: false
  private _f1Resource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceOutputReference(this, "f1_resource");
  public get f1Resource() {
    return this._f1Resource;
  }
  public putF1Resource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1Resource) {
    this._f1Resource.internalValue = value;
  }
  public resetF1Resource() {
    this._f1Resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1ResourceInput() {
    return this._f1Resource.internalValue;
  }

  // google_cloud_storage_resource - computed: false, optional: true, required: false
  private _googleCloudStorageResource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceOutputReference(this, "google_cloud_storage_resource");
  public get googleCloudStorageResource() {
    return this._googleCloudStorageResource;
  }
  public putGoogleCloudStorageResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResource) {
    this._googleCloudStorageResource.internalValue = value;
  }
  public resetGoogleCloudStorageResource() {
    this._googleCloudStorageResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageResourceInput() {
    return this._googleCloudStorageResource.internalValue;
  }

  // google_drive_resource - computed: false, optional: true, required: false
  private _googleDriveResource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceOutputReference(this, "google_drive_resource");
  public get googleDriveResource() {
    return this._googleDriveResource;
  }
  public putGoogleDriveResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResource) {
    this._googleDriveResource.internalValue = value;
  }
  public resetGoogleDriveResource() {
    this._googleDriveResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleDriveResourceInput() {
    return this._googleDriveResource.internalValue;
  }

  // raw_file_resource - computed: false, optional: true, required: false
  private _rawFileResource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceOutputReference(this, "raw_file_resource");
  public get rawFileResource() {
    return this._rawFileResource;
  }
  public putRawFileResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResource) {
    this._rawFileResource.internalValue = value;
  }
  public resetRawFileResource() {
    this._rawFileResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawFileResourceInput() {
    return this._rawFileResource.internalValue;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamples {
  /**
  * resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#resource GoogleAgenticApplicationsAnalystAgentPersona#resource}
  */
  readonly resource: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResource;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceToTerraform(struct!.resource),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamples | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamples | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resource.internalValue = value.resource;
    }
  }

  // resource - computed: false, optional: false, required: true
  private _resource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResource) {
    this._resource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesList extends cdktf.ComplexList {
  public internalValue? : GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamples[] | cdktf.IResolvable

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
  public get(index: number): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesOutputReference {
    return new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptions {
  /**
  * Format for slide export.
  * Possible values:
  * PDF
  * PNG
  * PPTX
  * GOOGLE_SLIDES
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#export_format GoogleAgenticApplicationsAnalystAgentPersona#export_format}
  */
  readonly exportFormat?: string;
  /**
  * slide_examples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#slide_examples GoogleAgenticApplicationsAnalystAgentPersona#slide_examples}
  */
  readonly slideExamples?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamples[] | cdktf.IResolvable;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_format: cdktf.stringToTerraform(struct!.exportFormat),
    slide_examples: cdktf.listMapper(googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesToTerraform, true)(struct!.slideExamples),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_format: {
      value: cdktf.stringToHclTerraform(struct!.exportFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slide_examples: {
      value: cdktf.listMapperHcl(googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesToHclTerraform, true)(struct!.slideExamples),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportFormat = this._exportFormat;
    }
    if (this._slideExamples?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slideExamples = this._slideExamples?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exportFormat = undefined;
      this._slideExamples.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exportFormat = value.exportFormat;
      this._slideExamples.internalValue = value.slideExamples;
    }
  }

  // export_format - computed: false, optional: true, required: false
  private _exportFormat?: string; 
  public get exportFormat() {
    return this.getStringAttribute('export_format');
  }
  public set exportFormat(value: string) {
    this._exportFormat = value;
  }
  public resetExportFormat() {
    this._exportFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportFormatInput() {
    return this._exportFormat;
  }

  // slide_examples - computed: false, optional: true, required: false
  private _slideExamples = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesList(this, "slide_examples", false);
  public get slideExamples() {
    return this._slideExamples;
  }
  public putSlideExamples(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamples[] | cdktf.IResolvable) {
    this._slideExamples.internalValue = value;
  }
  public resetSlideExamples() {
    this._slideExamples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slideExamplesInput() {
    return this._slideExamples.internalValue;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResource {
  /**
  * Points to a bigquery dataset to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#bigquery_dataset GoogleAgenticApplicationsAnalystAgentPersona#bigquery_dataset}
  */
  readonly bigqueryDataset?: string;
  /**
  * Points to a bigquery table to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}/tables/{table_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#bigquery_table GoogleAgenticApplicationsAnalystAgentPersona#bigquery_table}
  */
  readonly bigqueryTable?: string;
  /**
  * A map of column names to column descriptions for the bigquery_table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#column_descriptions GoogleAgenticApplicationsAnalystAgentPersona#column_descriptions}
  */
  readonly columnDescriptions?: { [key: string]: string };
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bigquery_dataset: cdktf.stringToTerraform(struct!.bigqueryDataset),
    bigquery_table: cdktf.stringToTerraform(struct!.bigqueryTable),
    column_descriptions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.columnDescriptions),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bigquery_dataset: {
      value: cdktf.stringToHclTerraform(struct!.bigqueryDataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bigquery_table: {
      value: cdktf.stringToHclTerraform(struct!.bigqueryTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_descriptions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.columnDescriptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigqueryDataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDataset = this._bigqueryDataset;
    }
    if (this._bigqueryTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryTable = this._bigqueryTable;
    }
    if (this._columnDescriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDescriptions = this._columnDescriptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigqueryDataset = undefined;
      this._bigqueryTable = undefined;
      this._columnDescriptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigqueryDataset = value.bigqueryDataset;
      this._bigqueryTable = value.bigqueryTable;
      this._columnDescriptions = value.columnDescriptions;
    }
  }

  // bigquery_dataset - computed: false, optional: true, required: false
  private _bigqueryDataset?: string; 
  public get bigqueryDataset() {
    return this.getStringAttribute('bigquery_dataset');
  }
  public set bigqueryDataset(value: string) {
    this._bigqueryDataset = value;
  }
  public resetBigqueryDataset() {
    this._bigqueryDataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDatasetInput() {
    return this._bigqueryDataset;
  }

  // bigquery_table - computed: false, optional: true, required: false
  private _bigqueryTable?: string; 
  public get bigqueryTable() {
    return this.getStringAttribute('bigquery_table');
  }
  public set bigqueryTable(value: string) {
    this._bigqueryTable = value;
  }
  public resetBigqueryTable() {
    this._bigqueryTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryTableInput() {
    return this._bigqueryTable;
  }

  // column_descriptions - computed: false, optional: true, required: false
  private _columnDescriptions?: { [key: string]: string }; 
  public get columnDescriptions() {
    return this.getStringMapAttribute('column_descriptions');
  }
  public set columnDescriptions(value: { [key: string]: string }) {
    this._columnDescriptions = value;
  }
  public resetColumnDescriptions() {
    this._columnDescriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDescriptionsInput() {
    return this._columnDescriptions;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1Resource {
  /**
  * ## - Points to an f1 table to use.
  * 
  * - Expected Format:
  * - {group}.{table_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#f1_table GoogleAgenticApplicationsAnalystAgentPersona#f1_table}
  */
  readonly f1Table?: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1Resource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    f1_table: cdktf.stringToTerraform(struct!.f1Table),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1Resource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    f1_table: {
      value: cdktf.stringToHclTerraform(struct!.f1Table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1Resource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f1Table !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Table = this._f1Table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1Resource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f1Table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f1Table = value.f1Table;
    }
  }

  // f1_table - computed: false, optional: true, required: false
  private _f1Table?: string; 
  public get f1Table() {
    return this.getStringAttribute('f1_table');
  }
  public set f1Table(value: string) {
    this._f1Table = value;
  }
  public resetF1Table() {
    this._f1Table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1TableInput() {
    return this._f1Table;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_extension_restrictions GoogleAgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * The Google Cloud Storage object or folder.
  * 
  * Format: /
  * or: //
  * 
  * Note that to refer to a folder, it _must_ end in a slash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#google_cloud_storage_object GoogleAgenticApplicationsAnalystAgentPersona#google_cloud_storage_object}
  */
  readonly googleCloudStorageObject: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_extension_restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    google_cloud_storage_object: cdktf.stringToTerraform(struct!.googleCloudStorageObject),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    google_cloud_storage_object: {
      value: cdktf.stringToHclTerraform(struct!.googleCloudStorageObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._googleCloudStorageObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageObject = this._googleCloudStorageObject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._googleCloudStorageObject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._googleCloudStorageObject = value.googleCloudStorageObject;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // google_cloud_storage_object - computed: false, optional: false, required: true
  private _googleCloudStorageObject?: string; 
  public get googleCloudStorageObject() {
    return this.getStringAttribute('google_cloud_storage_object');
  }
  public set googleCloudStorageObject(value: string) {
    this._googleCloudStorageObject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageObjectInput() {
    return this._googleCloudStorageObject;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_extension_restrictions GoogleAgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * Points to a drive file to use. May refer to workspace files or folders
  * as well.  If folder is specifically, all files in the folder
  * (recursively) are used.
  * 
  * Expected Format:
  * files/{file_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_reference GoogleAgenticApplicationsAnalystAgentPersona#file_reference}
  */
  readonly fileReference?: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_extension_restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    file_reference: cdktf.stringToTerraform(struct!.fileReference),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_reference: {
      value: cdktf.stringToHclTerraform(struct!.fileReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._fileReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileReference = this._fileReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._fileReference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._fileReference = value.fileReference;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // file_reference - computed: false, optional: true, required: false
  private _fileReference?: string; 
  public get fileReference() {
    return this.getStringAttribute('file_reference');
  }
  public set fileReference(value: string) {
    this._fileReference = value;
  }
  public resetFileReference() {
    this._fileReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileReferenceInput() {
    return this._fileReference;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResource {
  /**
  * The raw file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_content GoogleAgenticApplicationsAnalystAgentPersona#file_content}
  */
  readonly fileContent: string;
  /**
  * The title of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_title GoogleAgenticApplicationsAnalystAgentPersona#file_title}
  */
  readonly fileTitle: string;
  /**
  * The mime type of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#mime_type GoogleAgenticApplicationsAnalystAgentPersona#mime_type}
  */
  readonly mimeType: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_title: cdktf.stringToTerraform(struct!.fileTitle),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_title: {
      value: cdktf.stringToHclTerraform(struct!.fileTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_type: {
      value: cdktf.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTitle = this._fileTitle;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileContent = undefined;
      this._fileTitle = undefined;
      this._mimeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileContent = value.fileContent;
      this._fileTitle = value.fileTitle;
      this._mimeType = value.mimeType;
    }
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_title - computed: false, optional: false, required: true
  private _fileTitle?: string; 
  public get fileTitle() {
    return this.getStringAttribute('file_title');
  }
  public set fileTitle(value: string) {
    this._fileTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTitleInput() {
    return this._fileTitle;
  }

  // mime_type - computed: false, optional: false, required: true
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResource {
  /**
  * A user-friendly name for this resource. This can be shown to the user
  * and used by the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#display_label GoogleAgenticApplicationsAnalystAgentPersona#display_label}
  */
  readonly displayLabel?: string;
  /**
  * A description of the resource. The model may use this, it will not be
  * shown to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#model_description GoogleAgenticApplicationsAnalystAgentPersona#model_description}
  */
  readonly modelDescription?: string;
  /**
  * If true, use RAG to retrieve relevant information from the resources.
  * 
  * Must only be set for file-based resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#use_rag GoogleAgenticApplicationsAnalystAgentPersona#use_rag}
  */
  readonly useRag?: boolean | cdktf.IResolvable;
  /**
  * bigquery_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#bigquery_resource GoogleAgenticApplicationsAnalystAgentPersona#bigquery_resource}
  */
  readonly bigqueryResource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResource;
  /**
  * f1_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#f1_resource GoogleAgenticApplicationsAnalystAgentPersona#f1_resource}
  */
  readonly f1Resource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1Resource;
  /**
  * google_cloud_storage_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#google_cloud_storage_resource GoogleAgenticApplicationsAnalystAgentPersona#google_cloud_storage_resource}
  */
  readonly googleCloudStorageResource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResource;
  /**
  * google_drive_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#google_drive_resource GoogleAgenticApplicationsAnalystAgentPersona#google_drive_resource}
  */
  readonly googleDriveResource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResource;
  /**
  * raw_file_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#raw_file_resource GoogleAgenticApplicationsAnalystAgentPersona#raw_file_resource}
  */
  readonly rawFileResource?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResource;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_label: cdktf.stringToTerraform(struct!.displayLabel),
    model_description: cdktf.stringToTerraform(struct!.modelDescription),
    use_rag: cdktf.booleanToTerraform(struct!.useRag),
    bigquery_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceToTerraform(struct!.bigqueryResource),
    f1_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceToTerraform(struct!.f1Resource),
    google_cloud_storage_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceToTerraform(struct!.googleCloudStorageResource),
    google_drive_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceToTerraform(struct!.googleDriveResource),
    raw_file_resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceToTerraform(struct!.rawFileResource),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_label: {
      value: cdktf.stringToHclTerraform(struct!.displayLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_description: {
      value: cdktf.stringToHclTerraform(struct!.modelDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_rag: {
      value: cdktf.booleanToHclTerraform(struct!.useRag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bigquery_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceToHclTerraform(struct!.bigqueryResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceList",
    },
    f1_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceToHclTerraform(struct!.f1Resource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceList",
    },
    google_cloud_storage_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceToHclTerraform(struct!.googleCloudStorageResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceList",
    },
    google_drive_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceToHclTerraform(struct!.googleDriveResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceList",
    },
    raw_file_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceToHclTerraform(struct!.rawFileResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayLabel = this._displayLabel;
    }
    if (this._modelDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDescription = this._modelDescription;
    }
    if (this._useRag !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRag = this._useRag;
    }
    if (this._bigqueryResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryResource = this._bigqueryResource?.internalValue;
    }
    if (this._f1Resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Resource = this._f1Resource?.internalValue;
    }
    if (this._googleCloudStorageResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageResource = this._googleCloudStorageResource?.internalValue;
    }
    if (this._googleDriveResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleDriveResource = this._googleDriveResource?.internalValue;
    }
    if (this._rawFileResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawFileResource = this._rawFileResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayLabel = undefined;
      this._modelDescription = undefined;
      this._useRag = undefined;
      this._bigqueryResource.internalValue = undefined;
      this._f1Resource.internalValue = undefined;
      this._googleCloudStorageResource.internalValue = undefined;
      this._googleDriveResource.internalValue = undefined;
      this._rawFileResource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayLabel = value.displayLabel;
      this._modelDescription = value.modelDescription;
      this._useRag = value.useRag;
      this._bigqueryResource.internalValue = value.bigqueryResource;
      this._f1Resource.internalValue = value.f1Resource;
      this._googleCloudStorageResource.internalValue = value.googleCloudStorageResource;
      this._googleDriveResource.internalValue = value.googleDriveResource;
      this._rawFileResource.internalValue = value.rawFileResource;
    }
  }

  // display_label - computed: false, optional: true, required: false
  private _displayLabel?: string; 
  public get displayLabel() {
    return this.getStringAttribute('display_label');
  }
  public set displayLabel(value: string) {
    this._displayLabel = value;
  }
  public resetDisplayLabel() {
    this._displayLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayLabelInput() {
    return this._displayLabel;
  }

  // model_description - computed: false, optional: true, required: false
  private _modelDescription?: string; 
  public get modelDescription() {
    return this.getStringAttribute('model_description');
  }
  public set modelDescription(value: string) {
    this._modelDescription = value;
  }
  public resetModelDescription() {
    this._modelDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDescriptionInput() {
    return this._modelDescription;
  }

  // use_rag - computed: false, optional: true, required: false
  private _useRag?: boolean | cdktf.IResolvable; 
  public get useRag() {
    return this.getBooleanAttribute('use_rag');
  }
  public set useRag(value: boolean | cdktf.IResolvable) {
    this._useRag = value;
  }
  public resetUseRag() {
    this._useRag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRagInput() {
    return this._useRag;
  }

  // bigquery_resource - computed: false, optional: true, required: false
  private _bigqueryResource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceOutputReference(this, "bigquery_resource");
  public get bigqueryResource() {
    return this._bigqueryResource;
  }
  public putBigqueryResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResource) {
    this._bigqueryResource.internalValue = value;
  }
  public resetBigqueryResource() {
    this._bigqueryResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryResourceInput() {
    return this._bigqueryResource.internalValue;
  }

  // f1_resource - computed: false, optional: true, required: false
  private _f1Resource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceOutputReference(this, "f1_resource");
  public get f1Resource() {
    return this._f1Resource;
  }
  public putF1Resource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1Resource) {
    this._f1Resource.internalValue = value;
  }
  public resetF1Resource() {
    this._f1Resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1ResourceInput() {
    return this._f1Resource.internalValue;
  }

  // google_cloud_storage_resource - computed: false, optional: true, required: false
  private _googleCloudStorageResource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceOutputReference(this, "google_cloud_storage_resource");
  public get googleCloudStorageResource() {
    return this._googleCloudStorageResource;
  }
  public putGoogleCloudStorageResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResource) {
    this._googleCloudStorageResource.internalValue = value;
  }
  public resetGoogleCloudStorageResource() {
    this._googleCloudStorageResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageResourceInput() {
    return this._googleCloudStorageResource.internalValue;
  }

  // google_drive_resource - computed: false, optional: true, required: false
  private _googleDriveResource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceOutputReference(this, "google_drive_resource");
  public get googleDriveResource() {
    return this._googleDriveResource;
  }
  public putGoogleDriveResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResource) {
    this._googleDriveResource.internalValue = value;
  }
  public resetGoogleDriveResource() {
    this._googleDriveResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleDriveResourceInput() {
    return this._googleDriveResource.internalValue;
  }

  // raw_file_resource - computed: false, optional: true, required: false
  private _rawFileResource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceOutputReference(this, "raw_file_resource");
  public get rawFileResource() {
    return this._rawFileResource;
  }
  public putRawFileResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResource) {
    this._rawFileResource.internalValue = value;
  }
  public resetRawFileResource() {
    this._rawFileResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawFileResourceInput() {
    return this._rawFileResource.internalValue;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamples {
  /**
  * The type of the visualization (e.g. "Bar Chart", "Line Chart").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#visualization_type GoogleAgenticApplicationsAnalystAgentPersona#visualization_type}
  */
  readonly visualizationType: string;
  /**
  * resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#resource GoogleAgenticApplicationsAnalystAgentPersona#resource}
  */
  readonly resource: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResource;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visualization_type: cdktf.stringToTerraform(struct!.visualizationType),
    resource: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceToTerraform(struct!.resource),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    visualization_type: {
      value: cdktf.stringToHclTerraform(struct!.visualizationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamples | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visualizationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationType = this._visualizationType;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamples | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._visualizationType = undefined;
      this._resource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._visualizationType = value.visualizationType;
      this._resource.internalValue = value.resource;
    }
  }

  // visualization_type - computed: false, optional: false, required: true
  private _visualizationType?: string; 
  public get visualizationType() {
    return this.getStringAttribute('visualization_type');
  }
  public set visualizationType(value: string) {
    this._visualizationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationTypeInput() {
    return this._visualizationType;
  }

  // resource - computed: false, optional: false, required: true
  private _resource = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResource) {
    this._resource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesList extends cdktf.ComplexList {
  public internalValue? : GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamples[] | cdktf.IResolvable

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
  public get(index: number): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesOutputReference {
    return new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptions {
  /**
  * visualization_examples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#visualization_examples GoogleAgenticApplicationsAnalystAgentPersona#visualization_examples}
  */
  readonly visualizationExamples?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamples[] | cdktf.IResolvable;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visualization_examples: cdktf.listMapper(googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesToTerraform, true)(struct!.visualizationExamples),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    visualization_examples: {
      value: cdktf.listMapperHcl(googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesToHclTerraform, true)(struct!.visualizationExamples),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visualizationExamples?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationExamples = this._visualizationExamples?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visualizationExamples.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visualizationExamples.internalValue = value.visualizationExamples;
    }
  }

  // visualization_examples - computed: false, optional: true, required: false
  private _visualizationExamples = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesList(this, "visualization_examples", false);
  public get visualizationExamples() {
    return this._visualizationExamples;
  }
  public putVisualizationExamples(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamples[] | cdktf.IResolvable) {
    this._visualizationExamples.internalValue = value;
  }
  public resetVisualizationExamples() {
    this._visualizationExamples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationExamplesInput() {
    return this._visualizationExamples.internalValue;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfig {
  /**
  * document_generation_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#document_generation_options GoogleAgenticApplicationsAnalystAgentPersona#document_generation_options}
  */
  readonly documentGenerationOptions?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptions;
  /**
  * slide_generation_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#slide_generation_options GoogleAgenticApplicationsAnalystAgentPersona#slide_generation_options}
  */
  readonly slideGenerationOptions?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptions;
  /**
  * visualization_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#visualization_options GoogleAgenticApplicationsAnalystAgentPersona#visualization_options}
  */
  readonly visualizationOptions?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptions;
}

export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    document_generation_options: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsToTerraform(struct!.documentGenerationOptions),
    slide_generation_options: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsToTerraform(struct!.slideGenerationOptions),
    visualization_options: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsToTerraform(struct!.visualizationOptions),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    document_generation_options: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsToHclTerraform(struct!.documentGenerationOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsList",
    },
    slide_generation_options: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsToHclTerraform(struct!.slideGenerationOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsList",
    },
    visualization_options: {
      value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsToHclTerraform(struct!.visualizationOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentGenerationOptions = this._documentGenerationOptions?.internalValue;
    }
    if (this._slideGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slideGenerationOptions = this._slideGenerationOptions?.internalValue;
    }
    if (this._visualizationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationOptions = this._visualizationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._documentGenerationOptions.internalValue = undefined;
      this._slideGenerationOptions.internalValue = undefined;
      this._visualizationOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._documentGenerationOptions.internalValue = value.documentGenerationOptions;
      this._slideGenerationOptions.internalValue = value.slideGenerationOptions;
      this._visualizationOptions.internalValue = value.visualizationOptions;
    }
  }

  // document_generation_options - computed: false, optional: true, required: false
  private _documentGenerationOptions = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsOutputReference(this, "document_generation_options");
  public get documentGenerationOptions() {
    return this._documentGenerationOptions;
  }
  public putDocumentGenerationOptions(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptions) {
    this._documentGenerationOptions.internalValue = value;
  }
  public resetDocumentGenerationOptions() {
    this._documentGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentGenerationOptionsInput() {
    return this._documentGenerationOptions.internalValue;
  }

  // slide_generation_options - computed: false, optional: true, required: false
  private _slideGenerationOptions = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsOutputReference(this, "slide_generation_options");
  public get slideGenerationOptions() {
    return this._slideGenerationOptions;
  }
  public putSlideGenerationOptions(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptions) {
    this._slideGenerationOptions.internalValue = value;
  }
  public resetSlideGenerationOptions() {
    this._slideGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slideGenerationOptionsInput() {
    return this._slideGenerationOptions.internalValue;
  }

  // visualization_options - computed: false, optional: true, required: false
  private _visualizationOptions = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsOutputReference(this, "visualization_options");
  public get visualizationOptions() {
    return this._visualizationOptions;
  }
  public putVisualizationOptions(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptions) {
    this._visualizationOptions.internalValue = value;
  }
  public resetVisualizationOptions() {
    this._visualizationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationOptionsInput() {
    return this._visualizationOptions.internalValue;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQuality {
}

export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQuality): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQuality): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQuality | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQuality | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatistics {
}

export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindesk {
}

export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindesk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindesk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhub {
}

export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFred {
}

export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFredToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFredOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFredToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFredOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFred | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFred | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgar {
}

export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgar): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgar): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgar | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgar | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctions {
}

export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsda {
}

export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsda): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsda): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsda | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSources {
  /**
  * Whether this external data source is enabled for the current analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#enabled GoogleAgenticApplicationsAnalystAgentPersona#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * air_quality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#air_quality GoogleAgenticApplicationsAnalystAgentPersona#air_quality}
  */
  readonly airQuality?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQuality;
  /**
  * bureau_labor_statistics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#bureau_labor_statistics GoogleAgenticApplicationsAnalystAgentPersona#bureau_labor_statistics}
  */
  readonly bureauLaborStatistics?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatistics;
  /**
  * coindesk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#coindesk GoogleAgenticApplicationsAnalystAgentPersona#coindesk}
  */
  readonly coindesk?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindesk;
  /**
  * finnhub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#finnhub GoogleAgenticApplicationsAnalystAgentPersona#finnhub}
  */
  readonly finnhub?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhub;
  /**
  * fred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#fred GoogleAgenticApplicationsAnalystAgentPersona#fred}
  */
  readonly fred?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFred;
  /**
  * sec_edgar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#sec_edgar GoogleAgenticApplicationsAnalystAgentPersona#sec_edgar}
  */
  readonly secEdgar?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgar;
  /**
  * treasury_securities_auctions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#treasury_securities_auctions GoogleAgenticApplicationsAnalystAgentPersona#treasury_securities_auctions}
  */
  readonly treasurySecuritiesAuctions?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctions;
  /**
  * usda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#usda GoogleAgenticApplicationsAnalystAgentPersona#usda}
  */
  readonly usda?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsda;
}

export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    air_quality: googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityToTerraform(struct!.airQuality),
    bureau_labor_statistics: googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsToTerraform(struct!.bureauLaborStatistics),
    coindesk: googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskToTerraform(struct!.coindesk),
    finnhub: googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubToTerraform(struct!.finnhub),
    fred: googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFredToTerraform(struct!.fred),
    sec_edgar: googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarToTerraform(struct!.secEdgar),
    treasury_securities_auctions: googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsToTerraform(struct!.treasurySecuritiesAuctions),
    usda: googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaToTerraform(struct!.usda),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSources | cdktf.IResolvable): any {
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
    air_quality: {
      value: googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityToHclTerraform(struct!.airQuality),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityList",
    },
    bureau_labor_statistics: {
      value: googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsToHclTerraform(struct!.bureauLaborStatistics),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsList",
    },
    coindesk: {
      value: googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskToHclTerraform(struct!.coindesk),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskList",
    },
    finnhub: {
      value: googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubToHclTerraform(struct!.finnhub),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubList",
    },
    fred: {
      value: googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFredToHclTerraform(struct!.fred),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFredList",
    },
    sec_edgar: {
      value: googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarToHclTerraform(struct!.secEdgar),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarList",
    },
    treasury_securities_auctions: {
      value: googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsToHclTerraform(struct!.treasurySecuritiesAuctions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsList",
    },
    usda: {
      value: googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaToHclTerraform(struct!.usda),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._airQuality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.airQuality = this._airQuality?.internalValue;
    }
    if (this._bureauLaborStatistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bureauLaborStatistics = this._bureauLaborStatistics?.internalValue;
    }
    if (this._coindesk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coindesk = this._coindesk?.internalValue;
    }
    if (this._finnhub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.finnhub = this._finnhub?.internalValue;
    }
    if (this._fred?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fred = this._fred?.internalValue;
    }
    if (this._secEdgar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secEdgar = this._secEdgar?.internalValue;
    }
    if (this._treasurySecuritiesAuctions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.treasurySecuritiesAuctions = this._treasurySecuritiesAuctions?.internalValue;
    }
    if (this._usda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usda = this._usda?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._airQuality.internalValue = undefined;
      this._bureauLaborStatistics.internalValue = undefined;
      this._coindesk.internalValue = undefined;
      this._finnhub.internalValue = undefined;
      this._fred.internalValue = undefined;
      this._secEdgar.internalValue = undefined;
      this._treasurySecuritiesAuctions.internalValue = undefined;
      this._usda.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._airQuality.internalValue = value.airQuality;
      this._bureauLaborStatistics.internalValue = value.bureauLaborStatistics;
      this._coindesk.internalValue = value.coindesk;
      this._finnhub.internalValue = value.finnhub;
      this._fred.internalValue = value.fred;
      this._secEdgar.internalValue = value.secEdgar;
      this._treasurySecuritiesAuctions.internalValue = value.treasurySecuritiesAuctions;
      this._usda.internalValue = value.usda;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // selection_name - computed: true, optional: false, required: false
  public get selectionName() {
    return this.getStringAttribute('selection_name');
  }

  // air_quality - computed: false, optional: true, required: false
  private _airQuality = new GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityOutputReference(this, "air_quality");
  public get airQuality() {
    return this._airQuality;
  }
  public putAirQuality(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQuality) {
    this._airQuality.internalValue = value;
  }
  public resetAirQuality() {
    this._airQuality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airQualityInput() {
    return this._airQuality.internalValue;
  }

  // bureau_labor_statistics - computed: false, optional: true, required: false
  private _bureauLaborStatistics = new GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsOutputReference(this, "bureau_labor_statistics");
  public get bureauLaborStatistics() {
    return this._bureauLaborStatistics;
  }
  public putBureauLaborStatistics(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatistics) {
    this._bureauLaborStatistics.internalValue = value;
  }
  public resetBureauLaborStatistics() {
    this._bureauLaborStatistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bureauLaborStatisticsInput() {
    return this._bureauLaborStatistics.internalValue;
  }

  // coindesk - computed: false, optional: true, required: false
  private _coindesk = new GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskOutputReference(this, "coindesk");
  public get coindesk() {
    return this._coindesk;
  }
  public putCoindesk(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindesk) {
    this._coindesk.internalValue = value;
  }
  public resetCoindesk() {
    this._coindesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coindeskInput() {
    return this._coindesk.internalValue;
  }

  // finnhub - computed: false, optional: true, required: false
  private _finnhub = new GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubOutputReference(this, "finnhub");
  public get finnhub() {
    return this._finnhub;
  }
  public putFinnhub(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhub) {
    this._finnhub.internalValue = value;
  }
  public resetFinnhub() {
    this._finnhub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finnhubInput() {
    return this._finnhub.internalValue;
  }

  // fred - computed: false, optional: true, required: false
  private _fred = new GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFredOutputReference(this, "fred");
  public get fred() {
    return this._fred;
  }
  public putFred(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesFred) {
    this._fred.internalValue = value;
  }
  public resetFred() {
    this._fred.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fredInput() {
    return this._fred.internalValue;
  }

  // sec_edgar - computed: false, optional: true, required: false
  private _secEdgar = new GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarOutputReference(this, "sec_edgar");
  public get secEdgar() {
    return this._secEdgar;
  }
  public putSecEdgar(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgar) {
    this._secEdgar.internalValue = value;
  }
  public resetSecEdgar() {
    this._secEdgar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secEdgarInput() {
    return this._secEdgar.internalValue;
  }

  // treasury_securities_auctions - computed: false, optional: true, required: false
  private _treasurySecuritiesAuctions = new GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsOutputReference(this, "treasury_securities_auctions");
  public get treasurySecuritiesAuctions() {
    return this._treasurySecuritiesAuctions;
  }
  public putTreasurySecuritiesAuctions(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctions) {
    this._treasurySecuritiesAuctions.internalValue = value;
  }
  public resetTreasurySecuritiesAuctions() {
    this._treasurySecuritiesAuctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treasurySecuritiesAuctionsInput() {
    return this._treasurySecuritiesAuctions.internalValue;
  }

  // usda - computed: false, optional: true, required: false
  private _usda = new GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaOutputReference(this, "usda");
  public get usda() {
    return this._usda;
  }
  public putUsda(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsda) {
    this._usda.internalValue = value;
  }
  public resetUsda() {
    this._usda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usdaInput() {
    return this._usda.internalValue;
  }
}

export class GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSources[] | cdktf.IResolvable

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
  public get(index: number): GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesOutputReference {
    return new GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaMcpDataSources {
  /**
  * Input only. The API key of the MCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#api_key GoogleAgenticApplicationsAnalystAgentPersona#api_key}
  */
  readonly apiKey?: string;
  /**
  * The API key parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#api_key_name GoogleAgenticApplicationsAnalystAgentPersona#api_key_name}
  */
  readonly apiKeyName?: string;
  /**
  * The client ID for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#client_id GoogleAgenticApplicationsAnalystAgentPersona#client_id}
  */
  readonly clientId?: string;
  /**
  * Input only. The client secret for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#client_secret GoogleAgenticApplicationsAnalystAgentPersona#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The description of the MCP agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#description GoogleAgenticApplicationsAnalystAgentPersona#description}
  */
  readonly description: string;
  /**
  * The display name of the MCP server. Must be no longer than 63 characters
  * and can only contain letters, numbers, spaces, underscores, and hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#display_name GoogleAgenticApplicationsAnalystAgentPersona#display_name}
  */
  readonly displayName: string;
  /**
  * Whether this external data source is enabled for the current analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#enabled GoogleAgenticApplicationsAnalystAgentPersona#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The URL to use for retrieving the OAuth token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#oauth_token_url GoogleAgenticApplicationsAnalystAgentPersona#oauth_token_url}
  */
  readonly oauthTokenUrl?: string;
  /**
  * The custom prompt for the MCP agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#prompt GoogleAgenticApplicationsAnalystAgentPersona#prompt}
  */
  readonly prompt?: string;
  /**
  * The URL of the MCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#server_url GoogleAgenticApplicationsAnalystAgentPersona#server_url}
  */
  readonly serverUrl: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaMcpDataSourcesToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaMcpDataSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_key_name: cdktf.stringToTerraform(struct!.apiKeyName),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    oauth_token_url: cdktf.stringToTerraform(struct!.oauthTokenUrl),
    prompt: cdktf.stringToTerraform(struct!.prompt),
    server_url: cdktf.stringToTerraform(struct!.serverUrl),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaMcpDataSourcesToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaMcpDataSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_name: {
      value: cdktf.stringToHclTerraform(struct!.apiKeyName),
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oauth_token_url: {
      value: cdktf.stringToHclTerraform(struct!.oauthTokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt: {
      value: cdktf.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_url: {
      value: cdktf.stringToHclTerraform(struct!.serverUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaMcpDataSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaMcpDataSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyName = this._apiKeyName;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._oauthTokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthTokenUrl = this._oauthTokenUrl;
    }
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    if (this._serverUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUrl = this._serverUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaMcpDataSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiKeyName = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._enabled = undefined;
      this._oauthTokenUrl = undefined;
      this._prompt = undefined;
      this._serverUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiKeyName = value.apiKeyName;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._description = value.description;
      this._displayName = value.displayName;
      this._enabled = value.enabled;
      this._oauthTokenUrl = value.oauthTokenUrl;
      this._prompt = value.prompt;
      this._serverUrl = value.serverUrl;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_name - computed: false, optional: true, required: false
  private _apiKeyName?: string; 
  public get apiKeyName() {
    return this.getStringAttribute('api_key_name');
  }
  public set apiKeyName(value: string) {
    this._apiKeyName = value;
  }
  public resetApiKeyName() {
    this._apiKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyNameInput() {
    return this._apiKeyName;
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

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // oauth_token_url - computed: false, optional: true, required: false
  private _oauthTokenUrl?: string; 
  public get oauthTokenUrl() {
    return this.getStringAttribute('oauth_token_url');
  }
  public set oauthTokenUrl(value: string) {
    this._oauthTokenUrl = value;
  }
  public resetOauthTokenUrl() {
    this._oauthTokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenUrlInput() {
    return this._oauthTokenUrl;
  }

  // prompt - computed: false, optional: true, required: false
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  public resetPrompt() {
    this._prompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // server_url - computed: false, optional: false, required: true
  private _serverUrl?: string; 
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }
  public set serverUrl(value: string) {
    this._serverUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
  }
}

export class GoogleAgenticApplicationsAnalystAgentPersonaMcpDataSourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleAgenticApplicationsAnalystAgentPersonaMcpDataSources[] | cdktf.IResolvable

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
  public get(index: number): GoogleAgenticApplicationsAnalystAgentPersonaMcpDataSourcesOutputReference {
    return new GoogleAgenticApplicationsAnalystAgentPersonaMcpDataSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaResourcesBigqueryResource {
  /**
  * Points to a bigquery dataset to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#bigquery_dataset GoogleAgenticApplicationsAnalystAgentPersona#bigquery_dataset}
  */
  readonly bigqueryDataset?: string;
  /**
  * Points to a bigquery table to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}/tables/{table_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#bigquery_table GoogleAgenticApplicationsAnalystAgentPersona#bigquery_table}
  */
  readonly bigqueryTable?: string;
  /**
  * A map of column names to column descriptions for the bigquery_table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#column_descriptions GoogleAgenticApplicationsAnalystAgentPersona#column_descriptions}
  */
  readonly columnDescriptions?: { [key: string]: string };
}

export function googleAgenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaResourcesBigqueryResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bigquery_dataset: cdktf.stringToTerraform(struct!.bigqueryDataset),
    bigquery_table: cdktf.stringToTerraform(struct!.bigqueryTable),
    column_descriptions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.columnDescriptions),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaResourcesBigqueryResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bigquery_dataset: {
      value: cdktf.stringToHclTerraform(struct!.bigqueryDataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bigquery_table: {
      value: cdktf.stringToHclTerraform(struct!.bigqueryTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_descriptions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.columnDescriptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaResourcesBigqueryResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigqueryDataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDataset = this._bigqueryDataset;
    }
    if (this._bigqueryTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryTable = this._bigqueryTable;
    }
    if (this._columnDescriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDescriptions = this._columnDescriptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaResourcesBigqueryResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigqueryDataset = undefined;
      this._bigqueryTable = undefined;
      this._columnDescriptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigqueryDataset = value.bigqueryDataset;
      this._bigqueryTable = value.bigqueryTable;
      this._columnDescriptions = value.columnDescriptions;
    }
  }

  // bigquery_dataset - computed: false, optional: true, required: false
  private _bigqueryDataset?: string; 
  public get bigqueryDataset() {
    return this.getStringAttribute('bigquery_dataset');
  }
  public set bigqueryDataset(value: string) {
    this._bigqueryDataset = value;
  }
  public resetBigqueryDataset() {
    this._bigqueryDataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDatasetInput() {
    return this._bigqueryDataset;
  }

  // bigquery_table - computed: false, optional: true, required: false
  private _bigqueryTable?: string; 
  public get bigqueryTable() {
    return this.getStringAttribute('bigquery_table');
  }
  public set bigqueryTable(value: string) {
    this._bigqueryTable = value;
  }
  public resetBigqueryTable() {
    this._bigqueryTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryTableInput() {
    return this._bigqueryTable;
  }

  // column_descriptions - computed: false, optional: true, required: false
  private _columnDescriptions?: { [key: string]: string }; 
  public get columnDescriptions() {
    return this.getStringMapAttribute('column_descriptions');
  }
  public set columnDescriptions(value: { [key: string]: string }) {
    this._columnDescriptions = value;
  }
  public resetColumnDescriptions() {
    this._columnDescriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDescriptionsInput() {
    return this._columnDescriptions;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaResourcesF1Resource {
  /**
  * ## - Points to an f1 table to use.
  * 
  * - Expected Format:
  * - {group}.{table_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#f1_table GoogleAgenticApplicationsAnalystAgentPersona#f1_table}
  */
  readonly f1Table?: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaResourcesF1ResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaResourcesF1ResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaResourcesF1Resource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    f1_table: cdktf.stringToTerraform(struct!.f1Table),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaResourcesF1ResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaResourcesF1ResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaResourcesF1Resource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    f1_table: {
      value: cdktf.stringToHclTerraform(struct!.f1Table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaResourcesF1ResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaResourcesF1Resource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f1Table !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Table = this._f1Table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaResourcesF1Resource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f1Table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f1Table = value.f1Table;
    }
  }

  // f1_table - computed: false, optional: true, required: false
  private _f1Table?: string; 
  public get f1Table() {
    return this.getStringAttribute('f1_table');
  }
  public set f1Table(value: string) {
    this._f1Table = value;
  }
  public resetF1Table() {
    this._f1Table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1TableInput() {
    return this._f1Table;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_extension_restrictions GoogleAgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * The Google Cloud Storage object or folder.
  * 
  * Format: /
  * or: //
  * 
  * Note that to refer to a folder, it _must_ end in a slash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#google_cloud_storage_object GoogleAgenticApplicationsAnalystAgentPersona#google_cloud_storage_object}
  */
  readonly googleCloudStorageObject: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_extension_restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    google_cloud_storage_object: cdktf.stringToTerraform(struct!.googleCloudStorageObject),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    google_cloud_storage_object: {
      value: cdktf.stringToHclTerraform(struct!.googleCloudStorageObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._googleCloudStorageObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageObject = this._googleCloudStorageObject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._googleCloudStorageObject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._googleCloudStorageObject = value.googleCloudStorageObject;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // google_cloud_storage_object - computed: false, optional: false, required: true
  private _googleCloudStorageObject?: string; 
  public get googleCloudStorageObject() {
    return this.getStringAttribute('google_cloud_storage_object');
  }
  public set googleCloudStorageObject(value: string) {
    this._googleCloudStorageObject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageObjectInput() {
    return this._googleCloudStorageObject;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_extension_restrictions GoogleAgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * Points to a drive file to use. May refer to workspace files or folders
  * as well.  If folder is specifically, all files in the folder
  * (recursively) are used.
  * 
  * Expected Format:
  * files/{file_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_reference GoogleAgenticApplicationsAnalystAgentPersona#file_reference}
  */
  readonly fileReference?: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_extension_restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    file_reference: cdktf.stringToTerraform(struct!.fileReference),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_reference: {
      value: cdktf.stringToHclTerraform(struct!.fileReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._fileReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileReference = this._fileReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._fileReference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._fileReference = value.fileReference;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // file_reference - computed: false, optional: true, required: false
  private _fileReference?: string; 
  public get fileReference() {
    return this.getStringAttribute('file_reference');
  }
  public set fileReference(value: string) {
    this._fileReference = value;
  }
  public resetFileReference() {
    this._fileReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileReferenceInput() {
    return this._fileReference;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaResourcesRawFileResource {
  /**
  * The raw file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_content GoogleAgenticApplicationsAnalystAgentPersona#file_content}
  */
  readonly fileContent: string;
  /**
  * The title of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#file_title GoogleAgenticApplicationsAnalystAgentPersona#file_title}
  */
  readonly fileTitle: string;
  /**
  * The mime type of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#mime_type GoogleAgenticApplicationsAnalystAgentPersona#mime_type}
  */
  readonly mimeType: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaResourcesRawFileResourceToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaResourcesRawFileResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaResourcesRawFileResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_title: cdktf.stringToTerraform(struct!.fileTitle),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaResourcesRawFileResourceToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaResourcesRawFileResourceOutputReference | GoogleAgenticApplicationsAnalystAgentPersonaResourcesRawFileResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_title: {
      value: cdktf.stringToHclTerraform(struct!.fileTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_type: {
      value: cdktf.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaResourcesRawFileResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaResourcesRawFileResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTitle = this._fileTitle;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaResourcesRawFileResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileContent = undefined;
      this._fileTitle = undefined;
      this._mimeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileContent = value.fileContent;
      this._fileTitle = value.fileTitle;
      this._mimeType = value.mimeType;
    }
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_title - computed: false, optional: false, required: true
  private _fileTitle?: string; 
  public get fileTitle() {
    return this.getStringAttribute('file_title');
  }
  public set fileTitle(value: string) {
    this._fileTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTitleInput() {
    return this._fileTitle;
  }

  // mime_type - computed: false, optional: false, required: true
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaResources {
  /**
  * A user-friendly name for this resource. This can be shown to the user
  * and used by the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#display_label GoogleAgenticApplicationsAnalystAgentPersona#display_label}
  */
  readonly displayLabel?: string;
  /**
  * A description of the resource. The model may use this, it will not be
  * shown to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#model_description GoogleAgenticApplicationsAnalystAgentPersona#model_description}
  */
  readonly modelDescription?: string;
  /**
  * If true, use RAG to retrieve relevant information from the resources.
  * 
  * Must only be set for file-based resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#use_rag GoogleAgenticApplicationsAnalystAgentPersona#use_rag}
  */
  readonly useRag?: boolean | cdktf.IResolvable;
  /**
  * bigquery_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#bigquery_resource GoogleAgenticApplicationsAnalystAgentPersona#bigquery_resource}
  */
  readonly bigqueryResource?: GoogleAgenticApplicationsAnalystAgentPersonaResourcesBigqueryResource;
  /**
  * f1_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#f1_resource GoogleAgenticApplicationsAnalystAgentPersona#f1_resource}
  */
  readonly f1Resource?: GoogleAgenticApplicationsAnalystAgentPersonaResourcesF1Resource;
  /**
  * google_cloud_storage_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#google_cloud_storage_resource GoogleAgenticApplicationsAnalystAgentPersona#google_cloud_storage_resource}
  */
  readonly googleCloudStorageResource?: GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResource;
  /**
  * google_drive_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#google_drive_resource GoogleAgenticApplicationsAnalystAgentPersona#google_drive_resource}
  */
  readonly googleDriveResource?: GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResource;
  /**
  * raw_file_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#raw_file_resource GoogleAgenticApplicationsAnalystAgentPersona#raw_file_resource}
  */
  readonly rawFileResource?: GoogleAgenticApplicationsAnalystAgentPersonaResourcesRawFileResource;
}

export function googleAgenticApplicationsAnalystAgentPersonaResourcesToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_label: cdktf.stringToTerraform(struct!.displayLabel),
    model_description: cdktf.stringToTerraform(struct!.modelDescription),
    use_rag: cdktf.booleanToTerraform(struct!.useRag),
    bigquery_resource: googleAgenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceToTerraform(struct!.bigqueryResource),
    f1_resource: googleAgenticApplicationsAnalystAgentPersonaResourcesF1ResourceToTerraform(struct!.f1Resource),
    google_cloud_storage_resource: googleAgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceToTerraform(struct!.googleCloudStorageResource),
    google_drive_resource: googleAgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceToTerraform(struct!.googleDriveResource),
    raw_file_resource: googleAgenticApplicationsAnalystAgentPersonaResourcesRawFileResourceToTerraform(struct!.rawFileResource),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaResourcesToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_label: {
      value: cdktf.stringToHclTerraform(struct!.displayLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_description: {
      value: cdktf.stringToHclTerraform(struct!.modelDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_rag: {
      value: cdktf.booleanToHclTerraform(struct!.useRag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bigquery_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceToHclTerraform(struct!.bigqueryResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceList",
    },
    f1_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaResourcesF1ResourceToHclTerraform(struct!.f1Resource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaResourcesF1ResourceList",
    },
    google_cloud_storage_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceToHclTerraform(struct!.googleCloudStorageResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceList",
    },
    google_drive_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceToHclTerraform(struct!.googleDriveResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceList",
    },
    raw_file_resource: {
      value: googleAgenticApplicationsAnalystAgentPersonaResourcesRawFileResourceToHclTerraform(struct!.rawFileResource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaResourcesRawFileResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayLabel = this._displayLabel;
    }
    if (this._modelDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDescription = this._modelDescription;
    }
    if (this._useRag !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRag = this._useRag;
    }
    if (this._bigqueryResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryResource = this._bigqueryResource?.internalValue;
    }
    if (this._f1Resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Resource = this._f1Resource?.internalValue;
    }
    if (this._googleCloudStorageResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageResource = this._googleCloudStorageResource?.internalValue;
    }
    if (this._googleDriveResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleDriveResource = this._googleDriveResource?.internalValue;
    }
    if (this._rawFileResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawFileResource = this._rawFileResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayLabel = undefined;
      this._modelDescription = undefined;
      this._useRag = undefined;
      this._bigqueryResource.internalValue = undefined;
      this._f1Resource.internalValue = undefined;
      this._googleCloudStorageResource.internalValue = undefined;
      this._googleDriveResource.internalValue = undefined;
      this._rawFileResource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayLabel = value.displayLabel;
      this._modelDescription = value.modelDescription;
      this._useRag = value.useRag;
      this._bigqueryResource.internalValue = value.bigqueryResource;
      this._f1Resource.internalValue = value.f1Resource;
      this._googleCloudStorageResource.internalValue = value.googleCloudStorageResource;
      this._googleDriveResource.internalValue = value.googleDriveResource;
      this._rawFileResource.internalValue = value.rawFileResource;
    }
  }

  // display_label - computed: false, optional: true, required: false
  private _displayLabel?: string; 
  public get displayLabel() {
    return this.getStringAttribute('display_label');
  }
  public set displayLabel(value: string) {
    this._displayLabel = value;
  }
  public resetDisplayLabel() {
    this._displayLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayLabelInput() {
    return this._displayLabel;
  }

  // model_description - computed: false, optional: true, required: false
  private _modelDescription?: string; 
  public get modelDescription() {
    return this.getStringAttribute('model_description');
  }
  public set modelDescription(value: string) {
    this._modelDescription = value;
  }
  public resetModelDescription() {
    this._modelDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDescriptionInput() {
    return this._modelDescription;
  }

  // use_rag - computed: false, optional: true, required: false
  private _useRag?: boolean | cdktf.IResolvable; 
  public get useRag() {
    return this.getBooleanAttribute('use_rag');
  }
  public set useRag(value: boolean | cdktf.IResolvable) {
    this._useRag = value;
  }
  public resetUseRag() {
    this._useRag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRagInput() {
    return this._useRag;
  }

  // bigquery_resource - computed: false, optional: true, required: false
  private _bigqueryResource = new GoogleAgenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceOutputReference(this, "bigquery_resource");
  public get bigqueryResource() {
    return this._bigqueryResource;
  }
  public putBigqueryResource(value: GoogleAgenticApplicationsAnalystAgentPersonaResourcesBigqueryResource) {
    this._bigqueryResource.internalValue = value;
  }
  public resetBigqueryResource() {
    this._bigqueryResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryResourceInput() {
    return this._bigqueryResource.internalValue;
  }

  // f1_resource - computed: false, optional: true, required: false
  private _f1Resource = new GoogleAgenticApplicationsAnalystAgentPersonaResourcesF1ResourceOutputReference(this, "f1_resource");
  public get f1Resource() {
    return this._f1Resource;
  }
  public putF1Resource(value: GoogleAgenticApplicationsAnalystAgentPersonaResourcesF1Resource) {
    this._f1Resource.internalValue = value;
  }
  public resetF1Resource() {
    this._f1Resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1ResourceInput() {
    return this._f1Resource.internalValue;
  }

  // google_cloud_storage_resource - computed: false, optional: true, required: false
  private _googleCloudStorageResource = new GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceOutputReference(this, "google_cloud_storage_resource");
  public get googleCloudStorageResource() {
    return this._googleCloudStorageResource;
  }
  public putGoogleCloudStorageResource(value: GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResource) {
    this._googleCloudStorageResource.internalValue = value;
  }
  public resetGoogleCloudStorageResource() {
    this._googleCloudStorageResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageResourceInput() {
    return this._googleCloudStorageResource.internalValue;
  }

  // google_drive_resource - computed: false, optional: true, required: false
  private _googleDriveResource = new GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceOutputReference(this, "google_drive_resource");
  public get googleDriveResource() {
    return this._googleDriveResource;
  }
  public putGoogleDriveResource(value: GoogleAgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResource) {
    this._googleDriveResource.internalValue = value;
  }
  public resetGoogleDriveResource() {
    this._googleDriveResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleDriveResourceInput() {
    return this._googleDriveResource.internalValue;
  }

  // raw_file_resource - computed: false, optional: true, required: false
  private _rawFileResource = new GoogleAgenticApplicationsAnalystAgentPersonaResourcesRawFileResourceOutputReference(this, "raw_file_resource");
  public get rawFileResource() {
    return this._rawFileResource;
  }
  public putRawFileResource(value: GoogleAgenticApplicationsAnalystAgentPersonaResourcesRawFileResource) {
    this._rawFileResource.internalValue = value;
  }
  public resetRawFileResource() {
    this._rawFileResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawFileResourceInput() {
    return this._rawFileResource.internalValue;
  }
}

export class GoogleAgenticApplicationsAnalystAgentPersonaResourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleAgenticApplicationsAnalystAgentPersonaResources[] | cdktf.IResolvable

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
  public get(index: number): GoogleAgenticApplicationsAnalystAgentPersonaResourcesOutputReference {
    return new GoogleAgenticApplicationsAnalystAgentPersonaResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaSkillsReferences {
  /**
  * The content of the reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#content GoogleAgenticApplicationsAnalystAgentPersona#content}
  */
  readonly content: string;
  /**
  * The identifier of the reference within the skill. Use a descriptive
  * string that reflects the reference's function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#reference_id GoogleAgenticApplicationsAnalystAgentPersona#reference_id}
  */
  readonly referenceId: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaSkillsReferencesToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaSkillsReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    reference_id: cdktf.stringToTerraform(struct!.referenceId),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaSkillsReferencesToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaSkillsReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference_id: {
      value: cdktf.stringToHclTerraform(struct!.referenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaSkillsReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaSkillsReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._referenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceId = this._referenceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaSkillsReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._referenceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._referenceId = value.referenceId;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // reference_id - computed: false, optional: false, required: true
  private _referenceId?: string; 
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }
  public set referenceId(value: string) {
    this._referenceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceIdInput() {
    return this._referenceId;
  }
}

export class GoogleAgenticApplicationsAnalystAgentPersonaSkillsReferencesList extends cdktf.ComplexList {
  public internalValue? : GoogleAgenticApplicationsAnalystAgentPersonaSkillsReferences[] | cdktf.IResolvable

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
  public get(index: number): GoogleAgenticApplicationsAnalystAgentPersonaSkillsReferencesOutputReference {
    return new GoogleAgenticApplicationsAnalystAgentPersonaSkillsReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaSkills {
  /**
  * The markdown text content of the skill.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#content GoogleAgenticApplicationsAnalystAgentPersona#content}
  */
  readonly content: string;
  /**
  * The description of the skill.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#description GoogleAgenticApplicationsAnalystAgentPersona#description}
  */
  readonly description?: string;
  /**
  * The identifier of the skill. Use a descriptive string that reflects the
  * skill's function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#skill_id GoogleAgenticApplicationsAnalystAgentPersona#skill_id}
  */
  readonly skillId: string;
  /**
  * references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#references GoogleAgenticApplicationsAnalystAgentPersona#references}
  */
  readonly references?: GoogleAgenticApplicationsAnalystAgentPersonaSkillsReferences[] | cdktf.IResolvable;
}

export function googleAgenticApplicationsAnalystAgentPersonaSkillsToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaSkills | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    description: cdktf.stringToTerraform(struct!.description),
    skill_id: cdktf.stringToTerraform(struct!.skillId),
    references: cdktf.listMapper(googleAgenticApplicationsAnalystAgentPersonaSkillsReferencesToTerraform, true)(struct!.references),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaSkillsToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaSkills | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skill_id: {
      value: cdktf.stringToHclTerraform(struct!.skillId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    references: {
      value: cdktf.listMapperHcl(googleAgenticApplicationsAnalystAgentPersonaSkillsReferencesToHclTerraform, true)(struct!.references),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaSkillsReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaSkillsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaSkills | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._skillId !== undefined) {
      hasAnyValues = true;
      internalValueResult.skillId = this._skillId;
    }
    if (this._references?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.references = this._references?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaSkills | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._description = undefined;
      this._skillId = undefined;
      this._references.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._description = value.description;
      this._skillId = value.skillId;
      this._references.internalValue = value.references;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // skill_id - computed: false, optional: false, required: true
  private _skillId?: string; 
  public get skillId() {
    return this.getStringAttribute('skill_id');
  }
  public set skillId(value: string) {
    this._skillId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skillIdInput() {
    return this._skillId;
  }

  // references - computed: false, optional: true, required: false
  private _references = new GoogleAgenticApplicationsAnalystAgentPersonaSkillsReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }
  public putReferences(value: GoogleAgenticApplicationsAnalystAgentPersonaSkillsReferences[] | cdktf.IResolvable) {
    this._references.internalValue = value;
  }
  public resetReferences() {
    this._references.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referencesInput() {
    return this._references.internalValue;
  }
}

export class GoogleAgenticApplicationsAnalystAgentPersonaSkillsList extends cdktf.ComplexList {
  public internalValue? : GoogleAgenticApplicationsAnalystAgentPersonaSkills[] | cdktf.IResolvable

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
  public get(index: number): GoogleAgenticApplicationsAnalystAgentPersonaSkillsOutputReference {
    return new GoogleAgenticApplicationsAnalystAgentPersonaSkillsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaTablesColumns {
  /**
  * The data type of the column. This should be a GoogleSQL data type.
  * Parameterized types such as PROTO, ENUM, ARRAY, STRUCT<...>, and
  * RANGE are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#data_type GoogleAgenticApplicationsAnalystAgentPersona#data_type}
  */
  readonly dataType: string;
  /**
  * The description of the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#description GoogleAgenticApplicationsAnalystAgentPersona#description}
  */
  readonly description?: string;
  /**
  * The name of the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#name GoogleAgenticApplicationsAnalystAgentPersona#name}
  */
  readonly name: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaTablesColumnsToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaTablesColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_type: cdktf.stringToTerraform(struct!.dataType),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaTablesColumnsToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaTablesColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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

export class GoogleAgenticApplicationsAnalystAgentPersonaTablesColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaTablesColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaTablesColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
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

export class GoogleAgenticApplicationsAnalystAgentPersonaTablesColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleAgenticApplicationsAnalystAgentPersonaTablesColumns[] | cdktf.IResolvable

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
  public get(index: number): GoogleAgenticApplicationsAnalystAgentPersonaTablesColumnsOutputReference {
    return new GoogleAgenticApplicationsAnalystAgentPersonaTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaTables {
  /**
  * The description of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#description GoogleAgenticApplicationsAnalystAgentPersona#description}
  */
  readonly description?: string;
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#name GoogleAgenticApplicationsAnalystAgentPersona#name}
  */
  readonly name: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#columns GoogleAgenticApplicationsAnalystAgentPersona#columns}
  */
  readonly columns?: GoogleAgenticApplicationsAnalystAgentPersonaTablesColumns[] | cdktf.IResolvable;
}

export function googleAgenticApplicationsAnalystAgentPersonaTablesToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    columns: cdktf.listMapper(googleAgenticApplicationsAnalystAgentPersonaTablesColumnsToTerraform, true)(struct!.columns),
  }
}


export function googleAgenticApplicationsAnalystAgentPersonaTablesToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    columns: {
      value: cdktf.listMapperHcl(googleAgenticApplicationsAnalystAgentPersonaTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaTablesColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgenticApplicationsAnalystAgentPersonaTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._columns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._columns.internalValue = value.columns;
    }
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

  // columns - computed: false, optional: true, required: false
  private _columns = new GoogleAgenticApplicationsAnalystAgentPersonaTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: GoogleAgenticApplicationsAnalystAgentPersonaTablesColumns[] | cdktf.IResolvable) {
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

export class GoogleAgenticApplicationsAnalystAgentPersonaTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleAgenticApplicationsAnalystAgentPersonaTables[] | cdktf.IResolvable

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
  public get(index: number): GoogleAgenticApplicationsAnalystAgentPersonaTablesOutputReference {
    return new GoogleAgenticApplicationsAnalystAgentPersonaTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAgenticApplicationsAnalystAgentPersonaTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#create GoogleAgenticApplicationsAnalystAgentPersona#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#delete GoogleAgenticApplicationsAnalystAgentPersona#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#update GoogleAgenticApplicationsAnalystAgentPersona#update}
  */
  readonly update?: string;
}

export function googleAgenticApplicationsAnalystAgentPersonaTimeoutsToTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaTimeouts | cdktf.IResolvable): any {
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


export function googleAgenticApplicationsAnalystAgentPersonaTimeoutsToHclTerraform(struct?: GoogleAgenticApplicationsAnalystAgentPersonaTimeouts | cdktf.IResolvable): any {
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

export class GoogleAgenticApplicationsAnalystAgentPersonaTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleAgenticApplicationsAnalystAgentPersonaTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleAgenticApplicationsAnalystAgentPersonaTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona google_agentic_applications_analyst_agent_persona}
*/
export class GoogleAgenticApplicationsAnalystAgentPersona extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_agentic_applications_analyst_agent_persona";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleAgenticApplicationsAnalystAgentPersona resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleAgenticApplicationsAnalystAgentPersona to import
  * @param importFromId The id of the existing GoogleAgenticApplicationsAnalystAgentPersona that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleAgenticApplicationsAnalystAgentPersona to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_agentic_applications_analyst_agent_persona", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agentic_applications_analyst_agent_persona google_agentic_applications_analyst_agent_persona} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleAgenticApplicationsAnalystAgentPersonaConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleAgenticApplicationsAnalystAgentPersonaConfig) {
    super(scope, id, {
      terraformResourceType: 'google_agentic_applications_analyst_agent_persona',
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
    this._analystAgentPersonaId = config.analystAgentPersonaId;
    this._customerContext = config.customerContext;
    this._deletionPolicy = config.deletionPolicy;
    this._displayDescription = config.displayDescription;
    this._displayName = config.displayName;
    this._geminiEnterpriseEngine = config.geminiEnterpriseEngine;
    this._id = config.id;
    this._location = config.location;
    this._modelDescription = config.modelDescription;
    this._project = config.project;
    this._role = config.role;
    this._artifactExamples.internalValue = config.artifactExamples;
    this._artifactsConfig.internalValue = config.artifactsConfig;
    this._externalDataSources.internalValue = config.externalDataSources;
    this._mcpDataSources.internalValue = config.mcpDataSources;
    this._resources.internalValue = config.resources;
    this._skills.internalValue = config.skills;
    this._tables.internalValue = config.tables;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analyst_agent_persona_id - computed: false, optional: false, required: true
  private _analystAgentPersonaId?: string; 
  public get analystAgentPersonaId() {
    return this.getStringAttribute('analyst_agent_persona_id');
  }
  public set analystAgentPersonaId(value: string) {
    this._analystAgentPersonaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analystAgentPersonaIdInput() {
    return this._analystAgentPersonaId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // customer_context - computed: false, optional: true, required: false
  private _customerContext?: string[]; 
  public get customerContext() {
    return this.getListAttribute('customer_context');
  }
  public set customerContext(value: string[]) {
    this._customerContext = value;
  }
  public resetCustomerContext() {
    this._customerContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContextInput() {
    return this._customerContext;
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

  // display_description - computed: false, optional: true, required: false
  private _displayDescription?: string; 
  public get displayDescription() {
    return this.getStringAttribute('display_description');
  }
  public set displayDescription(value: string) {
    this._displayDescription = value;
  }
  public resetDisplayDescription() {
    this._displayDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayDescriptionInput() {
    return this._displayDescription;
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

  // gemini_enterprise_engine - computed: false, optional: true, required: false
  private _geminiEnterpriseEngine?: string; 
  public get geminiEnterpriseEngine() {
    return this.getStringAttribute('gemini_enterprise_engine');
  }
  public set geminiEnterpriseEngine(value: string) {
    this._geminiEnterpriseEngine = value;
  }
  public resetGeminiEnterpriseEngine() {
    this._geminiEnterpriseEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geminiEnterpriseEngineInput() {
    return this._geminiEnterpriseEngine;
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

  // model_description - computed: false, optional: true, required: false
  private _modelDescription?: string; 
  public get modelDescription() {
    return this.getStringAttribute('model_description');
  }
  public set modelDescription(value: string) {
    this._modelDescription = value;
  }
  public resetModelDescription() {
    this._modelDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDescriptionInput() {
    return this._modelDescription;
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // artifact_examples - computed: false, optional: true, required: false
  private _artifactExamples = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesList(this, "artifact_examples", false);
  public get artifactExamples() {
    return this._artifactExamples;
  }
  public putArtifactExamples(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamples[] | cdktf.IResolvable) {
    this._artifactExamples.internalValue = value;
  }
  public resetArtifactExamples() {
    this._artifactExamples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactExamplesInput() {
    return this._artifactExamples.internalValue;
  }

  // artifacts_config - computed: false, optional: true, required: false
  private _artifactsConfig = new GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigOutputReference(this, "artifacts_config");
  public get artifactsConfig() {
    return this._artifactsConfig;
  }
  public putArtifactsConfig(value: GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfig) {
    this._artifactsConfig.internalValue = value;
  }
  public resetArtifactsConfig() {
    this._artifactsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactsConfigInput() {
    return this._artifactsConfig.internalValue;
  }

  // external_data_sources - computed: false, optional: true, required: false
  private _externalDataSources = new GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesList(this, "external_data_sources", false);
  public get externalDataSources() {
    return this._externalDataSources;
  }
  public putExternalDataSources(value: GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSources[] | cdktf.IResolvable) {
    this._externalDataSources.internalValue = value;
  }
  public resetExternalDataSources() {
    this._externalDataSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataSourcesInput() {
    return this._externalDataSources.internalValue;
  }

  // mcp_data_sources - computed: false, optional: true, required: false
  private _mcpDataSources = new GoogleAgenticApplicationsAnalystAgentPersonaMcpDataSourcesList(this, "mcp_data_sources", false);
  public get mcpDataSources() {
    return this._mcpDataSources;
  }
  public putMcpDataSources(value: GoogleAgenticApplicationsAnalystAgentPersonaMcpDataSources[] | cdktf.IResolvable) {
    this._mcpDataSources.internalValue = value;
  }
  public resetMcpDataSources() {
    this._mcpDataSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpDataSourcesInput() {
    return this._mcpDataSources.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new GoogleAgenticApplicationsAnalystAgentPersonaResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: GoogleAgenticApplicationsAnalystAgentPersonaResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // skills - computed: false, optional: true, required: false
  private _skills = new GoogleAgenticApplicationsAnalystAgentPersonaSkillsList(this, "skills", false);
  public get skills() {
    return this._skills;
  }
  public putSkills(value: GoogleAgenticApplicationsAnalystAgentPersonaSkills[] | cdktf.IResolvable) {
    this._skills.internalValue = value;
  }
  public resetSkills() {
    this._skills.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skillsInput() {
    return this._skills.internalValue;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new GoogleAgenticApplicationsAnalystAgentPersonaTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: GoogleAgenticApplicationsAnalystAgentPersonaTables[] | cdktf.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleAgenticApplicationsAnalystAgentPersonaTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleAgenticApplicationsAnalystAgentPersonaTimeouts) {
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
      analyst_agent_persona_id: cdktf.stringToTerraform(this._analystAgentPersonaId),
      customer_context: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customerContext),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      display_description: cdktf.stringToTerraform(this._displayDescription),
      display_name: cdktf.stringToTerraform(this._displayName),
      gemini_enterprise_engine: cdktf.stringToTerraform(this._geminiEnterpriseEngine),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      model_description: cdktf.stringToTerraform(this._modelDescription),
      project: cdktf.stringToTerraform(this._project),
      role: cdktf.stringToTerraform(this._role),
      artifact_examples: cdktf.listMapper(googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesToTerraform, true)(this._artifactExamples.internalValue),
      artifacts_config: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigToTerraform(this._artifactsConfig.internalValue),
      external_data_sources: cdktf.listMapper(googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesToTerraform, true)(this._externalDataSources.internalValue),
      mcp_data_sources: cdktf.listMapper(googleAgenticApplicationsAnalystAgentPersonaMcpDataSourcesToTerraform, true)(this._mcpDataSources.internalValue),
      resources: cdktf.listMapper(googleAgenticApplicationsAnalystAgentPersonaResourcesToTerraform, true)(this._resources.internalValue),
      skills: cdktf.listMapper(googleAgenticApplicationsAnalystAgentPersonaSkillsToTerraform, true)(this._skills.internalValue),
      tables: cdktf.listMapper(googleAgenticApplicationsAnalystAgentPersonaTablesToTerraform, true)(this._tables.internalValue),
      timeouts: googleAgenticApplicationsAnalystAgentPersonaTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analyst_agent_persona_id: {
        value: cdktf.stringToHclTerraform(this._analystAgentPersonaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_context: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customerContext),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      deletion_policy: {
        value: cdktf.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_description: {
        value: cdktf.stringToHclTerraform(this._displayDescription),
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
      gemini_enterprise_engine: {
        value: cdktf.stringToHclTerraform(this._geminiEnterpriseEngine),
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
      model_description: {
        value: cdktf.stringToHclTerraform(this._modelDescription),
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
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifact_examples: {
        value: cdktf.listMapperHcl(googleAgenticApplicationsAnalystAgentPersonaArtifactExamplesToHclTerraform, true)(this._artifactExamples.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactExamplesList",
      },
      artifacts_config: {
        value: googleAgenticApplicationsAnalystAgentPersonaArtifactsConfigToHclTerraform(this._artifactsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaArtifactsConfigList",
      },
      external_data_sources: {
        value: cdktf.listMapperHcl(googleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesToHclTerraform, true)(this._externalDataSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaExternalDataSourcesList",
      },
      mcp_data_sources: {
        value: cdktf.listMapperHcl(googleAgenticApplicationsAnalystAgentPersonaMcpDataSourcesToHclTerraform, true)(this._mcpDataSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaMcpDataSourcesList",
      },
      resources: {
        value: cdktf.listMapperHcl(googleAgenticApplicationsAnalystAgentPersonaResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaResourcesList",
      },
      skills: {
        value: cdktf.listMapperHcl(googleAgenticApplicationsAnalystAgentPersonaSkillsToHclTerraform, true)(this._skills.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaSkillsList",
      },
      tables: {
        value: cdktf.listMapperHcl(googleAgenticApplicationsAnalystAgentPersonaTablesToHclTerraform, true)(this._tables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaTablesList",
      },
      timeouts: {
        value: googleAgenticApplicationsAnalystAgentPersonaTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleAgenticApplicationsAnalystAgentPersonaTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
