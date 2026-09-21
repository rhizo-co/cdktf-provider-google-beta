// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleHypercomputeclusterClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster to create. Must start with a lowercase letter,
  * use only lowercase letters and numbers, and be at most 10 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#cluster_id GoogleHypercomputeclusterCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#deletion_policy GoogleHypercomputeclusterCluster#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * User-provided description of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#description GoogleHypercomputeclusterCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#id GoogleHypercomputeclusterCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * [Labels](https://cloud.google.com/compute/docs/labeling-resources) applied
  * to the cluster. Labels can be used to organize clusters and to filter them
  * in queries.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#labels GoogleHypercomputeclusterCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#location GoogleHypercomputeclusterCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#project GoogleHypercomputeclusterCluster#project}
  */
  readonly project?: string;
  /**
  * compute_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#compute_resources GoogleHypercomputeclusterCluster#compute_resources}
  */
  readonly computeResources?: GoogleHypercomputeclusterClusterComputeResources[] | cdktf.IResolvable;
  /**
  * network_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#network_resources GoogleHypercomputeclusterCluster#network_resources}
  */
  readonly networkResources: GoogleHypercomputeclusterClusterNetworkResources[] | cdktf.IResolvable;
  /**
  * orchestrator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#orchestrator GoogleHypercomputeclusterCluster#orchestrator}
  */
  readonly orchestrator?: GoogleHypercomputeclusterClusterOrchestrator;
  /**
  * storage_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#storage_resources GoogleHypercomputeclusterCluster#storage_resources}
  */
  readonly storageResources?: GoogleHypercomputeclusterClusterStorageResources[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#timeouts GoogleHypercomputeclusterCluster#timeouts}
  */
  readonly timeouts?: GoogleHypercomputeclusterClusterTimeouts;
}
export interface GoogleHypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances {
  /**
  * Name of the Compute Engine [machine
  * type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g.
  * 'n2-standard-2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#machine_type GoogleHypercomputeclusterCluster#machine_type}
  */
  readonly machineType: string;
  /**
  * Specifies the time limit for created instances. Instances will be
  * terminated at the end of this duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#max_duration GoogleHypercomputeclusterCluster#max_duration}
  */
  readonly maxDuration: string;
  /**
  * Name of the zone in which VM instances should run, e.g., 'us-central1-a'.
  * Must be in the same region as the cluster, and must match the zone of any
  * other resources specified in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#zone GoogleHypercomputeclusterCluster#zone}
  */
  readonly zone: string;
}

