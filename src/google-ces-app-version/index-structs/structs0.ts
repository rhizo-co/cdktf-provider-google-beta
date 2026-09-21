import * as cdktf from 'cdktf';
export interface GoogleCesAppVersionSnapshotAgentsAfterAgentCallbacks {
}

export function googleCesAppVersionSnapshotAgentsAfterAgentCallbacksToTerraform(struct?: GoogleCesAppVersionSnapshotAgentsAfterAgentCallbacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAgentsAfterAgentCallbacksToHclTerraform(struct?: GoogleCesAppVersionSnapshotAgentsAfterAgentCallbacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAgentsAfterAgentCallbacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAgentsAfterAgentCallbacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAgentsAfterAgentCallbacks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class GoogleCesAppVersionSnapshotAgentsAfterAgentCallbacksList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAgentsAfterAgentCallbacksOutputReference {
    return new GoogleCesAppVersionSnapshotAgentsAfterAgentCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAgentsAfterModelCallbacks {
}

export function googleCesAppVersionSnapshotAgentsAfterModelCallbacksToTerraform(struct?: GoogleCesAppVersionSnapshotAgentsAfterModelCallbacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAgentsAfterModelCallbacksToHclTerraform(struct?: GoogleCesAppVersionSnapshotAgentsAfterModelCallbacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAgentsAfterModelCallbacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAgentsAfterModelCallbacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAgentsAfterModelCallbacks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class GoogleCesAppVersionSnapshotAgentsAfterModelCallbacksList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAgentsAfterModelCallbacksOutputReference {
    return new GoogleCesAppVersionSnapshotAgentsAfterModelCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAgentsAfterToolCallbacks {
}

export function googleCesAppVersionSnapshotAgentsAfterToolCallbacksToTerraform(struct?: GoogleCesAppVersionSnapshotAgentsAfterToolCallbacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAgentsAfterToolCallbacksToHclTerraform(struct?: GoogleCesAppVersionSnapshotAgentsAfterToolCallbacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAgentsAfterToolCallbacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAgentsAfterToolCallbacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAgentsAfterToolCallbacks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class GoogleCesAppVersionSnapshotAgentsAfterToolCallbacksList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAgentsAfterToolCallbacksOutputReference {
    return new GoogleCesAppVersionSnapshotAgentsAfterToolCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAgentsBeforeAgentCallbacks {
}

export function googleCesAppVersionSnapshotAgentsBeforeAgentCallbacksToTerraform(struct?: GoogleCesAppVersionSnapshotAgentsBeforeAgentCallbacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAgentsBeforeAgentCallbacksToHclTerraform(struct?: GoogleCesAppVersionSnapshotAgentsBeforeAgentCallbacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAgentsBeforeAgentCallbacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAgentsBeforeAgentCallbacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAgentsBeforeAgentCallbacks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class GoogleCesAppVersionSnapshotAgentsBeforeAgentCallbacksList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAgentsBeforeAgentCallbacksOutputReference {
    return new GoogleCesAppVersionSnapshotAgentsBeforeAgentCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAgentsBeforeModelCallbacks {
}

export function googleCesAppVersionSnapshotAgentsBeforeModelCallbacksToTerraform(struct?: GoogleCesAppVersionSnapshotAgentsBeforeModelCallbacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAgentsBeforeModelCallbacksToHclTerraform(struct?: GoogleCesAppVersionSnapshotAgentsBeforeModelCallbacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAgentsBeforeModelCallbacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAgentsBeforeModelCallbacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAgentsBeforeModelCallbacks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class GoogleCesAppVersionSnapshotAgentsBeforeModelCallbacksList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAgentsBeforeModelCallbacksOutputReference {
    return new GoogleCesAppVersionSnapshotAgentsBeforeModelCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAgentsBeforeToolCallbacks {
}

export function googleCesAppVersionSnapshotAgentsBeforeToolCallbacksToTerraform(struct?: GoogleCesAppVersionSnapshotAgentsBeforeToolCallbacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAgentsBeforeToolCallbacksToHclTerraform(struct?: GoogleCesAppVersionSnapshotAgentsBeforeToolCallbacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAgentsBeforeToolCallbacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAgentsBeforeToolCallbacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAgentsBeforeToolCallbacks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class GoogleCesAppVersionSnapshotAgentsBeforeToolCallbacksList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAgentsBeforeToolCallbacksOutputReference {
    return new GoogleCesAppVersionSnapshotAgentsBeforeToolCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAgentsLlmAgent {
}

export function googleCesAppVersionSnapshotAgentsLlmAgentToTerraform(struct?: GoogleCesAppVersionSnapshotAgentsLlmAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAgentsLlmAgentToHclTerraform(struct?: GoogleCesAppVersionSnapshotAgentsLlmAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAgentsLlmAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAgentsLlmAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAgentsLlmAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class GoogleCesAppVersionSnapshotAgentsLlmAgentList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAgentsLlmAgentOutputReference {
    return new GoogleCesAppVersionSnapshotAgentsLlmAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAgentsModelSettings {
}

export function googleCesAppVersionSnapshotAgentsModelSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotAgentsModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAgentsModelSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAgentsModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAgentsModelSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAgentsModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAgentsModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
}

export class GoogleCesAppVersionSnapshotAgentsModelSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAgentsModelSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotAgentsModelSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAgentsRemoteDialogflowAgent {
}

export function googleCesAppVersionSnapshotAgentsRemoteDialogflowAgentToTerraform(struct?: GoogleCesAppVersionSnapshotAgentsRemoteDialogflowAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAgentsRemoteDialogflowAgentToHclTerraform(struct?: GoogleCesAppVersionSnapshotAgentsRemoteDialogflowAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAgentsRemoteDialogflowAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAgentsRemoteDialogflowAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAgentsRemoteDialogflowAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent - computed: true, optional: false, required: false
  public get agent() {
    return this.getStringAttribute('agent');
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }

  // flow_id - computed: true, optional: false, required: false
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }

  // input_variable_mapping - computed: true, optional: false, required: false
  private _inputVariableMapping = new cdktf.StringMap(this, "input_variable_mapping");
  public get inputVariableMapping() {
    return this._inputVariableMapping;
  }

  // language_code_variable - computed: true, optional: false, required: false
  public get languageCodeVariable() {
    return this.getStringAttribute('language_code_variable');
  }

  // output_variable_mapping - computed: true, optional: false, required: false
  private _outputVariableMapping = new cdktf.StringMap(this, "output_variable_mapping");
  public get outputVariableMapping() {
    return this._outputVariableMapping;
  }
}

export class GoogleCesAppVersionSnapshotAgentsRemoteDialogflowAgentList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAgentsRemoteDialogflowAgentOutputReference {
    return new GoogleCesAppVersionSnapshotAgentsRemoteDialogflowAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAgentsToolsets {
}

export function googleCesAppVersionSnapshotAgentsToolsetsToTerraform(struct?: GoogleCesAppVersionSnapshotAgentsToolsets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAgentsToolsetsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAgentsToolsets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAgentsToolsetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAgentsToolsets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAgentsToolsets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tool_ids - computed: true, optional: false, required: false
  public get toolIds() {
    return this.getListAttribute('tool_ids');
  }

  // toolset - computed: true, optional: false, required: false
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
}

export class GoogleCesAppVersionSnapshotAgentsToolsetsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAgentsToolsetsOutputReference {
    return new GoogleCesAppVersionSnapshotAgentsToolsetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferExpressionCondition {
}

export function googleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferExpressionConditionToTerraform(struct?: GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferExpressionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferExpressionConditionToHclTerraform(struct?: GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferExpressionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferExpressionConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferExpressionCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferExpressionCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferExpressionConditionList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferExpressionConditionOutputReference {
    return new GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferExpressionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferPythonCodeCondition {
}

export function googleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferPythonCodeConditionToTerraform(struct?: GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferPythonCodeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferPythonCodeConditionToHclTerraform(struct?: GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferPythonCodeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferPythonCodeConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferPythonCodeCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferPythonCodeCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferPythonCodeConditionList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferPythonCodeConditionOutputReference {
    return new GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferPythonCodeConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransfer {
}

export function googleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferToTerraform(struct?: GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferToHclTerraform(struct?: GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression_condition - computed: true, optional: false, required: false
  private _expressionCondition = new GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferExpressionConditionList(this, "expression_condition", false);
  public get expressionCondition() {
    return this._expressionCondition;
  }

  // python_code_condition - computed: true, optional: false, required: false
  private _pythonCodeCondition = new GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferPythonCodeConditionList(this, "python_code_condition", false);
  public get pythonCodeCondition() {
    return this._pythonCodeCondition;
  }
}

export class GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferOutputReference {
    return new GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferExpressionCondition {
}

export function googleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferExpressionConditionToTerraform(struct?: GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferExpressionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferExpressionConditionToHclTerraform(struct?: GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferExpressionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferExpressionConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferExpressionCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferExpressionCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferExpressionConditionList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferExpressionConditionOutputReference {
    return new GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferExpressionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransfer {
}

export function googleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferToTerraform(struct?: GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferToHclTerraform(struct?: GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression_condition - computed: true, optional: false, required: false
  private _expressionCondition = new GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferExpressionConditionList(this, "expression_condition", false);
  public get expressionCondition() {
    return this._expressionCondition;
  }
}

export class GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferOutputReference {
    return new GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAgentsTransferRules {
}

export function googleCesAppVersionSnapshotAgentsTransferRulesToTerraform(struct?: GoogleCesAppVersionSnapshotAgentsTransferRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAgentsTransferRulesToHclTerraform(struct?: GoogleCesAppVersionSnapshotAgentsTransferRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAgentsTransferRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAgentsTransferRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAgentsTransferRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // child_agent - computed: true, optional: false, required: false
  public get childAgent() {
    return this.getStringAttribute('child_agent');
  }

  // deterministic_transfer - computed: true, optional: false, required: false
  private _deterministicTransfer = new GoogleCesAppVersionSnapshotAgentsTransferRulesDeterministicTransferList(this, "deterministic_transfer", false);
  public get deterministicTransfer() {
    return this._deterministicTransfer;
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // disable_planner_transfer - computed: true, optional: false, required: false
  private _disablePlannerTransfer = new GoogleCesAppVersionSnapshotAgentsTransferRulesDisablePlannerTransferList(this, "disable_planner_transfer", false);
  public get disablePlannerTransfer() {
    return this._disablePlannerTransfer;
  }
}

export class GoogleCesAppVersionSnapshotAgentsTransferRulesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAgentsTransferRulesOutputReference {
    return new GoogleCesAppVersionSnapshotAgentsTransferRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAgents {
}

export function googleCesAppVersionSnapshotAgentsToTerraform(struct?: GoogleCesAppVersionSnapshotAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAgentsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAgentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAgents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAgents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after_agent_callbacks - computed: true, optional: false, required: false
  private _afterAgentCallbacks = new GoogleCesAppVersionSnapshotAgentsAfterAgentCallbacksList(this, "after_agent_callbacks", false);
  public get afterAgentCallbacks() {
    return this._afterAgentCallbacks;
  }

  // after_model_callbacks - computed: true, optional: false, required: false
  private _afterModelCallbacks = new GoogleCesAppVersionSnapshotAgentsAfterModelCallbacksList(this, "after_model_callbacks", false);
  public get afterModelCallbacks() {
    return this._afterModelCallbacks;
  }

  // after_tool_callbacks - computed: true, optional: false, required: false
  private _afterToolCallbacks = new GoogleCesAppVersionSnapshotAgentsAfterToolCallbacksList(this, "after_tool_callbacks", false);
  public get afterToolCallbacks() {
    return this._afterToolCallbacks;
  }

  // before_agent_callbacks - computed: true, optional: false, required: false
  private _beforeAgentCallbacks = new GoogleCesAppVersionSnapshotAgentsBeforeAgentCallbacksList(this, "before_agent_callbacks", false);
  public get beforeAgentCallbacks() {
    return this._beforeAgentCallbacks;
  }

  // before_model_callbacks - computed: true, optional: false, required: false
  private _beforeModelCallbacks = new GoogleCesAppVersionSnapshotAgentsBeforeModelCallbacksList(this, "before_model_callbacks", false);
  public get beforeModelCallbacks() {
    return this._beforeModelCallbacks;
  }

  // before_tool_callbacks - computed: true, optional: false, required: false
  private _beforeToolCallbacks = new GoogleCesAppVersionSnapshotAgentsBeforeToolCallbacksList(this, "before_tool_callbacks", false);
  public get beforeToolCallbacks() {
    return this._beforeToolCallbacks;
  }

  // child_agents - computed: true, optional: false, required: false
  public get childAgents() {
    return this.getListAttribute('child_agents');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // generated_summary - computed: true, optional: false, required: false
  public get generatedSummary() {
    return this.getStringAttribute('generated_summary');
  }

  // guardrails - computed: true, optional: false, required: false
  public get guardrails() {
    return this.getListAttribute('guardrails');
  }

  // instruction - computed: true, optional: false, required: false
  public get instruction() {
    return this.getStringAttribute('instruction');
  }

  // llm_agent - computed: true, optional: false, required: false
  private _llmAgent = new GoogleCesAppVersionSnapshotAgentsLlmAgentList(this, "llm_agent", false);
  public get llmAgent() {
    return this._llmAgent;
  }

  // model_settings - computed: true, optional: false, required: false
  private _modelSettings = new GoogleCesAppVersionSnapshotAgentsModelSettingsList(this, "model_settings", false);
  public get modelSettings() {
    return this._modelSettings;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remote_dialogflow_agent - computed: true, optional: false, required: false
  private _remoteDialogflowAgent = new GoogleCesAppVersionSnapshotAgentsRemoteDialogflowAgentList(this, "remote_dialogflow_agent", false);
  public get remoteDialogflowAgent() {
    return this._remoteDialogflowAgent;
  }

  // tools - computed: true, optional: false, required: false
  public get tools() {
    return this.getListAttribute('tools');
  }

  // toolsets - computed: true, optional: false, required: false
  private _toolsets = new GoogleCesAppVersionSnapshotAgentsToolsetsList(this, "toolsets", false);
  public get toolsets() {
    return this._toolsets;
  }

  // transfer_rules - computed: true, optional: false, required: false
  private _transferRules = new GoogleCesAppVersionSnapshotAgentsTransferRulesList(this, "transfer_rules", false);
  public get transferRules() {
    return this._transferRules;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class GoogleCesAppVersionSnapshotAgentsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAgentsOutputReference {
    return new GoogleCesAppVersionSnapshotAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfig {
}

export function googleCesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfigToTerraform(struct?: GoogleCesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gcs_uri - computed: true, optional: false, required: false
  public get gcsUri() {
    return this.getStringAttribute('gcs_uri');
  }

  // prebuilt_ambient_sound - computed: true, optional: false, required: false
  public get prebuiltAmbientSound() {
    return this.getStringAttribute('prebuilt_ambient_sound');
  }

  // volume_gain_db - computed: true, optional: false, required: false
  public get volumeGainDb() {
    return this.getNumberAttribute('volume_gain_db');
  }
}

export class GoogleCesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfigOutputReference {
    return new GoogleCesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppAudioProcessingConfigBargeInConfig {
}

export function googleCesAppVersionSnapshotAppAudioProcessingConfigBargeInConfigToTerraform(struct?: GoogleCesAppVersionSnapshotAppAudioProcessingConfigBargeInConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppAudioProcessingConfigBargeInConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppAudioProcessingConfigBargeInConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppAudioProcessingConfigBargeInConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppAudioProcessingConfigBargeInConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppAudioProcessingConfigBargeInConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // barge_in_awareness - computed: true, optional: false, required: false
  public get bargeInAwareness() {
    return this.getBooleanAttribute('barge_in_awareness');
  }
}

export class GoogleCesAppVersionSnapshotAppAudioProcessingConfigBargeInConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppAudioProcessingConfigBargeInConfigOutputReference {
    return new GoogleCesAppVersionSnapshotAppAudioProcessingConfigBargeInConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigs {
}

export function googleCesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigsToTerraform(struct?: GoogleCesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // language_code - computed: true, optional: false, required: false
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }

  // speaking_rate - computed: true, optional: false, required: false
  public get speakingRate() {
    return this.getNumberAttribute('speaking_rate');
  }

  // voice - computed: true, optional: false, required: false
  public get voice() {
    return this.getStringAttribute('voice');
  }
}

export class GoogleCesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference {
    return new GoogleCesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppAudioProcessingConfig {
}

export function googleCesAppVersionSnapshotAppAudioProcessingConfigToTerraform(struct?: GoogleCesAppVersionSnapshotAppAudioProcessingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppAudioProcessingConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppAudioProcessingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppAudioProcessingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppAudioProcessingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppAudioProcessingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ambient_sound_config - computed: true, optional: false, required: false
  private _ambientSoundConfig = new GoogleCesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfigList(this, "ambient_sound_config", false);
  public get ambientSoundConfig() {
    return this._ambientSoundConfig;
  }

  // barge_in_config - computed: true, optional: false, required: false
  private _bargeInConfig = new GoogleCesAppVersionSnapshotAppAudioProcessingConfigBargeInConfigList(this, "barge_in_config", false);
  public get bargeInConfig() {
    return this._bargeInConfig;
  }

  // inactivity_timeout - computed: true, optional: false, required: false
  public get inactivityTimeout() {
    return this.getStringAttribute('inactivity_timeout');
  }

  // synthesize_speech_configs - computed: true, optional: false, required: false
  private _synthesizeSpeechConfigs = new GoogleCesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigsList(this, "synthesize_speech_configs", true);
  public get synthesizeSpeechConfigs() {
    return this._synthesizeSpeechConfigs;
  }
}

export class GoogleCesAppVersionSnapshotAppAudioProcessingConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppAudioProcessingConfigOutputReference {
    return new GoogleCesAppVersionSnapshotAppAudioProcessingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppClientCertificateSettings {
}

export function googleCesAppVersionSnapshotAppClientCertificateSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotAppClientCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppClientCertificateSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppClientCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppClientCertificateSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppClientCertificateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppClientCertificateSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // tls_certificate - computed: true, optional: false, required: false
  public get tlsCertificate() {
    return this.getStringAttribute('tls_certificate');
  }
}

export class GoogleCesAppVersionSnapshotAppClientCertificateSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppClientCertificateSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotAppClientCertificateSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppDataStoreSettingsEngines {
}

export function googleCesAppVersionSnapshotAppDataStoreSettingsEnginesToTerraform(struct?: GoogleCesAppVersionSnapshotAppDataStoreSettingsEngines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppDataStoreSettingsEnginesToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppDataStoreSettingsEngines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppDataStoreSettingsEnginesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppDataStoreSettingsEngines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppDataStoreSettingsEngines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GoogleCesAppVersionSnapshotAppDataStoreSettingsEnginesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppDataStoreSettingsEnginesOutputReference {
    return new GoogleCesAppVersionSnapshotAppDataStoreSettingsEnginesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppDataStoreSettings {
}

export function googleCesAppVersionSnapshotAppDataStoreSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotAppDataStoreSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppDataStoreSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppDataStoreSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppDataStoreSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppDataStoreSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppDataStoreSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // engines - computed: true, optional: false, required: false
  private _engines = new GoogleCesAppVersionSnapshotAppDataStoreSettingsEnginesList(this, "engines", false);
  public get engines() {
    return this._engines;
  }
}

export class GoogleCesAppVersionSnapshotAppDataStoreSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppDataStoreSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotAppDataStoreSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppDefaultChannelProfilePersonaProperty {
}

export function googleCesAppVersionSnapshotAppDefaultChannelProfilePersonaPropertyToTerraform(struct?: GoogleCesAppVersionSnapshotAppDefaultChannelProfilePersonaProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppDefaultChannelProfilePersonaPropertyToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppDefaultChannelProfilePersonaProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppDefaultChannelProfilePersonaPropertyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppDefaultChannelProfilePersonaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppDefaultChannelProfilePersonaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // persona - computed: true, optional: false, required: false
  public get persona() {
    return this.getStringAttribute('persona');
  }
}

export class GoogleCesAppVersionSnapshotAppDefaultChannelProfilePersonaPropertyList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppDefaultChannelProfilePersonaPropertyOutputReference {
    return new GoogleCesAppVersionSnapshotAppDefaultChannelProfilePersonaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfig {
}

export function googleCesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfigToTerraform(struct?: GoogleCesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // modality - computed: true, optional: false, required: false
  public get modality() {
    return this.getStringAttribute('modality');
  }

  // theme - computed: true, optional: false, required: false
  public get theme() {
    return this.getStringAttribute('theme');
  }

  // web_widget_title - computed: true, optional: false, required: false
  public get webWidgetTitle() {
    return this.getStringAttribute('web_widget_title');
  }
}

export class GoogleCesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfigOutputReference {
    return new GoogleCesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppDefaultChannelProfileWhatsappConfig {
}

export function googleCesAppVersionSnapshotAppDefaultChannelProfileWhatsappConfigToTerraform(struct?: GoogleCesAppVersionSnapshotAppDefaultChannelProfileWhatsappConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppDefaultChannelProfileWhatsappConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppDefaultChannelProfileWhatsappConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppDefaultChannelProfileWhatsappConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppDefaultChannelProfileWhatsappConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppDefaultChannelProfileWhatsappConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }

  // phone_number_id - computed: true, optional: false, required: false
  public get phoneNumberId() {
    return this.getStringAttribute('phone_number_id');
  }

  // thumbnail_url - computed: true, optional: false, required: false
  public get thumbnailUrl() {
    return this.getStringAttribute('thumbnail_url');
  }

  // waba_id - computed: true, optional: false, required: false
  public get wabaId() {
    return this.getStringAttribute('waba_id');
  }
}

export class GoogleCesAppVersionSnapshotAppDefaultChannelProfileWhatsappConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppDefaultChannelProfileWhatsappConfigOutputReference {
    return new GoogleCesAppVersionSnapshotAppDefaultChannelProfileWhatsappConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppDefaultChannelProfile {
}

export function googleCesAppVersionSnapshotAppDefaultChannelProfileToTerraform(struct?: GoogleCesAppVersionSnapshotAppDefaultChannelProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppDefaultChannelProfileToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppDefaultChannelProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppDefaultChannelProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppDefaultChannelProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppDefaultChannelProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel_type - computed: true, optional: false, required: false
  public get channelType() {
    return this.getStringAttribute('channel_type');
  }

  // disable_barge_in_control - computed: true, optional: false, required: false
  public get disableBargeInControl() {
    return this.getBooleanAttribute('disable_barge_in_control');
  }

  // disable_dtmf - computed: true, optional: false, required: false
  public get disableDtmf() {
    return this.getBooleanAttribute('disable_dtmf');
  }

  // persona_property - computed: true, optional: false, required: false
  private _personaProperty = new GoogleCesAppVersionSnapshotAppDefaultChannelProfilePersonaPropertyList(this, "persona_property", false);
  public get personaProperty() {
    return this._personaProperty;
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // web_widget_config - computed: true, optional: false, required: false
  private _webWidgetConfig = new GoogleCesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfigList(this, "web_widget_config", false);
  public get webWidgetConfig() {
    return this._webWidgetConfig;
  }

  // whatsapp_config - computed: true, optional: false, required: false
  private _whatsappConfig = new GoogleCesAppVersionSnapshotAppDefaultChannelProfileWhatsappConfigList(this, "whatsapp_config", false);
  public get whatsappConfig() {
    return this._whatsappConfig;
  }
}

export class GoogleCesAppVersionSnapshotAppDefaultChannelProfileList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppDefaultChannelProfileOutputReference {
    return new GoogleCesAppVersionSnapshotAppDefaultChannelProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppErrorHandlingSettingsEndSessionConfig {
}

export function googleCesAppVersionSnapshotAppErrorHandlingSettingsEndSessionConfigToTerraform(struct?: GoogleCesAppVersionSnapshotAppErrorHandlingSettingsEndSessionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppErrorHandlingSettingsEndSessionConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppErrorHandlingSettingsEndSessionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppErrorHandlingSettingsEndSessionConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppErrorHandlingSettingsEndSessionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppErrorHandlingSettingsEndSessionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // escalate_session - computed: true, optional: false, required: false
  public get escalateSession() {
    return this.getBooleanAttribute('escalate_session');
  }
}

export class GoogleCesAppVersionSnapshotAppErrorHandlingSettingsEndSessionConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppErrorHandlingSettingsEndSessionConfigOutputReference {
    return new GoogleCesAppVersionSnapshotAppErrorHandlingSettingsEndSessionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppErrorHandlingSettingsFallbackResponseConfig {
}

export function googleCesAppVersionSnapshotAppErrorHandlingSettingsFallbackResponseConfigToTerraform(struct?: GoogleCesAppVersionSnapshotAppErrorHandlingSettingsFallbackResponseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppErrorHandlingSettingsFallbackResponseConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppErrorHandlingSettingsFallbackResponseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppErrorHandlingSettingsFallbackResponseConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppErrorHandlingSettingsFallbackResponseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppErrorHandlingSettingsFallbackResponseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_fallback_messages - computed: true, optional: false, required: false
  private _customFallbackMessages = new cdktf.StringMap(this, "custom_fallback_messages");
  public get customFallbackMessages() {
    return this._customFallbackMessages;
  }

  // max_fallback_attempts - computed: true, optional: false, required: false
  public get maxFallbackAttempts() {
    return this.getNumberAttribute('max_fallback_attempts');
  }
}

export class GoogleCesAppVersionSnapshotAppErrorHandlingSettingsFallbackResponseConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppErrorHandlingSettingsFallbackResponseConfigOutputReference {
    return new GoogleCesAppVersionSnapshotAppErrorHandlingSettingsFallbackResponseConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppErrorHandlingSettings {
}

export function googleCesAppVersionSnapshotAppErrorHandlingSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotAppErrorHandlingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppErrorHandlingSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppErrorHandlingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppErrorHandlingSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppErrorHandlingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppErrorHandlingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_session_config - computed: true, optional: false, required: false
  private _endSessionConfig = new GoogleCesAppVersionSnapshotAppErrorHandlingSettingsEndSessionConfigList(this, "end_session_config", false);
  public get endSessionConfig() {
    return this._endSessionConfig;
  }

  // error_handling_strategy - computed: true, optional: false, required: false
  public get errorHandlingStrategy() {
    return this.getStringAttribute('error_handling_strategy');
  }

  // fallback_response_config - computed: true, optional: false, required: false
  private _fallbackResponseConfig = new GoogleCesAppVersionSnapshotAppErrorHandlingSettingsFallbackResponseConfigList(this, "fallback_response_config", false);
  public get fallbackResponseConfig() {
    return this._fallbackResponseConfig;
  }
}

export class GoogleCesAppVersionSnapshotAppErrorHandlingSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppErrorHandlingSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotAppErrorHandlingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds {
}

export function googleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsToTerraform(struct?: GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tool_invocation_parameter_correctness_threshold - computed: true, optional: false, required: false
  public get toolInvocationParameterCorrectnessThreshold() {
    return this.getNumberAttribute('tool_invocation_parameter_correctness_threshold');
  }
}

export class GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference {
    return new GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings {
}

export function googleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extra_tool_call_behavior - computed: true, optional: false, required: false
  public get extraToolCallBehavior() {
    return this.getStringAttribute('extra_tool_call_behavior');
  }
}

export class GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds {
}

export function googleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsToTerraform(struct?: GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // overall_tool_invocation_correctness_threshold - computed: true, optional: false, required: false
  public get overallToolInvocationCorrectnessThreshold() {
    return this.getNumberAttribute('overall_tool_invocation_correctness_threshold');
  }

  // semantic_similarity_channel - computed: true, optional: false, required: false
  public get semanticSimilarityChannel() {
    return this.getStringAttribute('semantic_similarity_channel');
  }

  // semantic_similarity_success_threshold - computed: true, optional: false, required: false
  public get semanticSimilaritySuccessThreshold() {
    return this.getNumberAttribute('semantic_similarity_success_threshold');
  }
}

export class GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference {
    return new GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds {
}

export function googleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToTerraform(struct?: GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expectation_level_metrics_thresholds - computed: true, optional: false, required: false
  private _expectationLevelMetricsThresholds = new GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsList(this, "expectation_level_metrics_thresholds", false);
  public get expectationLevelMetricsThresholds() {
    return this._expectationLevelMetricsThresholds;
  }

  // tool_matching_settings - computed: true, optional: false, required: false
  private _toolMatchingSettings = new GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsList(this, "tool_matching_settings", false);
  public get toolMatchingSettings() {
    return this._toolMatchingSettings;
  }

  // turn_level_metrics_thresholds - computed: true, optional: false, required: false
  private _turnLevelMetricsThresholds = new GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsList(this, "turn_level_metrics_thresholds", false);
  public get turnLevelMetricsThresholds() {
    return this._turnLevelMetricsThresholds;
  }
}

export class GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference {
    return new GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholds {
}

export function googleCesAppVersionSnapshotAppEvaluationMetricsThresholdsToTerraform(struct?: GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppEvaluationMetricsThresholdsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // golden_evaluation_metrics_thresholds - computed: true, optional: false, required: false
  private _goldenEvaluationMetricsThresholds = new GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsList(this, "golden_evaluation_metrics_thresholds", false);
  public get goldenEvaluationMetricsThresholds() {
    return this._goldenEvaluationMetricsThresholds;
  }

  // golden_hallucination_metric_behavior - computed: true, optional: false, required: false
  public get goldenHallucinationMetricBehavior() {
    return this.getStringAttribute('golden_hallucination_metric_behavior');
  }

  // scenario_hallucination_metric_behavior - computed: true, optional: false, required: false
  public get scenarioHallucinationMetricBehavior() {
    return this.getStringAttribute('scenario_hallucination_metric_behavior');
  }
}

export class GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsOutputReference {
    return new GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppLanguageSettings {
}

export function googleCesAppVersionSnapshotAppLanguageSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotAppLanguageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppLanguageSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppLanguageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppLanguageSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppLanguageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppLanguageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_language_code - computed: true, optional: false, required: false
  public get defaultLanguageCode() {
    return this.getStringAttribute('default_language_code');
  }

  // enable_multilingual_support - computed: true, optional: false, required: false
  public get enableMultilingualSupport() {
    return this.getBooleanAttribute('enable_multilingual_support');
  }

  // fallback_action - computed: true, optional: false, required: false
  public get fallbackAction() {
    return this.getStringAttribute('fallback_action');
  }

  // supported_language_codes - computed: true, optional: false, required: false
  public get supportedLanguageCodes() {
    return this.getListAttribute('supported_language_codes');
  }
}

export class GoogleCesAppVersionSnapshotAppLanguageSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppLanguageSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotAppLanguageSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfig {
}

export function googleCesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfigToTerraform(struct?: GoogleCesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gcs_bucket - computed: true, optional: false, required: false
  public get gcsBucket() {
    return this.getStringAttribute('gcs_bucket');
  }

  // gcs_path_prefix - computed: true, optional: false, required: false
  public get gcsPathPrefix() {
    return this.getStringAttribute('gcs_path_prefix');
  }
}

export class GoogleCesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfigOutputReference {
    return new GoogleCesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettings {
}

export function googleCesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset - computed: true, optional: false, required: false
  public get dataset() {
    return this.getStringAttribute('dataset');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }
}

export class GoogleCesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettings {
}

export function googleCesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_cloud_logging - computed: true, optional: false, required: false
  public get enableCloudLogging() {
    return this.getBooleanAttribute('enable_cloud_logging');
  }
}

export class GoogleCesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettings {
}

export function googleCesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_conversation_logging - computed: true, optional: false, required: false
  public get disableConversationLogging() {
    return this.getBooleanAttribute('disable_conversation_logging');
  }

  // retention_window - computed: true, optional: false, required: false
  public get retentionWindow() {
    return this.getStringAttribute('retention_window');
  }
}

export class GoogleCesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppLoggingSettingsMetricAnalysisSettings {
}

export function googleCesAppVersionSnapshotAppLoggingSettingsMetricAnalysisSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotAppLoggingSettingsMetricAnalysisSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppLoggingSettingsMetricAnalysisSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppLoggingSettingsMetricAnalysisSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppLoggingSettingsMetricAnalysisSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppLoggingSettingsMetricAnalysisSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppLoggingSettingsMetricAnalysisSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // llm_metrics_opted_out - computed: true, optional: false, required: false
  public get llmMetricsOptedOut() {
    return this.getBooleanAttribute('llm_metrics_opted_out');
  }
}

export class GoogleCesAppVersionSnapshotAppLoggingSettingsMetricAnalysisSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppLoggingSettingsMetricAnalysisSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotAppLoggingSettingsMetricAnalysisSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppLoggingSettingsRedactionConfig {
}

export function googleCesAppVersionSnapshotAppLoggingSettingsRedactionConfigToTerraform(struct?: GoogleCesAppVersionSnapshotAppLoggingSettingsRedactionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppLoggingSettingsRedactionConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppLoggingSettingsRedactionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppLoggingSettingsRedactionConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppLoggingSettingsRedactionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppLoggingSettingsRedactionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deidentify_template - computed: true, optional: false, required: false
  public get deidentifyTemplate() {
    return this.getStringAttribute('deidentify_template');
  }

  // enable_redaction - computed: true, optional: false, required: false
  public get enableRedaction() {
    return this.getBooleanAttribute('enable_redaction');
  }

  // inspect_template - computed: true, optional: false, required: false
  public get inspectTemplate() {
    return this.getStringAttribute('inspect_template');
  }
}

export class GoogleCesAppVersionSnapshotAppLoggingSettingsRedactionConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppLoggingSettingsRedactionConfigOutputReference {
    return new GoogleCesAppVersionSnapshotAppLoggingSettingsRedactionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppLoggingSettings {
}

export function googleCesAppVersionSnapshotAppLoggingSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotAppLoggingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppLoggingSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppLoggingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppLoggingSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppLoggingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppLoggingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_recording_config - computed: true, optional: false, required: false
  private _audioRecordingConfig = new GoogleCesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfigList(this, "audio_recording_config", false);
  public get audioRecordingConfig() {
    return this._audioRecordingConfig;
  }

  // bigquery_export_settings - computed: true, optional: false, required: false
  private _bigqueryExportSettings = new GoogleCesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettingsList(this, "bigquery_export_settings", false);
  public get bigqueryExportSettings() {
    return this._bigqueryExportSettings;
  }

  // cloud_logging_settings - computed: true, optional: false, required: false
  private _cloudLoggingSettings = new GoogleCesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettingsList(this, "cloud_logging_settings", false);
  public get cloudLoggingSettings() {
    return this._cloudLoggingSettings;
  }

  // conversation_logging_settings - computed: true, optional: false, required: false
  private _conversationLoggingSettings = new GoogleCesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettingsList(this, "conversation_logging_settings", false);
  public get conversationLoggingSettings() {
    return this._conversationLoggingSettings;
  }

  // metric_analysis_settings - computed: true, optional: false, required: false
  private _metricAnalysisSettings = new GoogleCesAppVersionSnapshotAppLoggingSettingsMetricAnalysisSettingsList(this, "metric_analysis_settings", false);
  public get metricAnalysisSettings() {
    return this._metricAnalysisSettings;
  }

  // redaction_config - computed: true, optional: false, required: false
  private _redactionConfig = new GoogleCesAppVersionSnapshotAppLoggingSettingsRedactionConfigList(this, "redaction_config", false);
  public get redactionConfig() {
    return this._redactionConfig;
  }
}

export class GoogleCesAppVersionSnapshotAppLoggingSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppLoggingSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotAppLoggingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppModelSettings {
}

export function googleCesAppVersionSnapshotAppModelSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotAppModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppModelSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppModelSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
}

export class GoogleCesAppVersionSnapshotAppModelSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppModelSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotAppModelSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppTimeZoneSettings {
}

export function googleCesAppVersionSnapshotAppTimeZoneSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotAppTimeZoneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppTimeZoneSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppTimeZoneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppTimeZoneSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppTimeZoneSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppTimeZoneSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
}

export class GoogleCesAppVersionSnapshotAppTimeZoneSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppTimeZoneSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotAppTimeZoneSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppVariableDeclarationsSchema {
}

export function googleCesAppVersionSnapshotAppVariableDeclarationsSchemaToTerraform(struct?: GoogleCesAppVersionSnapshotAppVariableDeclarationsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppVariableDeclarationsSchemaToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppVariableDeclarationsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppVariableDeclarationsSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppVariableDeclarationsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppVariableDeclarationsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // any_of - computed: true, optional: false, required: false
  public get anyOf() {
    return this.getStringAttribute('any_of');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // defs - computed: true, optional: false, required: false
  public get defs() {
    return this.getStringAttribute('defs');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enum - computed: true, optional: false, required: false
  public get enum() {
    return this.getListAttribute('enum');
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getStringAttribute('items');
  }

  // nullable - computed: true, optional: false, required: false
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }

  // prefix_items - computed: true, optional: false, required: false
  public get prefixItems() {
    return this.getStringAttribute('prefix_items');
  }

  // properties - computed: true, optional: false, required: false
  public get properties() {
    return this.getStringAttribute('properties');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getListAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unique_items - computed: true, optional: false, required: false
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
}

export class GoogleCesAppVersionSnapshotAppVariableDeclarationsSchemaList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppVariableDeclarationsSchemaOutputReference {
    return new GoogleCesAppVersionSnapshotAppVariableDeclarationsSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppVariableDeclarations {
}

export function googleCesAppVersionSnapshotAppVariableDeclarationsToTerraform(struct?: GoogleCesAppVersionSnapshotAppVariableDeclarations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppVariableDeclarationsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppVariableDeclarations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppVariableDeclarationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppVariableDeclarations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppVariableDeclarations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new GoogleCesAppVersionSnapshotAppVariableDeclarationsSchemaList(this, "schema", false);
  public get schema() {
    return this._schema;
  }
}

export class GoogleCesAppVersionSnapshotAppVariableDeclarationsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppVariableDeclarationsOutputReference {
    return new GoogleCesAppVersionSnapshotAppVariableDeclarationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotAppVpcScSettings {
}

export function googleCesAppVersionSnapshotAppVpcScSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotAppVpcScSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppVpcScSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotAppVpcScSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppVpcScSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotAppVpcScSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotAppVpcScSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_origins - computed: true, optional: false, required: false
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
}

export class GoogleCesAppVersionSnapshotAppVpcScSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppVpcScSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotAppVpcScSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotApp {
}

export function googleCesAppVersionSnapshotAppToTerraform(struct?: GoogleCesAppVersionSnapshotApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotAppToHclTerraform(struct?: GoogleCesAppVersionSnapshotApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_processing_config - computed: true, optional: false, required: false
  private _audioProcessingConfig = new GoogleCesAppVersionSnapshotAppAudioProcessingConfigList(this, "audio_processing_config", false);
  public get audioProcessingConfig() {
    return this._audioProcessingConfig;
  }

  // client_certificate_settings - computed: true, optional: false, required: false
  private _clientCertificateSettings = new GoogleCesAppVersionSnapshotAppClientCertificateSettingsList(this, "client_certificate_settings", false);
  public get clientCertificateSettings() {
    return this._clientCertificateSettings;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_store_settings - computed: true, optional: false, required: false
  private _dataStoreSettings = new GoogleCesAppVersionSnapshotAppDataStoreSettingsList(this, "data_store_settings", false);
  public get dataStoreSettings() {
    return this._dataStoreSettings;
  }

  // default_channel_profile - computed: true, optional: false, required: false
  private _defaultChannelProfile = new GoogleCesAppVersionSnapshotAppDefaultChannelProfileList(this, "default_channel_profile", false);
  public get defaultChannelProfile() {
    return this._defaultChannelProfile;
  }

  // deployment_count - computed: true, optional: false, required: false
  public get deploymentCount() {
    return this.getNumberAttribute('deployment_count');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // error_handling_settings - computed: true, optional: false, required: false
  private _errorHandlingSettings = new GoogleCesAppVersionSnapshotAppErrorHandlingSettingsList(this, "error_handling_settings", false);
  public get errorHandlingSettings() {
    return this._errorHandlingSettings;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // evaluation_metrics_thresholds - computed: true, optional: false, required: false
  private _evaluationMetricsThresholds = new GoogleCesAppVersionSnapshotAppEvaluationMetricsThresholdsList(this, "evaluation_metrics_thresholds", false);
  public get evaluationMetricsThresholds() {
    return this._evaluationMetricsThresholds;
  }

  // global_instruction - computed: true, optional: false, required: false
  public get globalInstruction() {
    return this.getStringAttribute('global_instruction');
  }

  // guardrails - computed: true, optional: false, required: false
  public get guardrails() {
    return this.getListAttribute('guardrails');
  }

  // language_settings - computed: true, optional: false, required: false
  private _languageSettings = new GoogleCesAppVersionSnapshotAppLanguageSettingsList(this, "language_settings", false);
  public get languageSettings() {
    return this._languageSettings;
  }

  // logging_settings - computed: true, optional: false, required: false
  private _loggingSettings = new GoogleCesAppVersionSnapshotAppLoggingSettingsList(this, "logging_settings", false);
  public get loggingSettings() {
    return this._loggingSettings;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // model_settings - computed: true, optional: false, required: false
  private _modelSettings = new GoogleCesAppVersionSnapshotAppModelSettingsList(this, "model_settings", false);
  public get modelSettings() {
    return this._modelSettings;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // root_agent - computed: true, optional: false, required: false
  public get rootAgent() {
    return this.getStringAttribute('root_agent');
  }

  // time_zone_settings - computed: true, optional: false, required: false
  private _timeZoneSettings = new GoogleCesAppVersionSnapshotAppTimeZoneSettingsList(this, "time_zone_settings", false);
  public get timeZoneSettings() {
    return this._timeZoneSettings;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // variable_declarations - computed: true, optional: false, required: false
  private _variableDeclarations = new GoogleCesAppVersionSnapshotAppVariableDeclarationsList(this, "variable_declarations", false);
  public get variableDeclarations() {
    return this._variableDeclarations;
  }

  // vpc_sc_settings - computed: true, optional: false, required: false
  private _vpcScSettings = new GoogleCesAppVersionSnapshotAppVpcScSettingsList(this, "vpc_sc_settings", false);
  public get vpcScSettings() {
    return this._vpcScSettings;
  }
}

export class GoogleCesAppVersionSnapshotAppList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotAppOutputReference {
    return new GoogleCesAppVersionSnapshotAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotExamplesMessagesChunksAgentTransfer {
}

export function googleCesAppVersionSnapshotExamplesMessagesChunksAgentTransferToTerraform(struct?: GoogleCesAppVersionSnapshotExamplesMessagesChunksAgentTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotExamplesMessagesChunksAgentTransferToHclTerraform(struct?: GoogleCesAppVersionSnapshotExamplesMessagesChunksAgentTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotExamplesMessagesChunksAgentTransferOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotExamplesMessagesChunksAgentTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotExamplesMessagesChunksAgentTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // target_agent - computed: true, optional: false, required: false
  public get targetAgent() {
    return this.getStringAttribute('target_agent');
  }
}

export class GoogleCesAppVersionSnapshotExamplesMessagesChunksAgentTransferList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotExamplesMessagesChunksAgentTransferOutputReference {
    return new GoogleCesAppVersionSnapshotExamplesMessagesChunksAgentTransferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotExamplesMessagesChunksImage {
}

export function googleCesAppVersionSnapshotExamplesMessagesChunksImageToTerraform(struct?: GoogleCesAppVersionSnapshotExamplesMessagesChunksImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotExamplesMessagesChunksImageToHclTerraform(struct?: GoogleCesAppVersionSnapshotExamplesMessagesChunksImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotExamplesMessagesChunksImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotExamplesMessagesChunksImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotExamplesMessagesChunksImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }

  // mime_type - computed: true, optional: false, required: false
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
}

export class GoogleCesAppVersionSnapshotExamplesMessagesChunksImageList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotExamplesMessagesChunksImageOutputReference {
    return new GoogleCesAppVersionSnapshotExamplesMessagesChunksImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetTool {
}

export function googleCesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetToolToTerraform(struct?: GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetToolToHclTerraform(struct?: GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetToolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tool_id - computed: true, optional: false, required: false
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }

  // toolset - computed: true, optional: false, required: false
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
}

export class GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetToolList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetToolOutputReference {
    return new GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCall {
}

export function googleCesAppVersionSnapshotExamplesMessagesChunksToolCallToTerraform(struct?: GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotExamplesMessagesChunksToolCallToHclTerraform(struct?: GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCallOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getStringAttribute('args');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tool - computed: true, optional: false, required: false
  public get tool() {
    return this.getStringAttribute('tool');
  }

  // toolset_tool - computed: true, optional: false, required: false
  private _toolsetTool = new GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetToolList(this, "toolset_tool", false);
  public get toolsetTool() {
    return this._toolsetTool;
  }
}

export class GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCallList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCallOutputReference {
    return new GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCallOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetTool {
}

export function googleCesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetToolToTerraform(struct?: GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetToolToHclTerraform(struct?: GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetToolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tool_id - computed: true, optional: false, required: false
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }

  // toolset - computed: true, optional: false, required: false
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
}

export class GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetToolList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetToolOutputReference {
    return new GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponse {
}

export function googleCesAppVersionSnapshotExamplesMessagesChunksToolResponseToTerraform(struct?: GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotExamplesMessagesChunksToolResponseToHclTerraform(struct?: GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // response - computed: true, optional: false, required: false
  public get response() {
    return this.getStringAttribute('response');
  }

  // tool - computed: true, optional: false, required: false
  public get tool() {
    return this.getStringAttribute('tool');
  }

  // toolset_tool - computed: true, optional: false, required: false
  private _toolsetTool = new GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetToolList(this, "toolset_tool", false);
  public get toolsetTool() {
    return this._toolsetTool;
  }
}

export class GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponseList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponseOutputReference {
    return new GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotExamplesMessagesChunks {
}

export function googleCesAppVersionSnapshotExamplesMessagesChunksToTerraform(struct?: GoogleCesAppVersionSnapshotExamplesMessagesChunks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotExamplesMessagesChunksToHclTerraform(struct?: GoogleCesAppVersionSnapshotExamplesMessagesChunks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotExamplesMessagesChunksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotExamplesMessagesChunks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotExamplesMessagesChunks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_transfer - computed: true, optional: false, required: false
  private _agentTransfer = new GoogleCesAppVersionSnapshotExamplesMessagesChunksAgentTransferList(this, "agent_transfer", false);
  public get agentTransfer() {
    return this._agentTransfer;
  }

  // image - computed: true, optional: false, required: false
  private _image = new GoogleCesAppVersionSnapshotExamplesMessagesChunksImageList(this, "image", false);
  public get image() {
    return this._image;
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // tool_call - computed: true, optional: false, required: false
  private _toolCall = new GoogleCesAppVersionSnapshotExamplesMessagesChunksToolCallList(this, "tool_call", false);
  public get toolCall() {
    return this._toolCall;
  }

  // tool_response - computed: true, optional: false, required: false
  private _toolResponse = new GoogleCesAppVersionSnapshotExamplesMessagesChunksToolResponseList(this, "tool_response", false);
  public get toolResponse() {
    return this._toolResponse;
  }

  // updated_variables - computed: true, optional: false, required: false
  public get updatedVariables() {
    return this.getStringAttribute('updated_variables');
  }
}

export class GoogleCesAppVersionSnapshotExamplesMessagesChunksList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotExamplesMessagesChunksOutputReference {
    return new GoogleCesAppVersionSnapshotExamplesMessagesChunksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotExamplesMessages {
}

export function googleCesAppVersionSnapshotExamplesMessagesToTerraform(struct?: GoogleCesAppVersionSnapshotExamplesMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotExamplesMessagesToHclTerraform(struct?: GoogleCesAppVersionSnapshotExamplesMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotExamplesMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotExamplesMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotExamplesMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chunks - computed: true, optional: false, required: false
  private _chunks = new GoogleCesAppVersionSnapshotExamplesMessagesChunksList(this, "chunks", false);
  public get chunks() {
    return this._chunks;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class GoogleCesAppVersionSnapshotExamplesMessagesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotExamplesMessagesOutputReference {
    return new GoogleCesAppVersionSnapshotExamplesMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotExamples {
}

export function googleCesAppVersionSnapshotExamplesToTerraform(struct?: GoogleCesAppVersionSnapshotExamples): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotExamplesToHclTerraform(struct?: GoogleCesAppVersionSnapshotExamples): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotExamplesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotExamples | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotExamples | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // entry_agent - computed: true, optional: false, required: false
  public get entryAgent() {
    return this.getStringAttribute('entry_agent');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // messages - computed: true, optional: false, required: false
  private _messages = new GoogleCesAppVersionSnapshotExamplesMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class GoogleCesAppVersionSnapshotExamplesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotExamplesOutputReference {
    return new GoogleCesAppVersionSnapshotExamplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsActionGenerativeAnswer {
}

export function googleCesAppVersionSnapshotGuardrailsActionGenerativeAnswerToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsActionGenerativeAnswer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsActionGenerativeAnswerToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsActionGenerativeAnswer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsActionGenerativeAnswerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsActionGenerativeAnswer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsActionGenerativeAnswer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prompt - computed: true, optional: false, required: false
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsActionGenerativeAnswerList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsActionGenerativeAnswerOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsActionGenerativeAnswerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponses {
}

export function googleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponsesToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponsesToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponsesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponsesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponsesOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponsesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediately {
}

export function googleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediately): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediately): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediately | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediately | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // responses - computed: true, optional: false, required: false
  private _responses = new GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponsesList(this, "responses", false);
  public get responses() {
    return this._responses;
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsActionTransferAgent {
}

export function googleCesAppVersionSnapshotGuardrailsActionTransferAgentToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsActionTransferAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsActionTransferAgentToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsActionTransferAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsActionTransferAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsActionTransferAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsActionTransferAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent - computed: true, optional: false, required: false
  public get agent() {
    return this.getStringAttribute('agent');
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsActionTransferAgentList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsActionTransferAgentOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsActionTransferAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsAction {
}

export function googleCesAppVersionSnapshotGuardrailsActionToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsActionToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // generative_answer - computed: true, optional: false, required: false
  private _generativeAnswer = new GoogleCesAppVersionSnapshotGuardrailsActionGenerativeAnswerList(this, "generative_answer", false);
  public get generativeAnswer() {
    return this._generativeAnswer;
  }

  // respond_immediately - computed: true, optional: false, required: false
  private _respondImmediately = new GoogleCesAppVersionSnapshotGuardrailsActionRespondImmediatelyList(this, "respond_immediately", false);
  public get respondImmediately() {
    return this._respondImmediately;
  }

  // transfer_agent - computed: true, optional: false, required: false
  private _transferAgent = new GoogleCesAppVersionSnapshotGuardrailsActionTransferAgentList(this, "transfer_agent", false);
  public get transferAgent() {
    return this._transferAgent;
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsActionList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsActionOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallback {
}

export function googleCesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallbackToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallbackToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallbackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallbackList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallbackOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallbackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallback {
}

export function googleCesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallbackToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallbackToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallbackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallbackList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallbackOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallbackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallback {
}

export function googleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallbackToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallbackToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallbackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallbackList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallbackOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallbackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallback {
}

export function googleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallbackToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallbackToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallbackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallbackList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallbackOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallbackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsCodeCallback {
}

export function googleCesAppVersionSnapshotGuardrailsCodeCallbackToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsCodeCallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsCodeCallbackToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsCodeCallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsCodeCallbackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsCodeCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsCodeCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after_agent_callback - computed: true, optional: false, required: false
  private _afterAgentCallback = new GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallbackList(this, "after_agent_callback", false);
  public get afterAgentCallback() {
    return this._afterAgentCallback;
  }

  // after_model_callback - computed: true, optional: false, required: false
  private _afterModelCallback = new GoogleCesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallbackList(this, "after_model_callback", false);
  public get afterModelCallback() {
    return this._afterModelCallback;
  }

  // before_agent_callback - computed: true, optional: false, required: false
  private _beforeAgentCallback = new GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallbackList(this, "before_agent_callback", false);
  public get beforeAgentCallback() {
    return this._beforeAgentCallback;
  }

  // before_model_callback - computed: true, optional: false, required: false
  private _beforeModelCallback = new GoogleCesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallbackList(this, "before_model_callback", false);
  public get beforeModelCallback() {
    return this._beforeModelCallback;
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsCodeCallbackList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsCodeCallbackOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsCodeCallbackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsContentFilter {
}

export function googleCesAppVersionSnapshotGuardrailsContentFilterToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsContentFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsContentFilterToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsContentFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsContentFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsContentFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsContentFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // banned_contents - computed: true, optional: false, required: false
  public get bannedContents() {
    return this.getListAttribute('banned_contents');
  }

  // banned_contents_in_agent_response - computed: true, optional: false, required: false
  public get bannedContentsInAgentResponse() {
    return this.getListAttribute('banned_contents_in_agent_response');
  }

  // banned_contents_in_user_input - computed: true, optional: false, required: false
  public get bannedContentsInUserInput() {
    return this.getListAttribute('banned_contents_in_user_input');
  }

  // disregard_diacritics - computed: true, optional: false, required: false
  public get disregardDiacritics() {
    return this.getBooleanAttribute('disregard_diacritics');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsContentFilterList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsContentFilterOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsContentFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsLlmPolicyModelSettings {
}

export function googleCesAppVersionSnapshotGuardrailsLlmPolicyModelSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsLlmPolicyModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsLlmPolicyModelSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsLlmPolicyModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsLlmPolicyModelSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsLlmPolicyModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsLlmPolicyModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsLlmPolicyModelSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsLlmPolicyModelSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsLlmPolicyModelSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsLlmPolicy {
}

export function googleCesAppVersionSnapshotGuardrailsLlmPolicyToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsLlmPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsLlmPolicyToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsLlmPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsLlmPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsLlmPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsLlmPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_open - computed: true, optional: false, required: false
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }

  // max_conversation_messages - computed: true, optional: false, required: false
  public get maxConversationMessages() {
    return this.getNumberAttribute('max_conversation_messages');
  }

  // model_settings - computed: true, optional: false, required: false
  private _modelSettings = new GoogleCesAppVersionSnapshotGuardrailsLlmPolicyModelSettingsList(this, "model_settings", false);
  public get modelSettings() {
    return this._modelSettings;
  }

  // policy_scope - computed: true, optional: false, required: false
  public get policyScope() {
    return this.getStringAttribute('policy_scope');
  }

  // prompt - computed: true, optional: false, required: false
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsLlmPolicyList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsLlmPolicyOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsLlmPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettings {
}

export function googleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicy {
}

export function googleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_open - computed: true, optional: false, required: false
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }

  // max_conversation_messages - computed: true, optional: false, required: false
  public get maxConversationMessages() {
    return this.getNumberAttribute('max_conversation_messages');
  }

  // model_settings - computed: true, optional: false, required: false
  private _modelSettings = new GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettingsList(this, "model_settings", false);
  public get modelSettings() {
    return this._modelSettings;
  }

  // policy_scope - computed: true, optional: false, required: false
  public get policyScope() {
    return this.getStringAttribute('policy_scope');
  }

  // prompt - computed: true, optional: false, required: false
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettings {
}

export function googleCesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_prompt_template - computed: true, optional: false, required: false
  public get defaultPromptTemplate() {
    return this.getStringAttribute('default_prompt_template');
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurity {
}

export function googleCesAppVersionSnapshotGuardrailsLlmPromptSecurityToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsLlmPromptSecurityToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_policy - computed: true, optional: false, required: false
  private _customPolicy = new GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyList(this, "custom_policy", false);
  public get customPolicy() {
    return this._customPolicy;
  }

  // default_settings - computed: true, optional: false, required: false
  private _defaultSettings = new GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettingsList(this, "default_settings", false);
  public get defaultSettings() {
    return this._defaultSettings;
  }

  // fail_open - computed: true, optional: false, required: false
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsModelSafetySafetySettings {
}

export function googleCesAppVersionSnapshotGuardrailsModelSafetySafetySettingsToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsModelSafetySafetySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsModelSafetySafetySettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsModelSafetySafetySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsModelSafetySafetySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsModelSafetySafetySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsModelSafetySafetySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsModelSafetySafetySettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsModelSafetySafetySettingsOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsModelSafetySafetySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrailsModelSafety {
}

export function googleCesAppVersionSnapshotGuardrailsModelSafetyToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsModelSafety): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsModelSafetyToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrailsModelSafety): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsModelSafetyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrailsModelSafety | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrailsModelSafety | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // safety_settings - computed: true, optional: false, required: false
  private _safetySettings = new GoogleCesAppVersionSnapshotGuardrailsModelSafetySafetySettingsList(this, "safety_settings", false);
  public get safetySettings() {
    return this._safetySettings;
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsModelSafetyList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsModelSafetyOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsModelSafetyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotGuardrails {
}

export function googleCesAppVersionSnapshotGuardrailsToTerraform(struct?: GoogleCesAppVersionSnapshotGuardrails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotGuardrailsToHclTerraform(struct?: GoogleCesAppVersionSnapshotGuardrails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotGuardrailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotGuardrails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotGuardrails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new GoogleCesAppVersionSnapshotGuardrailsActionList(this, "action", false);
  public get action() {
    return this._action;
  }

  // code_callback - computed: true, optional: false, required: false
  private _codeCallback = new GoogleCesAppVersionSnapshotGuardrailsCodeCallbackList(this, "code_callback", false);
  public get codeCallback() {
    return this._codeCallback;
  }

  // content_filter - computed: true, optional: false, required: false
  private _contentFilter = new GoogleCesAppVersionSnapshotGuardrailsContentFilterList(this, "content_filter", false);
  public get contentFilter() {
    return this._contentFilter;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // llm_policy - computed: true, optional: false, required: false
  private _llmPolicy = new GoogleCesAppVersionSnapshotGuardrailsLlmPolicyList(this, "llm_policy", false);
  public get llmPolicy() {
    return this._llmPolicy;
  }

  // llm_prompt_security - computed: true, optional: false, required: false
  private _llmPromptSecurity = new GoogleCesAppVersionSnapshotGuardrailsLlmPromptSecurityList(this, "llm_prompt_security", false);
  public get llmPromptSecurity() {
    return this._llmPromptSecurity;
  }

  // model_safety - computed: true, optional: false, required: false
  private _modelSafety = new GoogleCesAppVersionSnapshotGuardrailsModelSafetyList(this, "model_safety", false);
  public get modelSafety() {
    return this._modelSafety;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class GoogleCesAppVersionSnapshotGuardrailsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotGuardrailsOutputReference {
    return new GoogleCesAppVersionSnapshotGuardrailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsClientFunctionParameters {
}

export function googleCesAppVersionSnapshotToolsClientFunctionParametersToTerraform(struct?: GoogleCesAppVersionSnapshotToolsClientFunctionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsClientFunctionParametersToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsClientFunctionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsClientFunctionParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsClientFunctionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsClientFunctionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // any_of - computed: true, optional: false, required: false
  public get anyOf() {
    return this.getStringAttribute('any_of');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // defs - computed: true, optional: false, required: false
  public get defs() {
    return this.getStringAttribute('defs');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enum - computed: true, optional: false, required: false
  public get enum() {
    return this.getListAttribute('enum');
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getStringAttribute('items');
  }

  // nullable - computed: true, optional: false, required: false
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }

  // prefix_items - computed: true, optional: false, required: false
  public get prefixItems() {
    return this.getStringAttribute('prefix_items');
  }

  // properties - computed: true, optional: false, required: false
  public get properties() {
    return this.getStringAttribute('properties');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getListAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unique_items - computed: true, optional: false, required: false
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
}

export class GoogleCesAppVersionSnapshotToolsClientFunctionParametersList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsClientFunctionParametersOutputReference {
    return new GoogleCesAppVersionSnapshotToolsClientFunctionParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsClientFunctionResponse {
}

export function googleCesAppVersionSnapshotToolsClientFunctionResponseToTerraform(struct?: GoogleCesAppVersionSnapshotToolsClientFunctionResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsClientFunctionResponseToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsClientFunctionResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsClientFunctionResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsClientFunctionResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsClientFunctionResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // any_of - computed: true, optional: false, required: false
  public get anyOf() {
    return this.getStringAttribute('any_of');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // defs - computed: true, optional: false, required: false
  public get defs() {
    return this.getStringAttribute('defs');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enum - computed: true, optional: false, required: false
  public get enum() {
    return this.getListAttribute('enum');
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getStringAttribute('items');
  }

  // nullable - computed: true, optional: false, required: false
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }

  // prefix_items - computed: true, optional: false, required: false
  public get prefixItems() {
    return this.getStringAttribute('prefix_items');
  }

  // properties - computed: true, optional: false, required: false
  public get properties() {
    return this.getStringAttribute('properties');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getListAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unique_items - computed: true, optional: false, required: false
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
}

export class GoogleCesAppVersionSnapshotToolsClientFunctionResponseList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsClientFunctionResponseOutputReference {
    return new GoogleCesAppVersionSnapshotToolsClientFunctionResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsClientFunction {
}

export function googleCesAppVersionSnapshotToolsClientFunctionToTerraform(struct?: GoogleCesAppVersionSnapshotToolsClientFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsClientFunctionToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsClientFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsClientFunctionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsClientFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsClientFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new GoogleCesAppVersionSnapshotToolsClientFunctionParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // response - computed: true, optional: false, required: false
  private _response = new GoogleCesAppVersionSnapshotToolsClientFunctionResponseList(this, "response", false);
  public get response() {
    return this._response;
  }
}

export class GoogleCesAppVersionSnapshotToolsClientFunctionList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsClientFunctionOutputReference {
    return new GoogleCesAppVersionSnapshotToolsClientFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints {
}

export function googleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsToTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_value - computed: true, optional: false, required: false
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }

  // boost_amount - computed: true, optional: false, required: false
  public get boostAmount() {
    return this.getNumberAttribute('boost_amount');
  }
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference {
    return new GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec {
}

export function googleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecToTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_type - computed: true, optional: false, required: false
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }

  // control_points - computed: true, optional: false, required: false
  private _controlPoints = new GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList(this, "control_points", false);
  public get controlPoints() {
    return this._controlPoints;
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // interpolation_type - computed: true, optional: false, required: false
  public get interpolationType() {
    return this.getStringAttribute('interpolation_type');
  }
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference {
    return new GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecs {
}

export function googleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsToTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boost - computed: true, optional: false, required: false
  public get boost() {
    return this.getNumberAttribute('boost');
  }

  // boost_control_spec - computed: true, optional: false, required: false
  private _boostControlSpec = new GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecList(this, "boost_control_spec", false);
  public get boostControlSpec() {
    return this._boostControlSpec;
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference {
    return new GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpec {
}

export function googleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecToTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_boost_specs - computed: true, optional: false, required: false
  private _conditionBoostSpecs = new GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsList(this, "condition_boost_specs", false);
  public get conditionBoostSpecs() {
    return this._conditionBoostSpecs;
  }
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecOutputReference {
    return new GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecs {
}

export function googleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsToTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_stores - computed: true, optional: false, required: false
  public get dataStores() {
    return this.getListAttribute('data_stores');
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsOutputReference {
    return new GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig {
}

export function googleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigToTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collection - computed: true, optional: false, required: false
  public get collection() {
    return this.getStringAttribute('collection');
  }

  // collection_display_name - computed: true, optional: false, required: false
  public get collectionDisplayName() {
    return this.getStringAttribute('collection_display_name');
  }

  // data_source - computed: true, optional: false, required: false
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference {
    return new GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStore {
}

export function googleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreToTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_config - computed: true, optional: false, required: false
  private _connectorConfig = new GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList(this, "connector_config", false);
  public get connectorConfig() {
    return this._connectorConfig;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // document_processing_mode - computed: true, optional: false, required: false
  public get documentProcessingMode() {
    return this.getStringAttribute('document_processing_mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference {
    return new GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSources {
}

export function googleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesToTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_store - computed: true, optional: false, required: false
  private _dataStore = new GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreList(this, "data_store", false);
  public get dataStore() {
    return this._dataStore;
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesOutputReference {
    return new GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSource {
}

export function googleCesAppVersionSnapshotToolsDataStoreToolEngineSourceToTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsDataStoreToolEngineSourceToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_store_sources - computed: true, optional: false, required: false
  private _dataStoreSources = new GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesList(this, "data_store_sources", false);
  public get dataStoreSources() {
    return this._dataStoreSources;
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceOutputReference {
    return new GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfig {
}

export function googleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfigToTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // grounding_level - computed: true, optional: false, required: false
  public get groundingLevel() {
    return this.getNumberAttribute('grounding_level');
  }
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfigOutputReference {
    return new GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettings {
}

export function googleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfig {
}

export function googleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigToTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // model_settings - computed: true, optional: false, required: false
  private _modelSettings = new GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettingsList(this, "model_settings", false);
  public get modelSettings() {
    return this._modelSettings;
  }

  // prompt - computed: true, optional: false, required: false
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigOutputReference {
    return new GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettings {
}

export function googleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettingsToTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettingsToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference {
    return new GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfig {
}

export function googleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigToTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // model_settings - computed: true, optional: false, required: false
  private _modelSettings = new GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettingsList(this, "model_settings", false);
  public get modelSettings() {
    return this._modelSettings;
  }

  // prompt - computed: true, optional: false, required: false
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigOutputReference {
    return new GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigs {
}

export function googleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsToTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grounding_config - computed: true, optional: false, required: false
  private _groundingConfig = new GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfigList(this, "grounding_config", false);
  public get groundingConfig() {
    return this._groundingConfig;
  }

  // modality_type - computed: true, optional: false, required: false
  public get modalityType() {
    return this.getStringAttribute('modality_type');
  }

  // rewriter_config - computed: true, optional: false, required: false
  private _rewriterConfig = new GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigList(this, "rewriter_config", false);
  public get rewriterConfig() {
    return this._rewriterConfig;
  }

  // summarization_config - computed: true, optional: false, required: false
  private _summarizationConfig = new GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigList(this, "summarization_config", false);
  public get summarizationConfig() {
    return this._summarizationConfig;
  }
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsOutputReference {
    return new GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsDataStoreTool {
}

export function googleCesAppVersionSnapshotToolsDataStoreToolToTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsDataStoreToolToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsDataStoreTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsDataStoreTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsDataStoreTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boost_specs - computed: true, optional: false, required: false
  private _boostSpecs = new GoogleCesAppVersionSnapshotToolsDataStoreToolBoostSpecsList(this, "boost_specs", false);
  public get boostSpecs() {
    return this._boostSpecs;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // engine_source - computed: true, optional: false, required: false
  private _engineSource = new GoogleCesAppVersionSnapshotToolsDataStoreToolEngineSourceList(this, "engine_source", false);
  public get engineSource() {
    return this._engineSource;
  }

  // max_results - computed: true, optional: false, required: false
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }

  // modality_configs - computed: true, optional: false, required: false
  private _modalityConfigs = new GoogleCesAppVersionSnapshotToolsDataStoreToolModalityConfigsList(this, "modality_configs", false);
  public get modalityConfigs() {
    return this._modalityConfigs;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class GoogleCesAppVersionSnapshotToolsDataStoreToolList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsDataStoreToolOutputReference {
    return new GoogleCesAppVersionSnapshotToolsDataStoreToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsGoogleSearchTool {
}

export function googleCesAppVersionSnapshotToolsGoogleSearchToolToTerraform(struct?: GoogleCesAppVersionSnapshotToolsGoogleSearchTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsGoogleSearchToolToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsGoogleSearchTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsGoogleSearchToolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsGoogleSearchTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsGoogleSearchTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exclude_domains - computed: true, optional: false, required: false
  public get excludeDomains() {
    return this.getListAttribute('exclude_domains');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class GoogleCesAppVersionSnapshotToolsGoogleSearchToolList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsGoogleSearchToolOutputReference {
    return new GoogleCesAppVersionSnapshotToolsGoogleSearchToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfig {
}

export function googleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfigToTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_secret_version - computed: true, optional: false, required: false
  public get apiKeySecretVersion() {
    return this.getStringAttribute('api_key_secret_version');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // request_location - computed: true, optional: false, required: false
  public get requestLocation() {
    return this.getStringAttribute('request_location');
  }
}

export class GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfigOutputReference {
    return new GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
