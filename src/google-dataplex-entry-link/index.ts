// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataplexEntryLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#deletion_policy GoogleDataplexEntryLink#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The id of the entry group this entry link is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#entry_group_id GoogleDataplexEntryLink#entry_group_id}
  */
  readonly entryGroupId: string;
  /**
  * The id of the entry link to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#entry_link_id GoogleDataplexEntryLink#entry_link_id}
  */
  readonly entryLinkId: string;
  /**
  * Relative resource name of the Entry Link Type used to create this Entry Link. For example:
  * projects/dataplex-types/locations/global/entryLinkTypes/definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#entry_link_type GoogleDataplexEntryLink#entry_link_type}
  */
  readonly entryLinkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#id GoogleDataplexEntryLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#location GoogleDataplexEntryLink#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#project GoogleDataplexEntryLink#project}
  */
  readonly project?: string;
  /**
  * aspects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#aspects GoogleDataplexEntryLink#aspects}
  */
  readonly aspects?: GoogleDataplexEntryLinkAspects[] | cdktf.IResolvable;
  /**
  * entry_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#entry_references GoogleDataplexEntryLink#entry_references}
  */
  readonly entryReferences: GoogleDataplexEntryLinkEntryReferences[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#timeouts GoogleDataplexEntryLink#timeouts}
  */
  readonly timeouts?: GoogleDataplexEntryLinkTimeouts;
}
export interface GoogleDataplexEntryLinkAspectsAspect {
  /**
  * The content of the aspect in JSON form, according to its aspect type schema. The maximum size of the field is 120KB (encoded as UTF-8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#data GoogleDataplexEntryLink#data}
  */
  readonly data: string;
}

export function googleDataplexEntryLinkAspectsAspectToTerraform(struct?: GoogleDataplexEntryLinkAspectsAspectOutputReference | GoogleDataplexEntryLinkAspectsAspect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
  }
}


export function googleDataplexEntryLinkAspectsAspectToHclTerraform(struct?: GoogleDataplexEntryLinkAspectsAspectOutputReference | GoogleDataplexEntryLinkAspectsAspect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexEntryLinkAspectsAspectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexEntryLinkAspectsAspect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexEntryLinkAspectsAspect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
    }
  }

  // aspect_type - computed: true, optional: false, required: false
  public get aspectType() {
    return this.getStringAttribute('aspect_type');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}
export interface GoogleDataplexEntryLinkAspects {
  /**
  * The map keys of the Aspects which the service should modify.
  * It should be the aspect type reference in the format '{project_number}.{location_id}.{aspect_type_id}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#aspect_key GoogleDataplexEntryLink#aspect_key}
  */
  readonly aspectKey: string;
  /**
  * aspect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#aspect GoogleDataplexEntryLink#aspect}
  */
  readonly aspect: GoogleDataplexEntryLinkAspectsAspect;
}

export function googleDataplexEntryLinkAspectsToTerraform(struct?: GoogleDataplexEntryLinkAspects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aspect_key: cdktf.stringToTerraform(struct!.aspectKey),
    aspect: googleDataplexEntryLinkAspectsAspectToTerraform(struct!.aspect),
  }
}