export function googleHypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesToTerraform(struct?: GoogleHypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference | GoogleHypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    max_duration: cdktf.stringToTerraform(struct!.maxDuration),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function googleHypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesToHclTerraform(struct?: GoogleHypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference | GoogleHypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._machineType = undefined;
      this._maxDuration = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._machineType = value.machineType;
      this._maxDuration = value.maxDuration;
      this._zone = value.zone;
    }
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // max_duration - computed: false, optional: false, required: true
  private _maxDuration?: string; 
  public get maxDuration() {
    return this.getStringAttribute('max_duration');
  }
  public set maxDuration(value: string) {
    this._maxDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface GoogleHypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances {
  /**
  * Name of the Compute Engine [machine
  * type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g.
  * 'n2-standard-2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#machine_type GoogleHypercomputeclusterCluster#machine_type}
  */
  readonly machineType: string;
  /**
  * Name of the zone in which VM instances should run, e.g., 'us-central1-a'.
  * Must be in the same region as the cluster, and must match the zone of any
  * other resources specified in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#zone GoogleHypercomputeclusterCluster#zone}
  */
  readonly zone: string;
}

export function googleHypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesToTerraform(struct?: GoogleHypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference | GoogleHypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function googleHypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesToHclTerraform(struct?: GoogleHypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference | GoogleHypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._machineType = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._machineType = value.machineType;
      this._zone = value.zone;
    }
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface GoogleHypercomputeclusterClusterComputeResourcesConfigNewReservedInstances {
  /**
  * Name of the reservation from which VM instances should be created, in the
  * format 'projects/{project}/zones/{zone}/reservations/{reservation}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#reservation GoogleHypercomputeclusterCluster#reservation}
  */
  readonly reservation?: string;
}

export function googleHypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesToTerraform(struct?: GoogleHypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference | GoogleHypercomputeclusterClusterComputeResourcesConfigNewReservedInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reservation: cdktf.stringToTerraform(struct!.reservation),
  }
}


export function googleHypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesToHclTerraform(struct?: GoogleHypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference | GoogleHypercomputeclusterClusterComputeResourcesConfigNewReservedInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reservation: {
      value: cdktf.stringToHclTerraform(struct!.reservation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterComputeResourcesConfigNewReservedInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservation = this._reservation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterComputeResourcesConfigNewReservedInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reservation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reservation = value.reservation;
    }
  }

  // reservation - computed: false, optional: true, required: false
  private _reservation?: string; 
  public get reservation() {
    return this.getStringAttribute('reservation');
  }
  public set reservation(value: string) {
    this._reservation = value;
  }
  public resetReservation() {
    this._reservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationInput() {
    return this._reservation;
  }
}
export interface GoogleHypercomputeclusterClusterComputeResourcesConfigNewSpotInstances {
  /**
  * Name of the Compute Engine [machine
  * type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g.
  * 'n2-standard-2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#machine_type GoogleHypercomputeclusterCluster#machine_type}
  */
  readonly machineType: string;
  /**
  * Specifies the termination action of the instance
  * Possible values:
  * STOP
  * DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#termination_action GoogleHypercomputeclusterCluster#termination_action}
  */
  readonly terminationAction?: string;
  /**
  * Name of the zone in which VM instances should run, e.g., 'us-central1-a'.
  * Must be in the same region as the cluster, and must match the zone of any
  * other resources specified in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#zone GoogleHypercomputeclusterCluster#zone}
  */
  readonly zone: string;
}

export function googleHypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesToTerraform(struct?: GoogleHypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference | GoogleHypercomputeclusterClusterComputeResourcesConfigNewSpotInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    termination_action: cdktf.stringToTerraform(struct!.terminationAction),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function googleHypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesToHclTerraform(struct?: GoogleHypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference | GoogleHypercomputeclusterClusterComputeResourcesConfigNewSpotInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    termination_action: {
      value: cdktf.stringToHclTerraform(struct!.terminationAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterComputeResourcesConfigNewSpotInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._terminationAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationAction = this._terminationAction;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterComputeResourcesConfigNewSpotInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._machineType = undefined;
      this._terminationAction = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._machineType = value.machineType;
      this._terminationAction = value.terminationAction;
      this._zone = value.zone;
    }
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // termination_action - computed: false, optional: true, required: false
  private _terminationAction?: string; 
  public get terminationAction() {
    return this.getStringAttribute('termination_action');
  }
  public set terminationAction(value: string) {
    this._terminationAction = value;
  }
  public resetTerminationAction() {
    this._terminationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationActionInput() {
    return this._terminationAction;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface GoogleHypercomputeclusterClusterComputeResourcesConfig {
  /**
  * new_flex_start_instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#new_flex_start_instances GoogleHypercomputeclusterCluster#new_flex_start_instances}
  */
  readonly newFlexStartInstances?: GoogleHypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances;
  /**
  * new_on_demand_instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#new_on_demand_instances GoogleHypercomputeclusterCluster#new_on_demand_instances}
  */
  readonly newOnDemandInstances?: GoogleHypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances;
  /**
  * new_reserved_instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#new_reserved_instances GoogleHypercomputeclusterCluster#new_reserved_instances}
  */
  readonly newReservedInstances?: GoogleHypercomputeclusterClusterComputeResourcesConfigNewReservedInstances;
  /**
  * new_spot_instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#new_spot_instances GoogleHypercomputeclusterCluster#new_spot_instances}
  */
  readonly newSpotInstances?: GoogleHypercomputeclusterClusterComputeResourcesConfigNewSpotInstances;
}

export function googleHypercomputeclusterClusterComputeResourcesConfigToTerraform(struct?: GoogleHypercomputeclusterClusterComputeResourcesConfigOutputReference | GoogleHypercomputeclusterClusterComputeResourcesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_flex_start_instances: googleHypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesToTerraform(struct!.newFlexStartInstances),
    new_on_demand_instances: googleHypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesToTerraform(struct!.newOnDemandInstances),
    new_reserved_instances: googleHypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesToTerraform(struct!.newReservedInstances),
    new_spot_instances: googleHypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesToTerraform(struct!.newSpotInstances),
  }
}


export function googleHypercomputeclusterClusterComputeResourcesConfigToHclTerraform(struct?: GoogleHypercomputeclusterClusterComputeResourcesConfigOutputReference | GoogleHypercomputeclusterClusterComputeResourcesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_flex_start_instances: {
      value: googleHypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesToHclTerraform(struct!.newFlexStartInstances),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesList",
    },
    new_on_demand_instances: {
      value: googleHypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesToHclTerraform(struct!.newOnDemandInstances),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesList",
    },
    new_reserved_instances: {
      value: googleHypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesToHclTerraform(struct!.newReservedInstances),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesList",
    },
    new_spot_instances: {
      value: googleHypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesToHclTerraform(struct!.newSpotInstances),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterComputeResourcesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterComputeResourcesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newFlexStartInstances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newFlexStartInstances = this._newFlexStartInstances?.internalValue;
    }
    if (this._newOnDemandInstances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newOnDemandInstances = this._newOnDemandInstances?.internalValue;
    }
    if (this._newReservedInstances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newReservedInstances = this._newReservedInstances?.internalValue;
    }
    if (this._newSpotInstances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newSpotInstances = this._newSpotInstances?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterComputeResourcesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newFlexStartInstances.internalValue = undefined;
      this._newOnDemandInstances.internalValue = undefined;
      this._newReservedInstances.internalValue = undefined;
      this._newSpotInstances.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newFlexStartInstances.internalValue = value.newFlexStartInstances;
      this._newOnDemandInstances.internalValue = value.newOnDemandInstances;
      this._newReservedInstances.internalValue = value.newReservedInstances;
      this._newSpotInstances.internalValue = value.newSpotInstances;
    }
  }

  // new_flex_start_instances - computed: false, optional: true, required: false
  private _newFlexStartInstances = new GoogleHypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference(this, "new_flex_start_instances");
  public get newFlexStartInstances() {
    return this._newFlexStartInstances;
  }
  public putNewFlexStartInstances(value: GoogleHypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances) {
    this._newFlexStartInstances.internalValue = value;
  }
  public resetNewFlexStartInstances() {
    this._newFlexStartInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newFlexStartInstancesInput() {
    return this._newFlexStartInstances.internalValue;
  }

  // new_on_demand_instances - computed: false, optional: true, required: false
  private _newOnDemandInstances = new GoogleHypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference(this, "new_on_demand_instances");
  public get newOnDemandInstances() {
    return this._newOnDemandInstances;
  }
  public putNewOnDemandInstances(value: GoogleHypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances) {
    this._newOnDemandInstances.internalValue = value;
  }
  public resetNewOnDemandInstances() {
    this._newOnDemandInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newOnDemandInstancesInput() {
    return this._newOnDemandInstances.internalValue;
  }

  // new_reserved_instances - computed: false, optional: true, required: false
  private _newReservedInstances = new GoogleHypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference(this, "new_reserved_instances");
  public get newReservedInstances() {
    return this._newReservedInstances;
  }
  public putNewReservedInstances(value: GoogleHypercomputeclusterClusterComputeResourcesConfigNewReservedInstances) {
    this._newReservedInstances.internalValue = value;
  }
  public resetNewReservedInstances() {
    this._newReservedInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newReservedInstancesInput() {
    return this._newReservedInstances.internalValue;
  }

  // new_spot_instances - computed: false, optional: true, required: false
  private _newSpotInstances = new GoogleHypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference(this, "new_spot_instances");
  public get newSpotInstances() {
    return this._newSpotInstances;
  }
  public putNewSpotInstances(value: GoogleHypercomputeclusterClusterComputeResourcesConfigNewSpotInstances) {
    this._newSpotInstances.internalValue = value;
  }
  public resetNewSpotInstances() {
    this._newSpotInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newSpotInstancesInput() {
    return this._newSpotInstances.internalValue;
  }
}
export interface GoogleHypercomputeclusterClusterComputeResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#id GoogleHypercomputeclusterCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#config GoogleHypercomputeclusterCluster#config}
  */
  readonly config: GoogleHypercomputeclusterClusterComputeResourcesConfig;
}

export function googleHypercomputeclusterClusterComputeResourcesToTerraform(struct?: GoogleHypercomputeclusterClusterComputeResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    config: googleHypercomputeclusterClusterComputeResourcesConfigToTerraform(struct!.config),
  }
}


export function googleHypercomputeclusterClusterComputeResourcesToHclTerraform(struct?: GoogleHypercomputeclusterClusterComputeResources | cdktf.IResolvable): any {
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
    config: {
      value: googleHypercomputeclusterClusterComputeResourcesConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterComputeResourcesConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterComputeResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleHypercomputeclusterClusterComputeResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterComputeResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._config.internalValue = value.config;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // config - computed: false, optional: false, required: true
  private _config = new GoogleHypercomputeclusterClusterComputeResourcesConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleHypercomputeclusterClusterComputeResourcesConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class GoogleHypercomputeclusterClusterComputeResourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleHypercomputeclusterClusterComputeResources[] | cdktf.IResolvable

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
  public get(index: number): GoogleHypercomputeclusterClusterComputeResourcesOutputReference {
    return new GoogleHypercomputeclusterClusterComputeResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleHypercomputeclusterClusterNetworkResourcesNetwork {
}

export function googleHypercomputeclusterClusterNetworkResourcesNetworkToTerraform(struct?: GoogleHypercomputeclusterClusterNetworkResourcesNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleHypercomputeclusterClusterNetworkResourcesNetworkToHclTerraform(struct?: GoogleHypercomputeclusterClusterNetworkResourcesNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleHypercomputeclusterClusterNetworkResourcesNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleHypercomputeclusterClusterNetworkResourcesNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterNetworkResourcesNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // subnetwork - computed: true, optional: false, required: false
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
}

export class GoogleHypercomputeclusterClusterNetworkResourcesNetworkList extends cdktf.ComplexList {

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
  public get(index: number): GoogleHypercomputeclusterClusterNetworkResourcesNetworkOutputReference {
    return new GoogleHypercomputeclusterClusterNetworkResourcesNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleHypercomputeclusterClusterNetworkResourcesConfigExistingNetwork {
  /**
  * Name of the network to import, in the format
  * 'projects/{project}/global/networks/{network}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#network GoogleHypercomputeclusterCluster#network}
  */
  readonly network: string;
  /**
  * Particular subnetwork to use, in the format
  * 'projects/{project}/regions/{region}/subnetworks/{subnetwork}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#subnetwork GoogleHypercomputeclusterCluster#subnetwork}
  */
  readonly subnetwork: string;
}

export function googleHypercomputeclusterClusterNetworkResourcesConfigExistingNetworkToTerraform(struct?: GoogleHypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference | GoogleHypercomputeclusterClusterNetworkResourcesConfigExistingNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
  }
}


export function googleHypercomputeclusterClusterNetworkResourcesConfigExistingNetworkToHclTerraform(struct?: GoogleHypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference | GoogleHypercomputeclusterClusterNetworkResourcesConfigExistingNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterNetworkResourcesConfigExistingNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterNetworkResourcesConfigExistingNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._network = undefined;
      this._subnetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._network = value.network;
      this._subnetwork = value.subnetwork;
    }
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

  // subnetwork - computed: false, optional: false, required: true
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }
}
export interface GoogleHypercomputeclusterClusterNetworkResourcesConfigNewNetwork {
  /**
  * Description of the network. Maximum of 2048 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#description GoogleHypercomputeclusterCluster#description}
  */
  readonly description?: string;
  /**
  * Name of the network to create, in the format
  * 'projects/{project}/global/networks/{network}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#network GoogleHypercomputeclusterCluster#network}
  */
  readonly network: string;
}

export function googleHypercomputeclusterClusterNetworkResourcesConfigNewNetworkToTerraform(struct?: GoogleHypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference | GoogleHypercomputeclusterClusterNetworkResourcesConfigNewNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function googleHypercomputeclusterClusterNetworkResourcesConfigNewNetworkToHclTerraform(struct?: GoogleHypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference | GoogleHypercomputeclusterClusterNetworkResourcesConfigNewNetwork): any {
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
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterNetworkResourcesConfigNewNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterNetworkResourcesConfigNewNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._network = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._network = value.network;
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
}
export interface GoogleHypercomputeclusterClusterNetworkResourcesConfig {
  /**
  * existing_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#existing_network GoogleHypercomputeclusterCluster#existing_network}
  */
  readonly existingNetwork?: GoogleHypercomputeclusterClusterNetworkResourcesConfigExistingNetwork;
  /**
  * new_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#new_network GoogleHypercomputeclusterCluster#new_network}
  */
  readonly newNetwork?: GoogleHypercomputeclusterClusterNetworkResourcesConfigNewNetwork;
}

export function googleHypercomputeclusterClusterNetworkResourcesConfigToTerraform(struct?: GoogleHypercomputeclusterClusterNetworkResourcesConfigOutputReference | GoogleHypercomputeclusterClusterNetworkResourcesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_network: googleHypercomputeclusterClusterNetworkResourcesConfigExistingNetworkToTerraform(struct!.existingNetwork),
    new_network: googleHypercomputeclusterClusterNetworkResourcesConfigNewNetworkToTerraform(struct!.newNetwork),
  }
}


export function googleHypercomputeclusterClusterNetworkResourcesConfigToHclTerraform(struct?: GoogleHypercomputeclusterClusterNetworkResourcesConfigOutputReference | GoogleHypercomputeclusterClusterNetworkResourcesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_network: {
      value: googleHypercomputeclusterClusterNetworkResourcesConfigExistingNetworkToHclTerraform(struct!.existingNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterNetworkResourcesConfigExistingNetworkList",
    },
    new_network: {
      value: googleHypercomputeclusterClusterNetworkResourcesConfigNewNetworkToHclTerraform(struct!.newNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterNetworkResourcesConfigNewNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterNetworkResourcesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterNetworkResourcesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingNetwork = this._existingNetwork?.internalValue;
    }
    if (this._newNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newNetwork = this._newNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterNetworkResourcesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingNetwork.internalValue = undefined;
      this._newNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingNetwork.internalValue = value.existingNetwork;
      this._newNetwork.internalValue = value.newNetwork;
    }
  }

  // existing_network - computed: false, optional: true, required: false
  private _existingNetwork = new GoogleHypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference(this, "existing_network");
  public get existingNetwork() {
    return this._existingNetwork;
  }
  public putExistingNetwork(value: GoogleHypercomputeclusterClusterNetworkResourcesConfigExistingNetwork) {
    this._existingNetwork.internalValue = value;
  }
  public resetExistingNetwork() {
    this._existingNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingNetworkInput() {
    return this._existingNetwork.internalValue;
  }

  // new_network - computed: false, optional: true, required: false
  private _newNetwork = new GoogleHypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference(this, "new_network");
  public get newNetwork() {
    return this._newNetwork;
  }
  public putNewNetwork(value: GoogleHypercomputeclusterClusterNetworkResourcesConfigNewNetwork) {
    this._newNetwork.internalValue = value;
  }
  public resetNewNetwork() {
    this._newNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newNetworkInput() {
    return this._newNetwork.internalValue;
  }
}
export interface GoogleHypercomputeclusterClusterNetworkResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#id GoogleHypercomputeclusterCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#config GoogleHypercomputeclusterCluster#config}
  */
  readonly config?: GoogleHypercomputeclusterClusterNetworkResourcesConfig;
}

export function googleHypercomputeclusterClusterNetworkResourcesToTerraform(struct?: GoogleHypercomputeclusterClusterNetworkResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    config: googleHypercomputeclusterClusterNetworkResourcesConfigToTerraform(struct!.config),
  }
}


export function googleHypercomputeclusterClusterNetworkResourcesToHclTerraform(struct?: GoogleHypercomputeclusterClusterNetworkResources | cdktf.IResolvable): any {
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
    config: {
      value: googleHypercomputeclusterClusterNetworkResourcesConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterNetworkResourcesConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterNetworkResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleHypercomputeclusterClusterNetworkResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterNetworkResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._config.internalValue = value.config;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // network - computed: true, optional: false, required: false
  private _network = new GoogleHypercomputeclusterClusterNetworkResourcesNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }

  // config - computed: false, optional: true, required: false
  private _config = new GoogleHypercomputeclusterClusterNetworkResourcesConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleHypercomputeclusterClusterNetworkResourcesConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class GoogleHypercomputeclusterClusterNetworkResourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleHypercomputeclusterClusterNetworkResources[] | cdktf.IResolvable

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
  public get(index: number): GoogleHypercomputeclusterClusterNetworkResourcesOutputReference {
    return new GoogleHypercomputeclusterClusterNetworkResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesInstances {
}

export function googleHypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesToTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleHypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesToHclTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance - computed: true, optional: false, required: false
  public get instance() {
    return this.getStringAttribute('instance');
  }
}

export class GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference {
    return new GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk {
  /**
  * Size of the disk in gigabytes. Must be at least 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#size_gb GoogleHypercomputeclusterCluster#size_gb}
  */
  readonly sizeGb: string;
  /**
  * [Persistent disk
  * type](https://cloud.google.com/compute/docs/disks#disk-types), in the
  * format 'projects/{project}/zones/{zone}/diskTypes/{disk_type}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#type GoogleHypercomputeclusterCluster#type}
  */
  readonly type: string;
}

export function googleHypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskToTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference | GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_gb: cdktf.stringToTerraform(struct!.sizeGb),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleHypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskToHclTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference | GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size_gb: {
      value: cdktf.stringToHclTerraform(struct!.sizeGb),
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

export class GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sizeGb = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sizeGb = value.sizeGb;
      this._type = value.type;
    }
  }

  // size_gb - computed: false, optional: false, required: true
  private _sizeGb?: string; 
  public get sizeGb() {
    return this.getStringAttribute('size_gb');
  }
  public set sizeGb(value: string) {
    this._sizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigs {
  /**
  * ID of the storage resource to mount, which must match a key in the
  * cluster's [storage_resources](Cluster.storage_resources).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#id GoogleHypercomputeclusterCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A directory inside the VM instance's file system where the storage resource
  * should be mounted (e.g., '/mnt/share').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#local_mount GoogleHypercomputeclusterCluster#local_mount}
  */
  readonly localMount: string;
}

export function googleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsToTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    local_mount: cdktf.stringToTerraform(struct!.localMount),
  }
}


export function googleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsToHclTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigs | cdktf.IResolvable): any {
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
    local_mount: {
      value: cdktf.stringToHclTerraform(struct!.localMount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._localMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localMount = this._localMount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._localMount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._localMount = value.localMount;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // local_mount - computed: false, optional: false, required: true
  private _localMount?: string; 
  public get localMount() {
    return this.getStringAttribute('local_mount');
  }
  public set localMount(value: string) {
    this._localMount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localMountInput() {
    return this._localMount;
  }
}

export class GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference {
    return new GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodes {
  /**
  * Number of login node instances to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#count GoogleHypercomputeclusterCluster#count}
  */
  readonly count: string;
  /**
  * Whether [OS Login](https://cloud.google.com/compute/docs/oslogin) should be
  * enabled on login node instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#enable_os_login GoogleHypercomputeclusterCluster#enable_os_login}
  */
  readonly enableOsLogin?: boolean | cdktf.IResolvable;
  /**
  * Whether login node instances should be assigned [external IP
  * addresses](https://cloud.google.com/compute/docs/ip-addresses#externaladdresses).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#enable_public_ips GoogleHypercomputeclusterCluster#enable_public_ips}
  */
  readonly enablePublicIps?: boolean | cdktf.IResolvable;
  /**
  * [Labels](https://cloud.google.com/compute/docs/labeling-resources) that
  * should be applied to each login node instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#labels GoogleHypercomputeclusterCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the Compute Engine [machine
  * type](https://cloud.google.com/compute/docs/machine-resource) to use for
  * login nodes, e.g. 'n2-standard-2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#machine_type GoogleHypercomputeclusterCluster#machine_type}
  */
  readonly machineType: string;
  /**
  * [Startup
  * script](https://cloud.google.com/compute/docs/instances/startup-scripts/linux)
  * to be run on each login node instance. Max 256KB.
  * The script must complete within the system-defined default timeout of 5
  * minutes. For tasks that require more time, consider running them in the
  * background using methods such as '&' or 'nohup'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#startup_script GoogleHypercomputeclusterCluster#startup_script}
  */
  readonly startupScript?: string;
  /**
  * Name of the zone in which login nodes should run, e.g., 'us-central1-a'.
  * Must be in the same region as the cluster, and must match the zone of any
  * other resources specified in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#zone GoogleHypercomputeclusterCluster#zone}
  */
  readonly zone: string;
  /**
  * boot_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#boot_disk GoogleHypercomputeclusterCluster#boot_disk}
  */
  readonly bootDisk?: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk;
  /**
  * storage_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#storage_configs GoogleHypercomputeclusterCluster#storage_configs}
  */
  readonly storageConfigs?: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigs[] | cdktf.IResolvable;
}

export function googleHypercomputeclusterClusterOrchestratorSlurmLoginNodesToTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference | GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.stringToTerraform(struct!.count),
    enable_os_login: cdktf.booleanToTerraform(struct!.enableOsLogin),
    enable_public_ips: cdktf.booleanToTerraform(struct!.enablePublicIps),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    startup_script: cdktf.stringToTerraform(struct!.startupScript),
    zone: cdktf.stringToTerraform(struct!.zone),
    boot_disk: googleHypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskToTerraform(struct!.bootDisk),
    storage_configs: cdktf.listMapper(googleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsToTerraform, true)(struct!.storageConfigs),
  }
}


export function googleHypercomputeclusterClusterOrchestratorSlurmLoginNodesToHclTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference | GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_os_login: {
      value: cdktf.booleanToHclTerraform(struct!.enableOsLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_public_ips: {
      value: cdktf.booleanToHclTerraform(struct!.enablePublicIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startup_script: {
      value: cdktf.stringToHclTerraform(struct!.startupScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_disk: {
      value: googleHypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskToHclTerraform(struct!.bootDisk),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskList",
    },
    storage_configs: {
      value: cdktf.listMapperHcl(googleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsToHclTerraform, true)(struct!.storageConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._enableOsLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOsLogin = this._enableOsLogin;
    }
    if (this._enablePublicIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePublicIps = this._enablePublicIps;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._startupScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupScript = this._startupScript;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._bootDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDisk = this._bootDisk?.internalValue;
    }
    if (this._storageConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfigs = this._storageConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._enableOsLogin = undefined;
      this._enablePublicIps = undefined;
      this._labels = undefined;
      this._machineType = undefined;
      this._startupScript = undefined;
      this._zone = undefined;
      this._bootDisk.internalValue = undefined;
      this._storageConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._enableOsLogin = value.enableOsLogin;
      this._enablePublicIps = value.enablePublicIps;
      this._labels = value.labels;
      this._machineType = value.machineType;
      this._startupScript = value.startupScript;
      this._zone = value.zone;
      this._bootDisk.internalValue = value.bootDisk;
      this._storageConfigs.internalValue = value.storageConfigs;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // enable_os_login - computed: false, optional: true, required: false
  private _enableOsLogin?: boolean | cdktf.IResolvable; 
  public get enableOsLogin() {
    return this.getBooleanAttribute('enable_os_login');
  }
  public set enableOsLogin(value: boolean | cdktf.IResolvable) {
    this._enableOsLogin = value;
  }
  public resetEnableOsLogin() {
    this._enableOsLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOsLoginInput() {
    return this._enableOsLogin;
  }

  // enable_public_ips - computed: false, optional: true, required: false
  private _enablePublicIps?: boolean | cdktf.IResolvable; 
  public get enablePublicIps() {
    return this.getBooleanAttribute('enable_public_ips');
  }
  public set enablePublicIps(value: boolean | cdktf.IResolvable) {
    this._enablePublicIps = value;
  }
  public resetEnablePublicIps() {
    this._enablePublicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicIpsInput() {
    return this._enablePublicIps;
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // labels - computed: true, optional: true, required: false
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

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // startup_script - computed: false, optional: true, required: false
  private _startupScript?: string; 
  public get startupScript() {
    return this.getStringAttribute('startup_script');
  }
  public set startupScript(value: string) {
    this._startupScript = value;
  }
  public resetStartupScript() {
    this._startupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupScriptInput() {
    return this._startupScript;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // boot_disk - computed: false, optional: true, required: false
  private _bootDisk = new GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk) {
    this._bootDisk.internalValue = value;
  }
  public resetBootDisk() {
    this._bootDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk.internalValue;
  }

  // storage_configs - computed: false, optional: true, required: false
  private _storageConfigs = new GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList(this, "storage_configs", false);
  public get storageConfigs() {
    return this._storageConfigs;
  }
  public putStorageConfigs(value: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigs[] | cdktf.IResolvable) {
    this._storageConfigs.internalValue = value;
  }
  public resetStorageConfigs() {
    this._storageConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigsInput() {
    return this._storageConfigs.internalValue;
  }
}
export interface GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk {
  /**
  * Size of the disk in gigabytes. Must be at least 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#size_gb GoogleHypercomputeclusterCluster#size_gb}
  */
  readonly sizeGb: string;
  /**
  * [Persistent disk
  * type](https://cloud.google.com/compute/docs/disks#disk-types), in the
  * format 'projects/{project}/zones/{zone}/diskTypes/{disk_type}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#type GoogleHypercomputeclusterCluster#type}
  */
  readonly type: string;
}

export function googleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskToTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference | GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_gb: cdktf.stringToTerraform(struct!.sizeGb),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskToHclTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference | GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size_gb: {
      value: cdktf.stringToHclTerraform(struct!.sizeGb),
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

export class GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sizeGb = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sizeGb = value.sizeGb;
      this._type = value.type;
    }
  }

  // size_gb - computed: false, optional: false, required: true
  private _sizeGb?: string; 
  public get sizeGb() {
    return this.getStringAttribute('size_gb');
  }
  public set sizeGb(value: string) {
    this._sizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance {
  /**
  * [Labels](https://cloud.google.com/compute/docs/labeling-resources) that
  * should be applied to each VM instance in the nodeset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#labels GoogleHypercomputeclusterCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * [Startup
  * script](https://cloud.google.com/compute/docs/instances/startup-scripts/linux)
  * to be run on each VM instance in the nodeset. Max 256KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#startup_script GoogleHypercomputeclusterCluster#startup_script}
  */
  readonly startupScript?: string;
  /**
  * boot_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#boot_disk GoogleHypercomputeclusterCluster#boot_disk}
  */
  readonly bootDisk?: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk;
}

export function googleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceToTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference | GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    startup_script: cdktf.stringToTerraform(struct!.startupScript),
    boot_disk: googleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskToTerraform(struct!.bootDisk),
  }
}


export function googleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceToHclTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference | GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    startup_script: {
      value: cdktf.stringToHclTerraform(struct!.startupScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_disk: {
      value: googleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskToHclTerraform(struct!.bootDisk),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._startupScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupScript = this._startupScript;
    }
    if (this._bootDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDisk = this._bootDisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._startupScript = undefined;
      this._bootDisk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._startupScript = value.startupScript;
      this._bootDisk.internalValue = value.bootDisk;
    }
  }

  // labels - computed: true, optional: true, required: false
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

  // startup_script - computed: false, optional: true, required: false
  private _startupScript?: string; 
  public get startupScript() {
    return this.getStringAttribute('startup_script');
  }
  public set startupScript(value: string) {
    this._startupScript = value;
  }
  public resetStartupScript() {
    this._startupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupScriptInput() {
    return this._startupScript;
  }

  // boot_disk - computed: false, optional: true, required: false
  private _bootDisk = new GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk) {
    this._bootDisk.internalValue = value;
  }
  public resetBootDisk() {
    this._bootDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk.internalValue;
  }
}
export interface GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigs {
  /**
  * ID of the storage resource to mount, which must match a key in the
  * cluster's [storage_resources](Cluster.storage_resources).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#id GoogleHypercomputeclusterCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A directory inside the VM instance's file system where the storage resource
  * should be mounted (e.g., '/mnt/share').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#local_mount GoogleHypercomputeclusterCluster#local_mount}
  */
  readonly localMount: string;
}

export function googleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsToTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    local_mount: cdktf.stringToTerraform(struct!.localMount),
  }
}


export function googleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsToHclTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigs | cdktf.IResolvable): any {
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
    local_mount: {
      value: cdktf.stringToHclTerraform(struct!.localMount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._localMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localMount = this._localMount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._localMount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._localMount = value.localMount;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // local_mount - computed: false, optional: false, required: true
  private _localMount?: string; 
  public get localMount() {
    return this.getStringAttribute('local_mount');
  }
  public set localMount(value: string) {
    this._localMount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localMountInput() {
    return this._localMount;
  }
}

export class GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference {
    return new GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSets {
  /**
  * ID of the compute resource on which this nodeset will run. Must match a key
  * in the cluster's [compute_resources](Cluster.compute_resources).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#compute_id GoogleHypercomputeclusterCluster#compute_id}
  */
  readonly computeId?: string;
  /**
  * Identifier for the nodeset, which allows it to be referenced by partitions.
  * Must conform to
  * [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case,
  * alphanumeric, and at most 63 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#id GoogleHypercomputeclusterCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Controls how many additional nodes a cluster can bring online to handle
  * workloads. Set this value to enable dynamic node creation and limit the
  * number of additional nodes the cluster can bring online. Leave empty if you
  * do not want the cluster to create nodes dynamically, and instead rely only
  * on static nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#max_dynamic_node_count GoogleHypercomputeclusterCluster#max_dynamic_node_count}
  */
  readonly maxDynamicNodeCount?: string;
  /**
  * Number of nodes to be statically created for this nodeset. The cluster will
  * attempt to ensure that at least this many nodes exist at all times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#static_node_count GoogleHypercomputeclusterCluster#static_node_count}
  */
  readonly staticNodeCount?: string;
  /**
  * compute_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#compute_instance GoogleHypercomputeclusterCluster#compute_instance}
  */
  readonly computeInstance?: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance;
  /**
  * storage_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#storage_configs GoogleHypercomputeclusterCluster#storage_configs}
  */
  readonly storageConfigs?: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigs[] | cdktf.IResolvable;
}

export function googleHypercomputeclusterClusterOrchestratorSlurmNodeSetsToTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_id: cdktf.stringToTerraform(struct!.computeId),
    id: cdktf.stringToTerraform(struct!.id),
    max_dynamic_node_count: cdktf.stringToTerraform(struct!.maxDynamicNodeCount),
    static_node_count: cdktf.stringToTerraform(struct!.staticNodeCount),
    compute_instance: googleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceToTerraform(struct!.computeInstance),
    storage_configs: cdktf.listMapper(googleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsToTerraform, true)(struct!.storageConfigs),
  }
}


export function googleHypercomputeclusterClusterOrchestratorSlurmNodeSetsToHclTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_id: {
      value: cdktf.stringToHclTerraform(struct!.computeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_dynamic_node_count: {
      value: cdktf.stringToHclTerraform(struct!.maxDynamicNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_node_count: {
      value: cdktf.stringToHclTerraform(struct!.staticNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_instance: {
      value: googleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceToHclTerraform(struct!.computeInstance),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceList",
    },
    storage_configs: {
      value: cdktf.listMapperHcl(googleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsToHclTerraform, true)(struct!.storageConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeId = this._computeId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxDynamicNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDynamicNodeCount = this._maxDynamicNodeCount;
    }
    if (this._staticNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNodeCount = this._staticNodeCount;
    }
    if (this._computeInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeInstance = this._computeInstance?.internalValue;
    }
    if (this._storageConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfigs = this._storageConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._computeId = undefined;
      this._id = undefined;
      this._maxDynamicNodeCount = undefined;
      this._staticNodeCount = undefined;
      this._computeInstance.internalValue = undefined;
      this._storageConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._computeId = value.computeId;
      this._id = value.id;
      this._maxDynamicNodeCount = value.maxDynamicNodeCount;
      this._staticNodeCount = value.staticNodeCount;
      this._computeInstance.internalValue = value.computeInstance;
      this._storageConfigs.internalValue = value.storageConfigs;
    }
  }

  // compute_id - computed: false, optional: true, required: false
  private _computeId?: string; 
  public get computeId() {
    return this.getStringAttribute('compute_id');
  }
  public set computeId(value: string) {
    this._computeId = value;
  }
  public resetComputeId() {
    this._computeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeIdInput() {
    return this._computeId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_dynamic_node_count - computed: false, optional: true, required: false
  private _maxDynamicNodeCount?: string; 
  public get maxDynamicNodeCount() {
    return this.getStringAttribute('max_dynamic_node_count');
  }
  public set maxDynamicNodeCount(value: string) {
    this._maxDynamicNodeCount = value;
  }
  public resetMaxDynamicNodeCount() {
    this._maxDynamicNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDynamicNodeCountInput() {
    return this._maxDynamicNodeCount;
  }

  // static_node_count - computed: false, optional: true, required: false
  private _staticNodeCount?: string; 
  public get staticNodeCount() {
    return this.getStringAttribute('static_node_count');
  }
  public set staticNodeCount(value: string) {
    this._staticNodeCount = value;
  }
  public resetStaticNodeCount() {
    this._staticNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNodeCountInput() {
    return this._staticNodeCount;
  }

  // compute_instance - computed: false, optional: true, required: false
  private _computeInstance = new GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference(this, "compute_instance");
  public get computeInstance() {
    return this._computeInstance;
  }
  public putComputeInstance(value: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance) {
    this._computeInstance.internalValue = value;
  }
  public resetComputeInstance() {
    this._computeInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInstanceInput() {
    return this._computeInstance.internalValue;
  }

  // storage_configs - computed: false, optional: true, required: false
  private _storageConfigs = new GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList(this, "storage_configs", false);
  public get storageConfigs() {
    return this._storageConfigs;
  }
  public putStorageConfigs(value: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigs[] | cdktf.IResolvable) {
    this._storageConfigs.internalValue = value;
  }
  public resetStorageConfigs() {
    this._storageConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigsInput() {
    return this._storageConfigs.internalValue;
  }
}

export class GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsList extends cdktf.ComplexList {
  public internalValue? : GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSets[] | cdktf.IResolvable

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
  public get(index: number): GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference {
    return new GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleHypercomputeclusterClusterOrchestratorSlurmPartitions {
  /**
  * ID of the partition, which is how users will identify it. Must conform to
  * [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case,
  * alphanumeric, and at most 63 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#id GoogleHypercomputeclusterCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * IDs of the nodesets that make up this partition. Values must match
  * SlurmNodeSet.id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#node_set_ids GoogleHypercomputeclusterCluster#node_set_ids}
  */
  readonly nodeSetIds: string[];
}

export function googleHypercomputeclusterClusterOrchestratorSlurmPartitionsToTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmPartitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    node_set_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeSetIds),
  }
}


export function googleHypercomputeclusterClusterOrchestratorSlurmPartitionsToHclTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmPartitions | cdktf.IResolvable): any {
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
    node_set_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeSetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleHypercomputeclusterClusterOrchestratorSlurmPartitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nodeSetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSetIds = this._nodeSetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterOrchestratorSlurmPartitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._nodeSetIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._nodeSetIds = value.nodeSetIds;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // node_set_ids - computed: false, optional: false, required: true
  private _nodeSetIds?: string[]; 
  public get nodeSetIds() {
    return this.getListAttribute('node_set_ids');
  }
  public set nodeSetIds(value: string[]) {
    this._nodeSetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSetIdsInput() {
    return this._nodeSetIds;
  }
}

export class GoogleHypercomputeclusterClusterOrchestratorSlurmPartitionsList extends cdktf.ComplexList {
  public internalValue? : GoogleHypercomputeclusterClusterOrchestratorSlurmPartitions[] | cdktf.IResolvable

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
  public get(index: number): GoogleHypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference {
    return new GoogleHypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleHypercomputeclusterClusterOrchestratorSlurm {
  /**
  * Default partition to use for submitted jobs that do not explicitly specify
  * a partition. Required if and only if there is more than one partition, in
  * which case it must match the id of one of the partitions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#default_partition GoogleHypercomputeclusterCluster#default_partition}
  */
  readonly defaultPartition?: string;
  /**
  * Slurm [epilog scripts](https://slurm.schedmd.com/prolog_epilog.html), which
  * will be executed by compute nodes whenever a node finishes running a job.
  * Values must not be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#epilog_bash_scripts GoogleHypercomputeclusterCluster#epilog_bash_scripts}
  */
  readonly epilogBashScripts?: string[];
  /**
  * Slurm [prolog scripts](https://slurm.schedmd.com/prolog_epilog.html), which
  * will be executed by compute nodes before a node begins running a new job.
  * Values must not be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#prolog_bash_scripts GoogleHypercomputeclusterCluster#prolog_bash_scripts}
  */
  readonly prologBashScripts?: string[];
  /**
  * login_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#login_nodes GoogleHypercomputeclusterCluster#login_nodes}
  */
  readonly loginNodes: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodes;
  /**
  * node_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#node_sets GoogleHypercomputeclusterCluster#node_sets}
  */
  readonly nodeSets: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSets[] | cdktf.IResolvable;
  /**
  * partitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#partitions GoogleHypercomputeclusterCluster#partitions}
  */
  readonly partitions: GoogleHypercomputeclusterClusterOrchestratorSlurmPartitions[] | cdktf.IResolvable;
}

export function googleHypercomputeclusterClusterOrchestratorSlurmToTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmOutputReference | GoogleHypercomputeclusterClusterOrchestratorSlurm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_partition: cdktf.stringToTerraform(struct!.defaultPartition),
    epilog_bash_scripts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.epilogBashScripts),
    prolog_bash_scripts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prologBashScripts),
    login_nodes: googleHypercomputeclusterClusterOrchestratorSlurmLoginNodesToTerraform(struct!.loginNodes),
    node_sets: cdktf.listMapper(googleHypercomputeclusterClusterOrchestratorSlurmNodeSetsToTerraform, true)(struct!.nodeSets),
    partitions: cdktf.listMapper(googleHypercomputeclusterClusterOrchestratorSlurmPartitionsToTerraform, true)(struct!.partitions),
  }
}


export function googleHypercomputeclusterClusterOrchestratorSlurmToHclTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorSlurmOutputReference | GoogleHypercomputeclusterClusterOrchestratorSlurm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_partition: {
      value: cdktf.stringToHclTerraform(struct!.defaultPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    epilog_bash_scripts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.epilogBashScripts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prolog_bash_scripts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prologBashScripts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    login_nodes: {
      value: googleHypercomputeclusterClusterOrchestratorSlurmLoginNodesToHclTerraform(struct!.loginNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesList",
    },
    node_sets: {
      value: cdktf.listMapperHcl(googleHypercomputeclusterClusterOrchestratorSlurmNodeSetsToHclTerraform, true)(struct!.nodeSets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsList",
    },
    partitions: {
      value: cdktf.listMapperHcl(googleHypercomputeclusterClusterOrchestratorSlurmPartitionsToHclTerraform, true)(struct!.partitions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterOrchestratorSlurmPartitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterOrchestratorSlurmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterOrchestratorSlurm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPartition = this._defaultPartition;
    }
    if (this._epilogBashScripts !== undefined) {
      hasAnyValues = true;
      internalValueResult.epilogBashScripts = this._epilogBashScripts;
    }
    if (this._prologBashScripts !== undefined) {
      hasAnyValues = true;
      internalValueResult.prologBashScripts = this._prologBashScripts;
    }
    if (this._loginNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginNodes = this._loginNodes?.internalValue;
    }
    if (this._nodeSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSets = this._nodeSets?.internalValue;
    }
    if (this._partitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitions = this._partitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterOrchestratorSlurm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultPartition = undefined;
      this._epilogBashScripts = undefined;
      this._prologBashScripts = undefined;
      this._loginNodes.internalValue = undefined;
      this._nodeSets.internalValue = undefined;
      this._partitions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultPartition = value.defaultPartition;
      this._epilogBashScripts = value.epilogBashScripts;
      this._prologBashScripts = value.prologBashScripts;
      this._loginNodes.internalValue = value.loginNodes;
      this._nodeSets.internalValue = value.nodeSets;
      this._partitions.internalValue = value.partitions;
    }
  }

  // default_partition - computed: false, optional: true, required: false
  private _defaultPartition?: string; 
  public get defaultPartition() {
    return this.getStringAttribute('default_partition');
  }
  public set defaultPartition(value: string) {
    this._defaultPartition = value;
  }
  public resetDefaultPartition() {
    this._defaultPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPartitionInput() {
    return this._defaultPartition;
  }

  // epilog_bash_scripts - computed: true, optional: true, required: false
  private _epilogBashScripts?: string[]; 
  public get epilogBashScripts() {
    return this.getListAttribute('epilog_bash_scripts');
  }
  public set epilogBashScripts(value: string[]) {
    this._epilogBashScripts = value;
  }
  public resetEpilogBashScripts() {
    this._epilogBashScripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epilogBashScriptsInput() {
    return this._epilogBashScripts;
  }

  // prolog_bash_scripts - computed: true, optional: true, required: false
  private _prologBashScripts?: string[]; 
  public get prologBashScripts() {
    return this.getListAttribute('prolog_bash_scripts');
  }
  public set prologBashScripts(value: string[]) {
    this._prologBashScripts = value;
  }
  public resetPrologBashScripts() {
    this._prologBashScripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prologBashScriptsInput() {
    return this._prologBashScripts;
  }

  // login_nodes - computed: false, optional: false, required: true
  private _loginNodes = new GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference(this, "login_nodes");
  public get loginNodes() {
    return this._loginNodes;
  }
  public putLoginNodes(value: GoogleHypercomputeclusterClusterOrchestratorSlurmLoginNodes) {
    this._loginNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNodesInput() {
    return this._loginNodes.internalValue;
  }

  // node_sets - computed: false, optional: false, required: true
  private _nodeSets = new GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSetsList(this, "node_sets", false);
  public get nodeSets() {
    return this._nodeSets;
  }
  public putNodeSets(value: GoogleHypercomputeclusterClusterOrchestratorSlurmNodeSets[] | cdktf.IResolvable) {
    this._nodeSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSetsInput() {
    return this._nodeSets.internalValue;
  }

  // partitions - computed: false, optional: false, required: true
  private _partitions = new GoogleHypercomputeclusterClusterOrchestratorSlurmPartitionsList(this, "partitions", false);
  public get partitions() {
    return this._partitions;
  }
  public putPartitions(value: GoogleHypercomputeclusterClusterOrchestratorSlurmPartitions[] | cdktf.IResolvable) {
    this._partitions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions.internalValue;
  }
}
export interface GoogleHypercomputeclusterClusterOrchestrator {
  /**
  * slurm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#slurm GoogleHypercomputeclusterCluster#slurm}
  */
  readonly slurm?: GoogleHypercomputeclusterClusterOrchestratorSlurm;
}

export function googleHypercomputeclusterClusterOrchestratorToTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorOutputReference | GoogleHypercomputeclusterClusterOrchestrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slurm: googleHypercomputeclusterClusterOrchestratorSlurmToTerraform(struct!.slurm),
  }
}


export function googleHypercomputeclusterClusterOrchestratorToHclTerraform(struct?: GoogleHypercomputeclusterClusterOrchestratorOutputReference | GoogleHypercomputeclusterClusterOrchestrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slurm: {
      value: googleHypercomputeclusterClusterOrchestratorSlurmToHclTerraform(struct!.slurm),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterOrchestratorSlurmList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterOrchestratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterOrchestrator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slurm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slurm = this._slurm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterOrchestrator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._slurm.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._slurm.internalValue = value.slurm;
    }
  }

  // slurm - computed: false, optional: true, required: false
  private _slurm = new GoogleHypercomputeclusterClusterOrchestratorSlurmOutputReference(this, "slurm");
  public get slurm() {
    return this._slurm;
  }
  public putSlurm(value: GoogleHypercomputeclusterClusterOrchestratorSlurm) {
    this._slurm.internalValue = value;
  }
  public resetSlurm() {
    this._slurm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slurmInput() {
    return this._slurm.internalValue;
  }
}
export interface GoogleHypercomputeclusterClusterStorageResourcesBucket {
}

export function googleHypercomputeclusterClusterStorageResourcesBucketToTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleHypercomputeclusterClusterStorageResourcesBucketToHclTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleHypercomputeclusterClusterStorageResourcesBucketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleHypercomputeclusterClusterStorageResourcesBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterStorageResourcesBucket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
}

export class GoogleHypercomputeclusterClusterStorageResourcesBucketList extends cdktf.ComplexList {

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
  public get(index: number): GoogleHypercomputeclusterClusterStorageResourcesBucketOutputReference {
    return new GoogleHypercomputeclusterClusterStorageResourcesBucketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleHypercomputeclusterClusterStorageResourcesFilestore {
}

export function googleHypercomputeclusterClusterStorageResourcesFilestoreToTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesFilestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleHypercomputeclusterClusterStorageResourcesFilestoreToHclTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesFilestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleHypercomputeclusterClusterStorageResourcesFilestoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleHypercomputeclusterClusterStorageResourcesFilestore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterStorageResourcesFilestore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filestore - computed: true, optional: false, required: false
  public get filestore() {
    return this.getStringAttribute('filestore');
  }
}

export class GoogleHypercomputeclusterClusterStorageResourcesFilestoreList extends cdktf.ComplexList {

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
  public get(index: number): GoogleHypercomputeclusterClusterStorageResourcesFilestoreOutputReference {
    return new GoogleHypercomputeclusterClusterStorageResourcesFilestoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleHypercomputeclusterClusterStorageResourcesLustre {
}

export function googleHypercomputeclusterClusterStorageResourcesLustreToTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesLustre): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleHypercomputeclusterClusterStorageResourcesLustreToHclTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesLustre): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleHypercomputeclusterClusterStorageResourcesLustreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleHypercomputeclusterClusterStorageResourcesLustre | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterStorageResourcesLustre | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lustre - computed: true, optional: false, required: false
  public get lustre() {
    return this.getStringAttribute('lustre');
  }
}

export class GoogleHypercomputeclusterClusterStorageResourcesLustreList extends cdktf.ComplexList {

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
  public get(index: number): GoogleHypercomputeclusterClusterStorageResourcesLustreOutputReference {
    return new GoogleHypercomputeclusterClusterStorageResourcesLustreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleHypercomputeclusterClusterStorageResourcesConfigExistingBucket {
  /**
  * Name of the Cloud Storage bucket to import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#bucket GoogleHypercomputeclusterCluster#bucket}
  */
  readonly bucket: string;
}

export function googleHypercomputeclusterClusterStorageResourcesConfigExistingBucketToTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfigExistingBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
  }
}


export function googleHypercomputeclusterClusterStorageResourcesConfigExistingBucketToHclTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfigExistingBucket): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterStorageResourcesConfigExistingBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterStorageResourcesConfigExistingBucket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
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
}
export interface GoogleHypercomputeclusterClusterStorageResourcesConfigExistingFilestore {
  /**
  * Name of the Filestore instance to import, in the format
  * 'projects/{project}/locations/{location}/instances/{instance}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#filestore GoogleHypercomputeclusterCluster#filestore}
  */
  readonly filestore: string;
}

export function googleHypercomputeclusterClusterStorageResourcesConfigExistingFilestoreToTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfigExistingFilestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filestore: cdktf.stringToTerraform(struct!.filestore),
  }
}


export function googleHypercomputeclusterClusterStorageResourcesConfigExistingFilestoreToHclTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfigExistingFilestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filestore: {
      value: cdktf.stringToHclTerraform(struct!.filestore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterStorageResourcesConfigExistingFilestore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filestore !== undefined) {
      hasAnyValues = true;
      internalValueResult.filestore = this._filestore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterStorageResourcesConfigExistingFilestore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filestore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filestore = value.filestore;
    }
  }

  // filestore - computed: false, optional: false, required: true
  private _filestore?: string; 
  public get filestore() {
    return this.getStringAttribute('filestore');
  }
  public set filestore(value: string) {
    this._filestore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filestoreInput() {
    return this._filestore;
  }
}
export interface GoogleHypercomputeclusterClusterStorageResourcesConfigExistingLustre {
  /**
  * Name of the Managed Lustre instance to import, in the format
  * 'projects/{project}/locations/{location}/instances/{instance}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#lustre GoogleHypercomputeclusterCluster#lustre}
  */
  readonly lustre: string;
}

export function googleHypercomputeclusterClusterStorageResourcesConfigExistingLustreToTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfigExistingLustre): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lustre: cdktf.stringToTerraform(struct!.lustre),
  }
}


export function googleHypercomputeclusterClusterStorageResourcesConfigExistingLustreToHclTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfigExistingLustre): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lustre: {
      value: cdktf.stringToHclTerraform(struct!.lustre),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterStorageResourcesConfigExistingLustre | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lustre !== undefined) {
      hasAnyValues = true;
      internalValueResult.lustre = this._lustre;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterStorageResourcesConfigExistingLustre | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lustre = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lustre = value.lustre;
    }
  }

  // lustre - computed: false, optional: false, required: true
  private _lustre?: string; 
  public get lustre() {
    return this.getStringAttribute('lustre');
  }
  public set lustre(value: string) {
    this._lustre = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lustreInput() {
    return this._lustre;
  }
}
export interface GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass {
  /**
  * Enables Auto-class feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#enabled GoogleHypercomputeclusterCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Terminal storage class of the autoclass bucket
  * Possible values:
  * NEARLINE
  * ARCHIVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#terminal_storage_class GoogleHypercomputeclusterCluster#terminal_storage_class}
  */
  readonly terminalStorageClass?: string;
}

export function googleHypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassToTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    terminal_storage_class: cdktf.stringToTerraform(struct!.terminalStorageClass),
  }
}


export function googleHypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassToHclTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass): any {
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
    terminal_storage_class: {
      value: cdktf.stringToHclTerraform(struct!.terminalStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._terminalStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminalStorageClass = this._terminalStorageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._terminalStorageClass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._terminalStorageClass = value.terminalStorageClass;
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

  // terminal_storage_class - computed: false, optional: true, required: false
  private _terminalStorageClass?: string; 
  public get terminalStorageClass() {
    return this.getStringAttribute('terminal_storage_class');
  }
  public set terminalStorageClass(value: string) {
    this._terminalStorageClass = value;
  }
  public resetTerminalStorageClass() {
    this._terminalStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalStorageClassInput() {
    return this._terminalStorageClass;
  }
}
export interface GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace {
  /**
  * Enables hierarchical namespace setup for the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#enabled GoogleHypercomputeclusterCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function googleHypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceToTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleHypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceToHclTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace): any {
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

export class GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
export interface GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucket {
  /**
  * Name of the Cloud Storage bucket to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#bucket GoogleHypercomputeclusterCluster#bucket}
  */
  readonly bucket: string;
  /**
  * If set, uses the provided storage class as the bucket's default storage
  * class.
  * Possible values:
  * STANDARD
  * NEARLINE
  * COLDLINE
  * ARCHIVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#storage_class GoogleHypercomputeclusterCluster#storage_class}
  */
  readonly storageClass?: string;
  /**
  * autoclass block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#autoclass GoogleHypercomputeclusterCluster#autoclass}
  */
  readonly autoclass?: GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass;
  /**
  * hierarchical_namespace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#hierarchical_namespace GoogleHypercomputeclusterCluster#hierarchical_namespace}
  */
  readonly hierarchicalNamespace?: GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace;
}

export function googleHypercomputeclusterClusterStorageResourcesConfigNewBucketToTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    autoclass: googleHypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassToTerraform(struct!.autoclass),
    hierarchical_namespace: googleHypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceToTerraform(struct!.hierarchicalNamespace),
  }
}


export function googleHypercomputeclusterClusterStorageResourcesConfigNewBucketToHclTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucket): any {
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
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoclass: {
      value: googleHypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassToHclTerraform(struct!.autoclass),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassList",
    },
    hierarchical_namespace: {
      value: googleHypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceToHclTerraform(struct!.hierarchicalNamespace),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._autoclass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoclass = this._autoclass?.internalValue;
    }
    if (this._hierarchicalNamespace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchicalNamespace = this._hierarchicalNamespace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._storageClass = undefined;
      this._autoclass.internalValue = undefined;
      this._hierarchicalNamespace.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._storageClass = value.storageClass;
      this._autoclass.internalValue = value.autoclass;
      this._hierarchicalNamespace.internalValue = value.hierarchicalNamespace;
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

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // autoclass - computed: false, optional: true, required: false
  private _autoclass = new GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference(this, "autoclass");
  public get autoclass() {
    return this._autoclass;
  }
  public putAutoclass(value: GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass) {
    this._autoclass.internalValue = value;
  }
  public resetAutoclass() {
    this._autoclass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoclassInput() {
    return this._autoclass.internalValue;
  }

  // hierarchical_namespace - computed: false, optional: true, required: false
  private _hierarchicalNamespace = new GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference(this, "hierarchical_namespace");
  public get hierarchicalNamespace() {
    return this._hierarchicalNamespace;
  }
  public putHierarchicalNamespace(value: GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace) {
    this._hierarchicalNamespace.internalValue = value;
  }
  public resetHierarchicalNamespace() {
    this._hierarchicalNamespace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchicalNamespaceInput() {
    return this._hierarchicalNamespace.internalValue;
  }
}
export interface GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileShares {
  /**
  * Size of the filestore in GB. Must be between 1024 and 102400, and must meet
  * scalability requirements described at
  * https://cloud.google.com/filestore/docs/service-tiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#capacity_gb GoogleHypercomputeclusterCluster#capacity_gb}
  */
  readonly capacityGb: string;
  /**
  * Filestore share location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#file_share GoogleHypercomputeclusterCluster#file_share}
  */
  readonly fileShare: string;
}

export function googleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesToTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileShares | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_gb: cdktf.stringToTerraform(struct!.capacityGb),
    file_share: cdktf.stringToTerraform(struct!.fileShare),
  }
}


export function googleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesToHclTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileShares | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_gb: {
      value: cdktf.stringToHclTerraform(struct!.capacityGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_share: {
      value: cdktf.stringToHclTerraform(struct!.fileShare),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileShares | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityGb = this._capacityGb;
    }
    if (this._fileShare !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileShare = this._fileShare;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileShares | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityGb = undefined;
      this._fileShare = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityGb = value.capacityGb;
      this._fileShare = value.fileShare;
    }
  }

  // capacity_gb - computed: false, optional: false, required: true
  private _capacityGb?: string; 
  public get capacityGb() {
    return this.getStringAttribute('capacity_gb');
  }
  public set capacityGb(value: string) {
    this._capacityGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityGbInput() {
    return this._capacityGb;
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
}

export class GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList extends cdktf.ComplexList {
  public internalValue? : GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileShares[] | cdktf.IResolvable

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
  public get(index: number): GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference {
    return new GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestore {
  /**
  * Description of the instance. Maximum of 2048 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#description GoogleHypercomputeclusterCluster#description}
  */
  readonly description?: string;
  /**
  * Name of the Filestore instance to create, in the format
  * 'projects/{project}/locations/{location}/instances/{instance}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#filestore GoogleHypercomputeclusterCluster#filestore}
  */
  readonly filestore: string;
  /**
  * Access protocol to use for all file shares in the instance. Defaults to NFS
  * V3 if not set.
  * Possible values:
  * NFSV3
  * NFSV41 Possible values: ["PROTOCOL_UNSPECIFIED", "NFSV3", "NFSV41"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#protocol GoogleHypercomputeclusterCluster#protocol}
  */
  readonly protocol?: string;
  /**
  * Service tier to use for the instance.
  * Possible values:
  * ZONAL
  * REGIONAL Possible values: ["TIER_UNSPECIFIED", "ZONAL", "REGIONAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#tier GoogleHypercomputeclusterCluster#tier}
  */
  readonly tier: string;
  /**
  * file_shares block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#file_shares GoogleHypercomputeclusterCluster#file_shares}
  */
  readonly fileShares: GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileShares[] | cdktf.IResolvable;
}

export function googleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreToTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    filestore: cdktf.stringToTerraform(struct!.filestore),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    tier: cdktf.stringToTerraform(struct!.tier),
    file_shares: cdktf.listMapper(googleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesToTerraform, true)(struct!.fileShares),
  }
}


export function googleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreToHclTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestore): any {
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
    filestore: {
      value: cdktf.stringToHclTerraform(struct!.filestore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_shares: {
      value: cdktf.listMapperHcl(googleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesToHclTerraform, true)(struct!.fileShares),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filestore !== undefined) {
      hasAnyValues = true;
      internalValueResult.filestore = this._filestore;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    if (this._fileShares?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileShares = this._fileShares?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._filestore = undefined;
      this._protocol = undefined;
      this._tier = undefined;
      this._fileShares.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._filestore = value.filestore;
      this._protocol = value.protocol;
      this._tier = value.tier;
      this._fileShares.internalValue = value.fileShares;
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

  // filestore - computed: false, optional: false, required: true
  private _filestore?: string; 
  public get filestore() {
    return this.getStringAttribute('filestore');
  }
  public set filestore(value: string) {
    this._filestore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filestoreInput() {
    return this._filestore;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // file_shares - computed: false, optional: false, required: true
  private _fileShares = new GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList(this, "file_shares", false);
  public get fileShares() {
    return this._fileShares;
  }
  public putFileShares(value: GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileShares[] | cdktf.IResolvable) {
    this._fileShares.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSharesInput() {
    return this._fileShares.internalValue;
  }
}
export interface GoogleHypercomputeclusterClusterStorageResourcesConfigNewLustre {
  /**
  * Storage capacity of the instance in gibibytes (GiB). Allowed values are
  * between 18000 and 7632000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#capacity_gb GoogleHypercomputeclusterCluster#capacity_gb}
  */
  readonly capacityGb: string;
  /**
  * Description of the Managed Lustre instance. Maximum of 2048 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#description GoogleHypercomputeclusterCluster#description}
  */
  readonly description?: string;
  /**
  * Filesystem name for this instance. This name is used by client-side tools,
  * including when mounting the instance. Must be 8 characters or less and can
  * only contain letters and numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#filesystem GoogleHypercomputeclusterCluster#filesystem}
  */
  readonly filesystem: string;
  /**
  * Name of the Managed Lustre instance to create, in the format
  * 'projects/{project}/locations/{location}/instances/{instance}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#lustre GoogleHypercomputeclusterCluster#lustre}
  */
  readonly lustre: string;
  /**
  * Throughput of the instance in MB/s/TiB. Valid values are 125, 250,
  * 500, 1000. See [Performance tiers and maximum storage
  * capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers)
  * for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#per_unit_storage_throughput GoogleHypercomputeclusterCluster#per_unit_storage_throughput}
  */
  readonly perUnitStorageThroughput?: string;
}

export function googleHypercomputeclusterClusterStorageResourcesConfigNewLustreToTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfigNewLustre): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_gb: cdktf.stringToTerraform(struct!.capacityGb),
    description: cdktf.stringToTerraform(struct!.description),
    filesystem: cdktf.stringToTerraform(struct!.filesystem),
    lustre: cdktf.stringToTerraform(struct!.lustre),
    per_unit_storage_throughput: cdktf.stringToTerraform(struct!.perUnitStorageThroughput),
  }
}


export function googleHypercomputeclusterClusterStorageResourcesConfigNewLustreToHclTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfigNewLustre): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_gb: {
      value: cdktf.stringToHclTerraform(struct!.capacityGb),
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
    filesystem: {
      value: cdktf.stringToHclTerraform(struct!.filesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lustre: {
      value: cdktf.stringToHclTerraform(struct!.lustre),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_unit_storage_throughput: {
      value: cdktf.stringToHclTerraform(struct!.perUnitStorageThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterStorageResourcesConfigNewLustre | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityGb = this._capacityGb;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystem = this._filesystem;
    }
    if (this._lustre !== undefined) {
      hasAnyValues = true;
      internalValueResult.lustre = this._lustre;
    }
    if (this._perUnitStorageThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.perUnitStorageThroughput = this._perUnitStorageThroughput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterStorageResourcesConfigNewLustre | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityGb = undefined;
      this._description = undefined;
      this._filesystem = undefined;
      this._lustre = undefined;
      this._perUnitStorageThroughput = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityGb = value.capacityGb;
      this._description = value.description;
      this._filesystem = value.filesystem;
      this._lustre = value.lustre;
      this._perUnitStorageThroughput = value.perUnitStorageThroughput;
    }
  }

  // capacity_gb - computed: false, optional: false, required: true
  private _capacityGb?: string; 
  public get capacityGb() {
    return this.getStringAttribute('capacity_gb');
  }
  public set capacityGb(value: string) {
    this._capacityGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityGbInput() {
    return this._capacityGb;
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

  // filesystem - computed: false, optional: false, required: true
  private _filesystem?: string; 
  public get filesystem() {
    return this.getStringAttribute('filesystem');
  }
  public set filesystem(value: string) {
    this._filesystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem;
  }

  // lustre - computed: false, optional: false, required: true
  private _lustre?: string; 
  public get lustre() {
    return this.getStringAttribute('lustre');
  }
  public set lustre(value: string) {
    this._lustre = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lustreInput() {
    return this._lustre;
  }

  // per_unit_storage_throughput - computed: false, optional: true, required: false
  private _perUnitStorageThroughput?: string; 
  public get perUnitStorageThroughput() {
    return this.getStringAttribute('per_unit_storage_throughput');
  }
  public set perUnitStorageThroughput(value: string) {
    this._perUnitStorageThroughput = value;
  }
  public resetPerUnitStorageThroughput() {
    this._perUnitStorageThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perUnitStorageThroughputInput() {
    return this._perUnitStorageThroughput;
  }
}
export interface GoogleHypercomputeclusterClusterStorageResourcesConfig {
  /**
  * existing_bucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#existing_bucket GoogleHypercomputeclusterCluster#existing_bucket}
  */
  readonly existingBucket?: GoogleHypercomputeclusterClusterStorageResourcesConfigExistingBucket;
  /**
  * existing_filestore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#existing_filestore GoogleHypercomputeclusterCluster#existing_filestore}
  */
  readonly existingFilestore?: GoogleHypercomputeclusterClusterStorageResourcesConfigExistingFilestore;
  /**
  * existing_lustre block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#existing_lustre GoogleHypercomputeclusterCluster#existing_lustre}
  */
  readonly existingLustre?: GoogleHypercomputeclusterClusterStorageResourcesConfigExistingLustre;
  /**
  * new_bucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#new_bucket GoogleHypercomputeclusterCluster#new_bucket}
  */
  readonly newBucket?: GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucket;
  /**
  * new_filestore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#new_filestore GoogleHypercomputeclusterCluster#new_filestore}
  */
  readonly newFilestore?: GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestore;
  /**
  * new_lustre block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#new_lustre GoogleHypercomputeclusterCluster#new_lustre}
  */
  readonly newLustre?: GoogleHypercomputeclusterClusterStorageResourcesConfigNewLustre;
}

export function googleHypercomputeclusterClusterStorageResourcesConfigToTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_bucket: googleHypercomputeclusterClusterStorageResourcesConfigExistingBucketToTerraform(struct!.existingBucket),
    existing_filestore: googleHypercomputeclusterClusterStorageResourcesConfigExistingFilestoreToTerraform(struct!.existingFilestore),
    existing_lustre: googleHypercomputeclusterClusterStorageResourcesConfigExistingLustreToTerraform(struct!.existingLustre),
    new_bucket: googleHypercomputeclusterClusterStorageResourcesConfigNewBucketToTerraform(struct!.newBucket),
    new_filestore: googleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreToTerraform(struct!.newFilestore),
    new_lustre: googleHypercomputeclusterClusterStorageResourcesConfigNewLustreToTerraform(struct!.newLustre),
  }
}


export function googleHypercomputeclusterClusterStorageResourcesConfigToHclTerraform(struct?: GoogleHypercomputeclusterClusterStorageResourcesConfigOutputReference | GoogleHypercomputeclusterClusterStorageResourcesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_bucket: {
      value: googleHypercomputeclusterClusterStorageResourcesConfigExistingBucketToHclTerraform(struct!.existingBucket),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterStorageResourcesConfigExistingBucketList",
    },
    existing_filestore: {
      value: googleHypercomputeclusterClusterStorageResourcesConfigExistingFilestoreToHclTerraform(struct!.existingFilestore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterStorageResourcesConfigExistingFilestoreList",
    },
    existing_lustre: {
      value: googleHypercomputeclusterClusterStorageResourcesConfigExistingLustreToHclTerraform(struct!.existingLustre),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterStorageResourcesConfigExistingLustreList",
    },
    new_bucket: {
      value: googleHypercomputeclusterClusterStorageResourcesConfigNewBucketToHclTerraform(struct!.newBucket),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketList",
    },
    new_filestore: {
      value: googleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreToHclTerraform(struct!.newFilestore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreList",
    },
    new_lustre: {
      value: googleHypercomputeclusterClusterStorageResourcesConfigNewLustreToHclTerraform(struct!.newLustre),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterStorageResourcesConfigNewLustreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterStorageResourcesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterStorageResourcesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingBucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingBucket = this._existingBucket?.internalValue;
    }
    if (this._existingFilestore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingFilestore = this._existingFilestore?.internalValue;
    }
    if (this._existingLustre?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingLustre = this._existingLustre?.internalValue;
    }
    if (this._newBucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newBucket = this._newBucket?.internalValue;
    }
    if (this._newFilestore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newFilestore = this._newFilestore?.internalValue;
    }
    if (this._newLustre?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newLustre = this._newLustre?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterStorageResourcesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingBucket.internalValue = undefined;
      this._existingFilestore.internalValue = undefined;
      this._existingLustre.internalValue = undefined;
      this._newBucket.internalValue = undefined;
      this._newFilestore.internalValue = undefined;
      this._newLustre.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingBucket.internalValue = value.existingBucket;
      this._existingFilestore.internalValue = value.existingFilestore;
      this._existingLustre.internalValue = value.existingLustre;
      this._newBucket.internalValue = value.newBucket;
      this._newFilestore.internalValue = value.newFilestore;
      this._newLustre.internalValue = value.newLustre;
    }
  }

  // existing_bucket - computed: false, optional: true, required: false
  private _existingBucket = new GoogleHypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference(this, "existing_bucket");
  public get existingBucket() {
    return this._existingBucket;
  }
  public putExistingBucket(value: GoogleHypercomputeclusterClusterStorageResourcesConfigExistingBucket) {
    this._existingBucket.internalValue = value;
  }
  public resetExistingBucket() {
    this._existingBucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingBucketInput() {
    return this._existingBucket.internalValue;
  }

  // existing_filestore - computed: false, optional: true, required: false
  private _existingFilestore = new GoogleHypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference(this, "existing_filestore");
  public get existingFilestore() {
    return this._existingFilestore;
  }
  public putExistingFilestore(value: GoogleHypercomputeclusterClusterStorageResourcesConfigExistingFilestore) {
    this._existingFilestore.internalValue = value;
  }
  public resetExistingFilestore() {
    this._existingFilestore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingFilestoreInput() {
    return this._existingFilestore.internalValue;
  }

  // existing_lustre - computed: false, optional: true, required: false
  private _existingLustre = new GoogleHypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference(this, "existing_lustre");
  public get existingLustre() {
    return this._existingLustre;
  }
  public putExistingLustre(value: GoogleHypercomputeclusterClusterStorageResourcesConfigExistingLustre) {
    this._existingLustre.internalValue = value;
  }
  public resetExistingLustre() {
    this._existingLustre.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingLustreInput() {
    return this._existingLustre.internalValue;
  }

  // new_bucket - computed: false, optional: true, required: false
  private _newBucket = new GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference(this, "new_bucket");
  public get newBucket() {
    return this._newBucket;
  }
  public putNewBucket(value: GoogleHypercomputeclusterClusterStorageResourcesConfigNewBucket) {
    this._newBucket.internalValue = value;
  }
  public resetNewBucket() {
    this._newBucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newBucketInput() {
    return this._newBucket.internalValue;
  }

  // new_filestore - computed: false, optional: true, required: false
  private _newFilestore = new GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference(this, "new_filestore");
  public get newFilestore() {
    return this._newFilestore;
  }
  public putNewFilestore(value: GoogleHypercomputeclusterClusterStorageResourcesConfigNewFilestore) {
    this._newFilestore.internalValue = value;
  }
  public resetNewFilestore() {
    this._newFilestore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newFilestoreInput() {
    return this._newFilestore.internalValue;
  }

  // new_lustre - computed: false, optional: true, required: false
  private _newLustre = new GoogleHypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference(this, "new_lustre");
  public get newLustre() {
    return this._newLustre;
  }
  public putNewLustre(value: GoogleHypercomputeclusterClusterStorageResourcesConfigNewLustre) {
    this._newLustre.internalValue = value;
  }
  public resetNewLustre() {
    this._newLustre.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newLustreInput() {
    return this._newLustre.internalValue;
  }
}
export interface GoogleHypercomputeclusterClusterStorageResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#id GoogleHypercomputeclusterCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#config GoogleHypercomputeclusterCluster#config}
  */
  readonly config: GoogleHypercomputeclusterClusterStorageResourcesConfig;
}

export function googleHypercomputeclusterClusterStorageResourcesToTerraform(struct?: GoogleHypercomputeclusterClusterStorageResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    config: googleHypercomputeclusterClusterStorageResourcesConfigToTerraform(struct!.config),
  }
}


export function googleHypercomputeclusterClusterStorageResourcesToHclTerraform(struct?: GoogleHypercomputeclusterClusterStorageResources | cdktf.IResolvable): any {
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
    config: {
      value: googleHypercomputeclusterClusterStorageResourcesConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHypercomputeclusterClusterStorageResourcesConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHypercomputeclusterClusterStorageResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleHypercomputeclusterClusterStorageResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHypercomputeclusterClusterStorageResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._config.internalValue = value.config;
    }
  }

  // bucket - computed: true, optional: false, required: false
  private _bucket = new GoogleHypercomputeclusterClusterStorageResourcesBucketList(this, "bucket", false);
  public get bucket() {
    return this._bucket;
  }

  // filestore - computed: true, optional: false, required: false
  private _filestore = new GoogleHypercomputeclusterClusterStorageResourcesFilestoreList(this, "filestore", false);
  public get filestore() {
    return this._filestore;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lustre - computed: true, optional: false, required: false
  private _lustre = new GoogleHypercomputeclusterClusterStorageResourcesLustreList(this, "lustre", false);
  public get lustre() {
    return this._lustre;
  }

  // config - computed: false, optional: false, required: true
  private _config = new GoogleHypercomputeclusterClusterStorageResourcesConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleHypercomputeclusterClusterStorageResourcesConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class GoogleHypercomputeclusterClusterStorageResourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleHypercomputeclusterClusterStorageResources[] | cdktf.IResolvable

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
  public get(index: number): GoogleHypercomputeclusterClusterStorageResourcesOutputReference {
    return new GoogleHypercomputeclusterClusterStorageResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleHypercomputeclusterClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#create GoogleHypercomputeclusterCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#delete GoogleHypercomputeclusterCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#update GoogleHypercomputeclusterCluster#update}
  */
  readonly update?: string;
}

export function googleHypercomputeclusterClusterTimeoutsToTerraform(struct?: GoogleHypercomputeclusterClusterTimeouts | cdktf.IResolvable): any {
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


export function googleHypercomputeclusterClusterTimeoutsToHclTerraform(struct?: GoogleHypercomputeclusterClusterTimeouts | cdktf.IResolvable): any {
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

export class GoogleHypercomputeclusterClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleHypercomputeclusterClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleHypercomputeclusterClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster google_hypercomputecluster_cluster}
*/
export class GoogleHypercomputeclusterCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_hypercomputecluster_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleHypercomputeclusterCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleHypercomputeclusterCluster to import
  * @param importFromId The id of the existing GoogleHypercomputeclusterCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleHypercomputeclusterCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_hypercomputecluster_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_hypercomputecluster_cluster google_hypercomputecluster_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleHypercomputeclusterClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleHypercomputeclusterClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_hypercomputecluster_cluster',
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
    this._clusterId = config.clusterId;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._computeResources.internalValue = config.computeResources;
    this._networkResources.internalValue = config.networkResources;
    this._orchestrator.internalValue = config.orchestrator;
    this._storageResources.internalValue = config.storageResources;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
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

  // compute_resources - computed: false, optional: true, required: false
  private _computeResources = new GoogleHypercomputeclusterClusterComputeResourcesList(this, "compute_resources", true);
  public get computeResources() {
    return this._computeResources;
  }
  public putComputeResources(value: GoogleHypercomputeclusterClusterComputeResources[] | cdktf.IResolvable) {
    this._computeResources.internalValue = value;
  }
  public resetComputeResources() {
    this._computeResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeResourcesInput() {
    return this._computeResources.internalValue;
  }

  // network_resources - computed: false, optional: false, required: true
  private _networkResources = new GoogleHypercomputeclusterClusterNetworkResourcesList(this, "network_resources", true);
  public get networkResources() {
    return this._networkResources;
  }
  public putNetworkResources(value: GoogleHypercomputeclusterClusterNetworkResources[] | cdktf.IResolvable) {
    this._networkResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourcesInput() {
    return this._networkResources.internalValue;
  }

  // orchestrator - computed: false, optional: true, required: false
  private _orchestrator = new GoogleHypercomputeclusterClusterOrchestratorOutputReference(this, "orchestrator");
  public get orchestrator() {
    return this._orchestrator;
  }
  public putOrchestrator(value: GoogleHypercomputeclusterClusterOrchestrator) {
    this._orchestrator.internalValue = value;
  }
  public resetOrchestrator() {
    this._orchestrator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestratorInput() {
    return this._orchestrator.internalValue;
  }

  // storage_resources - computed: false, optional: true, required: false
  private _storageResources = new GoogleHypercomputeclusterClusterStorageResourcesList(this, "storage_resources", true);
  public get storageResources() {
    return this._storageResources;
  }
  public putStorageResources(value: GoogleHypercomputeclusterClusterStorageResources[] | cdktf.IResolvable) {
    this._storageResources.internalValue = value;
  }
  public resetStorageResources() {
    this._storageResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageResourcesInput() {
    return this._storageResources.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleHypercomputeclusterClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleHypercomputeclusterClusterTimeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      compute_resources: cdktf.listMapper(googleHypercomputeclusterClusterComputeResourcesToTerraform, true)(this._computeResources.internalValue),
      network_resources: cdktf.listMapper(googleHypercomputeclusterClusterNetworkResourcesToTerraform, true)(this._networkResources.internalValue),
      orchestrator: googleHypercomputeclusterClusterOrchestratorToTerraform(this._orchestrator.internalValue),
      storage_resources: cdktf.listMapper(googleHypercomputeclusterClusterStorageResourcesToTerraform, true)(this._storageResources.internalValue),
      timeouts: googleHypercomputeclusterClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      compute_resources: {
        value: cdktf.listMapperHcl(googleHypercomputeclusterClusterComputeResourcesToHclTerraform, true)(this._computeResources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleHypercomputeclusterClusterComputeResourcesList",
      },
      network_resources: {
        value: cdktf.listMapperHcl(googleHypercomputeclusterClusterNetworkResourcesToHclTerraform, true)(this._networkResources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleHypercomputeclusterClusterNetworkResourcesList",
      },
      orchestrator: {
        value: googleHypercomputeclusterClusterOrchestratorToHclTerraform(this._orchestrator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleHypercomputeclusterClusterOrchestratorList",
      },
      storage_resources: {
        value: cdktf.listMapperHcl(googleHypercomputeclusterClusterStorageResourcesToHclTerraform, true)(this._storageResources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleHypercomputeclusterClusterStorageResourcesList",
      },
      timeouts: {
        value: googleHypercomputeclusterClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleHypercomputeclusterClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