export function googleDataplexEntryLinkAspectsToHclTerraform(struct?: GoogleDataplexEntryLinkAspects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aspect_key: {
      value: cdktf.stringToHclTerraform(struct!.aspectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aspect: {
      value: googleDataplexEntryLinkAspectsAspectToHclTerraform(struct!.aspect),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexEntryLinkAspectsAspectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexEntryLinkAspectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataplexEntryLinkAspects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aspectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspectKey = this._aspectKey;
    }
    if (this._aspect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspect = this._aspect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexEntryLinkAspects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aspectKey = undefined;
      this._aspect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aspectKey = value.aspectKey;
      this._aspect.internalValue = value.aspect;
    }
  }

  // aspect_key - computed: false, optional: false, required: true
  private _aspectKey?: string; 
  public get aspectKey() {
    return this.getStringAttribute('aspect_key');
  }
  public set aspectKey(value: string) {
    this._aspectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectKeyInput() {
    return this._aspectKey;
  }

  // aspect - computed: false, optional: false, required: true
  private _aspect = new GoogleDataplexEntryLinkAspectsAspectOutputReference(this, "aspect");
  public get aspect() {
    return this._aspect;
  }
  public putAspect(value: GoogleDataplexEntryLinkAspectsAspect) {
    this._aspect.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectInput() {
    return this._aspect.internalValue;
  }
}

export class GoogleDataplexEntryLinkAspectsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataplexEntryLinkAspects[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataplexEntryLinkAspectsOutputReference {
    return new GoogleDataplexEntryLinkAspectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataplexEntryLinkEntryReferences {
  /**
  * The relative resource name of the referenced Entry, of the form:
  * projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#name GoogleDataplexEntryLink#name}
  */
  readonly name: string;
  /**
  * The path in the Entry that is referenced in the Entry Link.
  * Empty path denotes that the Entry itself is referenced in the Entry Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#path GoogleDataplexEntryLink#path}
  */
  readonly path?: string;
  /**
  * The reference type of the Entry. Possible values: ["SOURCE", "TARGET"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#type GoogleDataplexEntryLink#type}
  */
  readonly type?: string;
}

export function googleDataplexEntryLinkEntryReferencesToTerraform(struct?: GoogleDataplexEntryLinkEntryReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleDataplexEntryLinkEntryReferencesToHclTerraform(struct?: GoogleDataplexEntryLinkEntryReferences | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexEntryLinkEntryReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataplexEntryLinkEntryReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexEntryLinkEntryReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._type = value.type;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class GoogleDataplexEntryLinkEntryReferencesList extends cdktf.ComplexList {
  public internalValue? : GoogleDataplexEntryLinkEntryReferences[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataplexEntryLinkEntryReferencesOutputReference {
    return new GoogleDataplexEntryLinkEntryReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataplexEntryLinkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#create GoogleDataplexEntryLink#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#delete GoogleDataplexEntryLink#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#update GoogleDataplexEntryLink#update}
  */
  readonly update?: string;
}

export function googleDataplexEntryLinkTimeoutsToTerraform(struct?: GoogleDataplexEntryLinkTimeouts | cdktf.IResolvable): any {
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


export function googleDataplexEntryLinkTimeoutsToHclTerraform(struct?: GoogleDataplexEntryLinkTimeouts | cdktf.IResolvable): any {
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

export class GoogleDataplexEntryLinkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDataplexEntryLinkTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDataplexEntryLinkTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link google_dataplex_entry_link}
*/
export class GoogleDataplexEntryLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataplex_entry_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDataplexEntryLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDataplexEntryLink to import
  * @param importFromId The id of the existing GoogleDataplexEntryLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDataplexEntryLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dataplex_entry_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_dataplex_entry_link google_dataplex_entry_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataplexEntryLinkConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataplexEntryLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataplex_entry_link',
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
    this._entryGroupId = config.entryGroupId;
    this._entryLinkId = config.entryLinkId;
    this._entryLinkType = config.entryLinkType;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._aspects.internalValue = config.aspects;
    this._entryReferences.internalValue = config.entryReferences;
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

  // entry_group_id - computed: false, optional: false, required: true
  private _entryGroupId?: string; 
  public get entryGroupId() {
    return this.getStringAttribute('entry_group_id');
  }
  public set entryGroupId(value: string) {
    this._entryGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryGroupIdInput() {
    return this._entryGroupId;
  }

  // entry_link_id - computed: false, optional: false, required: true
  private _entryLinkId?: string; 
  public get entryLinkId() {
    return this.getStringAttribute('entry_link_id');
  }
  public set entryLinkId(value: string) {
    this._entryLinkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryLinkIdInput() {
    return this._entryLinkId;
  }

  // entry_link_type - computed: false, optional: false, required: true
  private _entryLinkType?: string; 
  public get entryLinkType() {
    return this.getStringAttribute('entry_link_type');
  }
  public set entryLinkType(value: string) {
    this._entryLinkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryLinkTypeInput() {
    return this._entryLinkType;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // aspects - computed: false, optional: true, required: false
  private _aspects = new GoogleDataplexEntryLinkAspectsList(this, "aspects", false);
  public get aspects() {
    return this._aspects;
  }
  public putAspects(value: GoogleDataplexEntryLinkAspects[] | cdktf.IResolvable) {
    this._aspects.internalValue = value;
  }
  public resetAspects() {
    this._aspects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectsInput() {
    return this._aspects.internalValue;
  }

  // entry_references - computed: false, optional: false, required: true
  private _entryReferences = new GoogleDataplexEntryLinkEntryReferencesList(this, "entry_references", false);
  public get entryReferences() {
    return this._entryReferences;
  }
  public putEntryReferences(value: GoogleDataplexEntryLinkEntryReferences[] | cdktf.IResolvable) {
    this._entryReferences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryReferencesInput() {
    return this._entryReferences.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDataplexEntryLinkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDataplexEntryLinkTimeouts) {
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
      entry_group_id: cdktf.stringToTerraform(this._entryGroupId),
      entry_link_id: cdktf.stringToTerraform(this._entryLinkId),
      entry_link_type: cdktf.stringToTerraform(this._entryLinkType),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      aspects: cdktf.listMapper(googleDataplexEntryLinkAspectsToTerraform, true)(this._aspects.internalValue),
      entry_references: cdktf.listMapper(googleDataplexEntryLinkEntryReferencesToTerraform, true)(this._entryReferences.internalValue),
      timeouts: googleDataplexEntryLinkTimeoutsToTerraform(this._timeouts.internalValue),
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
      entry_group_id: {
        value: cdktf.stringToHclTerraform(this._entryGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry_link_id: {
        value: cdktf.stringToHclTerraform(this._entryLinkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry_link_type: {
        value: cdktf.stringToHclTerraform(this._entryLinkType),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aspects: {
        value: cdktf.listMapperHcl(googleDataplexEntryLinkAspectsToHclTerraform, true)(this._aspects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataplexEntryLinkAspectsList",
      },
      entry_references: {
        value: cdktf.listMapperHcl(googleDataplexEntryLinkEntryReferencesToHclTerraform, true)(this._entryReferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataplexEntryLinkEntryReferencesList",
      },
      timeouts: {
        value: googleDataplexEntryLinkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDataplexEntryLinkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
