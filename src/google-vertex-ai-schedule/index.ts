// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleVertexAiScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether new scheduled runs can be queued when max_concurrent_runs limit is reached. If set to true, new runs will be queued instead of skipped. Default to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#allow_queueing GoogleVertexAiSchedule#allow_queueing}
  */
  readonly allowQueueing?: boolean | cdktf.IResolvable;
  /**
  * Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#cron GoogleVertexAiSchedule#cron}
  */
  readonly cron?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#deletion_policy GoogleVertexAiSchedule#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * User provided name of the Schedule. The name can be up to 128 characters long and can consist of any UTF-8 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#display_name GoogleVertexAiSchedule#display_name}
  */
  readonly displayName: string;
  /**
  * Timestamp after which no new runs can be scheduled. If specified, The schedule will be completed when either end_time is reached or when scheduled_run_count >= max_run_count. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#end_time GoogleVertexAiSchedule#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#id GoogleVertexAiSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the Schedule. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#location GoogleVertexAiSchedule#location}
  */
  readonly location: string;
  /**
  * Specifies the maximum number of active runs that can be executed concurrently for this Schedule. This limits the number of runs that can be in a non-terminal state at the same time. Currently, this field is only supported for requests of type CreatePipelineJobRequest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#max_concurrent_active_run_count GoogleVertexAiSchedule#max_concurrent_active_run_count}
  */
  readonly maxConcurrentActiveRunCount?: string;
  /**
  * Maximum number of runs that can be started concurrently for this Schedule. This is the limit for starting the scheduled requests and not the execution of the operations/jobs created by the requests (if applicable).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#max_concurrent_run_count GoogleVertexAiSchedule#max_concurrent_run_count}
  */
  readonly maxConcurrentRunCount: string;
  /**
  * Maximum run count of the schedule. If specified, The schedule will be completed when either started_run_count >= max_run_count or when end_time is reached. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#max_run_count GoogleVertexAiSchedule#max_run_count}
  */
  readonly maxRunCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#project GoogleVertexAiSchedule#project}
  */
  readonly project?: string;
  /**
  * Timestamp after which the first run can be scheduled. Default to Schedule create time if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#start_time GoogleVertexAiSchedule#start_time}
  */
  readonly startTime?: string;
  /**
  * create_notebook_execution_job_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#create_notebook_execution_job_request GoogleVertexAiSchedule#create_notebook_execution_job_request}
  */
  readonly createNotebookExecutionJobRequest?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequest;
  /**
  * create_pipeline_job_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#create_pipeline_job_request GoogleVertexAiSchedule#create_pipeline_job_request}
  */
  readonly createPipelineJobRequest?: GoogleVertexAiScheduleCreatePipelineJobRequest;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#timeouts GoogleVertexAiSchedule#timeouts}
  */
  readonly timeouts?: GoogleVertexAiScheduleTimeouts;
}
export interface GoogleVertexAiScheduleLastScheduledRunResponse {
}

export function googleVertexAiScheduleLastScheduledRunResponseToTerraform(struct?: GoogleVertexAiScheduleLastScheduledRunResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVertexAiScheduleLastScheduledRunResponseToHclTerraform(struct?: GoogleVertexAiScheduleLastScheduledRunResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiScheduleLastScheduledRunResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleVertexAiScheduleLastScheduledRunResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiScheduleLastScheduledRunResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // run_response - computed: true, optional: false, required: false
  public get runResponse() {
    return this.getStringAttribute('run_response');
  }

  // scheduled_run_time - computed: true, optional: false, required: false
  public get scheduledRunTime() {
    return this.getStringAttribute('scheduled_run_time');
  }
}

export class GoogleVertexAiScheduleLastScheduledRunResponseList extends cdktf.ComplexList {

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
  public get(index: number): GoogleVertexAiScheduleLastScheduledRunResponseOutputReference {
    return new GoogleVertexAiScheduleLastScheduledRunResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity {
  /**
  * Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, use 'compute.googleapis.com/reservation-name' as the key and specify the name of your reservation as its value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#key GoogleVertexAiSchedule#key}
  */
  readonly key?: string;
  /**
  * Specifies the reservation affinity type. Possible values: NO_RESERVATION ANY_RESERVATION SPECIFIC_RESERVATION SPECIFIC_THEN_ANY_RESERVATION SPECIFIC_THEN_NO_RESERVATION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#reservation_affinity_type GoogleVertexAiSchedule#reservation_affinity_type}
  */
  readonly reservationAffinityType: string;
  /**
  * When set to true, resources will be drawn from go/cloud-ai-gcp-pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#use_reservation_pool GoogleVertexAiSchedule#use_reservation_pool}
  */
  readonly useReservationPool?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to the label values of a reservation resource. This must be the full resource name of the reservation or reservation block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#values GoogleVertexAiSchedule#values}
  */
  readonly values?: string[];
}

export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityToTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    reservation_affinity_type: cdktf.stringToTerraform(struct!.reservationAffinityType),
    use_reservation_pool: cdktf.booleanToTerraform(struct!.useReservationPool),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityToHclTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity): any {
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
    reservation_affinity_type: {
      value: cdktf.stringToHclTerraform(struct!.reservationAffinityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_reservation_pool: {
      value: cdktf.booleanToHclTerraform(struct!.useReservationPool),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._reservationAffinityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinityType = this._reservationAffinityType;
    }
    if (this._useReservationPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.useReservationPool = this._useReservationPool;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._reservationAffinityType = undefined;
      this._useReservationPool = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._reservationAffinityType = value.reservationAffinityType;
      this._useReservationPool = value.useReservationPool;
      this._values = value.values;
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

  // reservation_affinity_type - computed: false, optional: false, required: true
  private _reservationAffinityType?: string; 
  public get reservationAffinityType() {
    return this.getStringAttribute('reservation_affinity_type');
  }
  public set reservationAffinityType(value: string) {
    this._reservationAffinityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityTypeInput() {
    return this._reservationAffinityType;
  }

  // use_reservation_pool - computed: false, optional: true, required: false
  private _useReservationPool?: boolean | cdktf.IResolvable; 
  public get useReservationPool() {
    return this.getBooleanAttribute('use_reservation_pool');
  }
  public set useReservationPool(value: boolean | cdktf.IResolvable) {
    this._useReservationPool = value;
  }
  public resetUseReservationPool() {
    this._useReservationPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useReservationPoolInput() {
    return this._useReservationPool;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec {
  /**
  * The number of accelerators to attach to the machine. For accelerator optimized machine types (https://cloud.google.com/compute/docs/accelerator-optimized-machines), One may set the accelerator_count from 1 to N for machine with N GPUs. If accelerator_count is less than or equal to N / 2, Vertex will co-schedule the replicas of the model into the same VM to save cost. For example, if the machine type is a3-highgpu-8g, which has 8 H100 GPUs, one can set accelerator_count to 1 to 8. If accelerator_count is 1, 2, 3, or 4, Vertex will co-schedule 8, 4, 2, or 2 replicas of the model into the same VM to save cost. When co-scheduling, CPU, memory and storage on the VM will be distributed to replicas on the VM. For example, one can expect a co-scheduled replica requesting 2 GPUs out of a 8-GPU VM will receive 25% of the CPU, memory and storage of the VM. Note that the feature is not compatible with multihost_gpu_node_count. When multihost_gpu_node_count is set, the co-scheduling will not be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#accelerator_count GoogleVertexAiSchedule#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
  * Possible values: NVIDIA_TESLA_K80 NVIDIA_TESLA_P100 NVIDIA_TESLA_V100 NVIDIA_TESLA_P4 NVIDIA_TESLA_T4 NVIDIA_TESLA_A100 NVIDIA_A100_80GB NVIDIA_L4 NVIDIA_H100_80GB NVIDIA_H100_MEGA_80GB NVIDIA_H200_141GB NVIDIA_B200 NVIDIA_GB200 NVIDIA_RTX_PRO_6000 TPU_V2 TPU_V3 TPU_V4_POD TPU_V5_LITEPOD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#accelerator_type GoogleVertexAiSchedule#accelerator_type}
  */
  readonly acceleratorType?: string;
  /**
  * The Nvidia GPU partition size. When specified, the requested accelerators will be partitioned into smaller GPU partitions. For example, if the request is for 8 units of NVIDIA A100 GPUs, and gpu_partition_size="1g.10gb", the service will create 8 * 7 = 56 partitioned MIG instances. The partition size must be a value supported by the requested accelerator. Refer to [Nvidia GPU Partitioning](https://cloud.google.com/kubernetes-engine/docs/how-to/gpus-multi#multi-instance_gpu_partitions) for the available partition sizes. If set, the accelerator_count should be set to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#gpu_partition_size GoogleVertexAiSchedule#gpu_partition_size}
  */
  readonly gpuPartitionSize?: string;
  /**
  * The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types) See the [list of machine types supported for custom training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types). For DeployedModel this field is optional, and the default value is 'n1-standard-2'. For BatchPredictionJob or as part of WorkerPoolSpec this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#machine_type GoogleVertexAiSchedule#machine_type}
  */
  readonly machineType?: string;
  /**
  * The topology of the TPUs. Corresponds to the TPU topologies available from GKE. (Example: tpu_topology: "2x2x1").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#tpu_topology GoogleVertexAiSchedule#tpu_topology}
  */
  readonly tpuTopology?: string;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#reservation_affinity GoogleVertexAiSchedule#reservation_affinity}
  */
  readonly reservationAffinity?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity;
}

export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecToTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
    gpu_partition_size: cdktf.stringToTerraform(struct!.gpuPartitionSize),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    tpu_topology: cdktf.stringToTerraform(struct!.tpuTopology),
    reservation_affinity: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityToTerraform(struct!.reservationAffinity),
  }
}


export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecToHclTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec): any {
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
    gpu_partition_size: {
      value: cdktf.stringToHclTerraform(struct!.gpuPartitionSize),
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
    tpu_topology: {
      value: cdktf.stringToHclTerraform(struct!.tpuTopology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reservation_affinity: {
      value: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec | undefined {
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
    if (this._gpuPartitionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuPartitionSize = this._gpuPartitionSize;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._tpuTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpuTopology = this._tpuTopology;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratorCount = undefined;
      this._acceleratorType = undefined;
      this._gpuPartitionSize = undefined;
      this._machineType = undefined;
      this._tpuTopology = undefined;
      this._reservationAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratorCount = value.acceleratorCount;
      this._acceleratorType = value.acceleratorType;
      this._gpuPartitionSize = value.gpuPartitionSize;
      this._machineType = value.machineType;
      this._tpuTopology = value.tpuTopology;
      this._reservationAffinity.internalValue = value.reservationAffinity;
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

  // gpu_partition_size - computed: false, optional: true, required: false
  private _gpuPartitionSize?: string; 
  public get gpuPartitionSize() {
    return this.getStringAttribute('gpu_partition_size');
  }
  public set gpuPartitionSize(value: string) {
    this._gpuPartitionSize = value;
  }
  public resetGpuPartitionSize() {
    this._gpuPartitionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuPartitionSizeInput() {
    return this._gpuPartitionSize;
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

  // tpu_topology - computed: false, optional: true, required: false
  private _tpuTopology?: string; 
  public get tpuTopology() {
    return this.getStringAttribute('tpu_topology');
  }
  public set tpuTopology(value: string) {
    this._tpuTopology = value;
  }
  public resetTpuTopology() {
    this._tpuTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpuTopologyInput() {
    return this._tpuTopology;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }
}
export interface GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec {
  /**
  * Whether to enable public internet access. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#enable_internet_access GoogleVertexAiSchedule#enable_internet_access}
  */
  readonly enableInternetAccess?: boolean | cdktf.IResolvable;
  /**
  * The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#network GoogleVertexAiSchedule#network}
  */
  readonly network?: string;
  /**
  * The name of the subnet that this instance is in. Format: 'projects/{project_id_or_number}/regions/{region}/subnetworks/{subnetwork_id}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#subnetwork GoogleVertexAiSchedule#subnetwork}
  */
  readonly subnetwork?: string;
}

export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecToTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_internet_access: cdktf.booleanToTerraform(struct!.enableInternetAccess),
    network: cdktf.stringToTerraform(struct!.network),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
  }
}


export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecToHclTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_internet_access: {
      value: cdktf.booleanToHclTerraform(struct!.enableInternetAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInternetAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInternetAccess = this._enableInternetAccess;
    }
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

  public set internalValue(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableInternetAccess = undefined;
      this._network = undefined;
      this._subnetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableInternetAccess = value.enableInternetAccess;
      this._network = value.network;
      this._subnetwork = value.subnetwork;
    }
  }

  // enable_internet_access - computed: false, optional: true, required: false
  private _enableInternetAccess?: boolean | cdktf.IResolvable; 
  public get enableInternetAccess() {
    return this.getBooleanAttribute('enable_internet_access');
  }
  public set enableInternetAccess(value: boolean | cdktf.IResolvable) {
    this._enableInternetAccess = value;
  }
  public resetEnableInternetAccess() {
    this._enableInternetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetAccessInput() {
    return this._enableInternetAccess;
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

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }
}
export interface GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec {
  /**
  * Size in GB of the disk (default is 100GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#disk_size_gb GoogleVertexAiSchedule#disk_size_gb}
  */
  readonly diskSizeGb?: string;
  /**
  * Type of the disk (default is "pd-standard"). Valid values: "pd-ssd" (Persistent Disk Solid State Drive) "pd-standard" (Persistent Disk Hard Disk Drive) "pd-balanced" (Balanced Persistent Disk) "pd-extreme" (Extreme Persistent Disk)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#disk_type GoogleVertexAiSchedule#disk_type}
  */
  readonly diskType?: string;
}

export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecToTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_gb: cdktf.stringToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
  }
}


export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecToHclTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_gb: {
      value: cdktf.stringToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
    }
  }

  // disk_size_gb - computed: false, optional: true, required: false
  private _diskSizeGb?: string; 
  public get diskSizeGb() {
    return this.getStringAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: string) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }
}
export interface GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec {
  /**
  * machine_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#machine_spec GoogleVertexAiSchedule#machine_spec}
  */
  readonly machineSpec?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec;
  /**
  * network_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#network_spec GoogleVertexAiSchedule#network_spec}
  */
  readonly networkSpec?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec;
  /**
  * persistent_disk_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#persistent_disk_spec GoogleVertexAiSchedule#persistent_disk_spec}
  */
  readonly persistentDiskSpec?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec;
}

export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecToTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_spec: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecToTerraform(struct!.machineSpec),
    network_spec: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecToTerraform(struct!.networkSpec),
    persistent_disk_spec: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecToTerraform(struct!.persistentDiskSpec),
  }
}


export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecToHclTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_spec: {
      value: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecToHclTerraform(struct!.machineSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecList",
    },
    network_spec: {
      value: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecToHclTerraform(struct!.networkSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecList",
    },
    persistent_disk_spec: {
      value: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecToHclTerraform(struct!.persistentDiskSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineSpec = this._machineSpec?.internalValue;
    }
    if (this._networkSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSpec = this._networkSpec?.internalValue;
    }
    if (this._persistentDiskSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentDiskSpec = this._persistentDiskSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._machineSpec.internalValue = undefined;
      this._networkSpec.internalValue = undefined;
      this._persistentDiskSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._machineSpec.internalValue = value.machineSpec;
      this._networkSpec.internalValue = value.networkSpec;
      this._persistentDiskSpec.internalValue = value.persistentDiskSpec;
    }
  }

  // machine_spec - computed: false, optional: true, required: false
  private _machineSpec = new GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference(this, "machine_spec");
  public get machineSpec() {
    return this._machineSpec;
  }
  public putMachineSpec(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec) {
    this._machineSpec.internalValue = value;
  }
  public resetMachineSpec() {
    this._machineSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSpecInput() {
    return this._machineSpec.internalValue;
  }

  // network_spec - computed: false, optional: true, required: false
  private _networkSpec = new GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference(this, "network_spec");
  public get networkSpec() {
    return this._networkSpec;
  }
  public putNetworkSpec(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec) {
    this._networkSpec.internalValue = value;
  }
  public resetNetworkSpec() {
    this._networkSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSpecInput() {
    return this._networkSpec.internalValue;
  }

  // persistent_disk_spec - computed: false, optional: true, required: false
  private _persistentDiskSpec = new GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference(this, "persistent_disk_spec");
  public get persistentDiskSpec() {
    return this._persistentDiskSpec;
  }
  public putPersistentDiskSpec(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec) {
    this._persistentDiskSpec.internalValue = value;
  }
  public resetPersistentDiskSpec() {
    this._persistentDiskSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentDiskSpecInput() {
    return this._persistentDiskSpec.internalValue;
  }
}
export interface GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource {
  /**
  * The commit SHA to read repository with. If unset, the file will be read at HEAD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#commit_sha GoogleVertexAiSchedule#commit_sha}
  */
  readonly commitSha?: string;
  /**
  * The resource name of the Dataform Repository. Format: 'projects/{project_id}/locations/{location}/repositories/{repository_id}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#dataform_repository_resource_name GoogleVertexAiSchedule#dataform_repository_resource_name}
  */
  readonly dataformRepositoryResourceName?: string;
}

export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceToTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commit_sha: cdktf.stringToTerraform(struct!.commitSha),
    dataform_repository_resource_name: cdktf.stringToTerraform(struct!.dataformRepositoryResourceName),
  }
}


export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceToHclTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commit_sha: {
      value: cdktf.stringToHclTerraform(struct!.commitSha),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataform_repository_resource_name: {
      value: cdktf.stringToHclTerraform(struct!.dataformRepositoryResourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitSha !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitSha = this._commitSha;
    }
    if (this._dataformRepositoryResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataformRepositoryResourceName = this._dataformRepositoryResourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commitSha = undefined;
      this._dataformRepositoryResourceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commitSha = value.commitSha;
      this._dataformRepositoryResourceName = value.dataformRepositoryResourceName;
    }
  }

  // commit_sha - computed: false, optional: true, required: false
  private _commitSha?: string; 
  public get commitSha() {
    return this.getStringAttribute('commit_sha');
  }
  public set commitSha(value: string) {
    this._commitSha = value;
  }
  public resetCommitSha() {
    this._commitSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitShaInput() {
    return this._commitSha;
  }

  // dataform_repository_resource_name - computed: false, optional: true, required: false
  private _dataformRepositoryResourceName?: string; 
  public get dataformRepositoryResourceName() {
    return this.getStringAttribute('dataform_repository_resource_name');
  }
  public set dataformRepositoryResourceName(value: string) {
    this._dataformRepositoryResourceName = value;
  }
  public resetDataformRepositoryResourceName() {
    this._dataformRepositoryResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataformRepositoryResourceNameInput() {
    return this._dataformRepositoryResourceName;
  }
}
export interface GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource {
  /**
  * The base64-encoded contents of the input notebook file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#content GoogleVertexAiSchedule#content}
  */
  readonly content?: string;
}

export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceToTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
  }
}


export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceToHclTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }
}
export interface GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec {
  /**
  * Resource name of the Cloud KMS key used to protect the resource. The Cloud KMS key must be in the same region as the resource. It must have the format 'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#kms_key_name GoogleVertexAiSchedule#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecToTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecToHclTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec): any {
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

export class GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec | undefined) {
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
export interface GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource {
  /**
  * The version of the Cloud Storage object to read. If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#generation GoogleVertexAiSchedule#generation}
  */
  readonly generation?: string;
  /**
  * The Cloud Storage uri pointing to the ipynb file. Format: 'gs://bucket/notebook_file.ipynb'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#uri GoogleVertexAiSchedule#uri}
  */
  readonly uri?: string;
}

export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceToTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation: cdktf.stringToTerraform(struct!.generation),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceToHclTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation: {
      value: cdktf.stringToHclTerraform(struct!.generation),
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

export class GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generation = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generation = value.generation;
      this._uri = value.uri;
    }
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
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
export interface GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime {
}

export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeToTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeToHclTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob {
  /**
  * The display name of the NotebookExecutionJob. The name can be up to 128 characters long and can consist of any UTF-8 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#display_name GoogleVertexAiSchedule#display_name}
  */
  readonly displayName?: string;
  /**
  * Max running time of the execution job in seconds (default 86400s / 24 hrs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#execution_timeout GoogleVertexAiSchedule#execution_timeout}
  */
  readonly executionTimeout?: string;
  /**
  * The user email to run the execution as. Only supported by Colab runtimes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#execution_user GoogleVertexAiSchedule#execution_user}
  */
  readonly executionUser?: string;
  /**
  * The Cloud Storage location to upload the result to. Format: 'gs://bucket-name'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#gcs_output_uri GoogleVertexAiSchedule#gcs_output_uri}
  */
  readonly gcsOutputUri?: string;
  /**
  * The name of the kernel to use during notebook execution. If unset, the default kernel is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#kernel_name GoogleVertexAiSchedule#kernel_name}
  */
  readonly kernelName?: string;
  /**
  * The labels with user-defined metadata to organize NotebookExecutionJobs. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#labels GoogleVertexAiSchedule#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The NotebookRuntimeTemplate to source compute configuration from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#notebook_runtime_template_resource_name GoogleVertexAiSchedule#notebook_runtime_template_resource_name}
  */
  readonly notebookRuntimeTemplateResourceName?: string;
  /**
  * The user-defined parameters to use during notebook execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#parameters GoogleVertexAiSchedule#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The service account to run the execution as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#service_account GoogleVertexAiSchedule#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * custom_environment_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#custom_environment_spec GoogleVertexAiSchedule#custom_environment_spec}
  */
  readonly customEnvironmentSpec?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec;
  /**
  * dataform_repository_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#dataform_repository_source GoogleVertexAiSchedule#dataform_repository_source}
  */
  readonly dataformRepositorySource?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource;
  /**
  * direct_notebook_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#direct_notebook_source GoogleVertexAiSchedule#direct_notebook_source}
  */
  readonly directNotebookSource?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#encryption_spec GoogleVertexAiSchedule#encryption_spec}
  */
  readonly encryptionSpec?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec;
  /**
  * gcs_notebook_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#gcs_notebook_source GoogleVertexAiSchedule#gcs_notebook_source}
  */
  readonly gcsNotebookSource?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource;
  /**
  * workbench_runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#workbench_runtime GoogleVertexAiSchedule#workbench_runtime}
  */
  readonly workbenchRuntime?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime;
}

export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobToTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    execution_timeout: cdktf.stringToTerraform(struct!.executionTimeout),
    execution_user: cdktf.stringToTerraform(struct!.executionUser),
    gcs_output_uri: cdktf.stringToTerraform(struct!.gcsOutputUri),
    kernel_name: cdktf.stringToTerraform(struct!.kernelName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    notebook_runtime_template_resource_name: cdktf.stringToTerraform(struct!.notebookRuntimeTemplateResourceName),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    custom_environment_spec: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecToTerraform(struct!.customEnvironmentSpec),
    dataform_repository_source: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceToTerraform(struct!.dataformRepositorySource),
    direct_notebook_source: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceToTerraform(struct!.directNotebookSource),
    encryption_spec: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecToTerraform(struct!.encryptionSpec),
    gcs_notebook_source: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceToTerraform(struct!.gcsNotebookSource),
    workbench_runtime: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeToTerraform(struct!.workbenchRuntime),
  }
}


export function googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobToHclTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_timeout: {
      value: cdktf.stringToHclTerraform(struct!.executionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_user: {
      value: cdktf.stringToHclTerraform(struct!.executionUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_output_uri: {
      value: cdktf.stringToHclTerraform(struct!.gcsOutputUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kernel_name: {
      value: cdktf.stringToHclTerraform(struct!.kernelName),
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
    notebook_runtime_template_resource_name: {
      value: cdktf.stringToHclTerraform(struct!.notebookRuntimeTemplateResourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_environment_spec: {
      value: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecToHclTerraform(struct!.customEnvironmentSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecList",
    },
    dataform_repository_source: {
      value: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceToHclTerraform(struct!.dataformRepositorySource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceList",
    },
    direct_notebook_source: {
      value: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceToHclTerraform(struct!.directNotebookSource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceList",
    },
    encryption_spec: {
      value: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecToHclTerraform(struct!.encryptionSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecList",
    },
    gcs_notebook_source: {
      value: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceToHclTerraform(struct!.gcsNotebookSource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceList",
    },
    workbench_runtime: {
      value: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeToHclTerraform(struct!.workbenchRuntime),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._executionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionTimeout = this._executionTimeout;
    }
    if (this._executionUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionUser = this._executionUser;
    }
    if (this._gcsOutputUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsOutputUri = this._gcsOutputUri;
    }
    if (this._kernelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelName = this._kernelName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._notebookRuntimeTemplateResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookRuntimeTemplateResourceName = this._notebookRuntimeTemplateResourceName;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._customEnvironmentSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEnvironmentSpec = this._customEnvironmentSpec?.internalValue;
    }
    if (this._dataformRepositorySource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataformRepositorySource = this._dataformRepositorySource?.internalValue;
    }
    if (this._directNotebookSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directNotebookSource = this._directNotebookSource?.internalValue;
    }
    if (this._encryptionSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionSpec = this._encryptionSpec?.internalValue;
    }
    if (this._gcsNotebookSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsNotebookSource = this._gcsNotebookSource?.internalValue;
    }
    if (this._workbenchRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workbenchRuntime = this._workbenchRuntime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._executionTimeout = undefined;
      this._executionUser = undefined;
      this._gcsOutputUri = undefined;
      this._kernelName = undefined;
      this._labels = undefined;
      this._notebookRuntimeTemplateResourceName = undefined;
      this._parameters = undefined;
      this._serviceAccount = undefined;
      this._customEnvironmentSpec.internalValue = undefined;
      this._dataformRepositorySource.internalValue = undefined;
      this._directNotebookSource.internalValue = undefined;
      this._encryptionSpec.internalValue = undefined;
      this._gcsNotebookSource.internalValue = undefined;
      this._workbenchRuntime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._executionTimeout = value.executionTimeout;
      this._executionUser = value.executionUser;
      this._gcsOutputUri = value.gcsOutputUri;
      this._kernelName = value.kernelName;
      this._labels = value.labels;
      this._notebookRuntimeTemplateResourceName = value.notebookRuntimeTemplateResourceName;
      this._parameters = value.parameters;
      this._serviceAccount = value.serviceAccount;
      this._customEnvironmentSpec.internalValue = value.customEnvironmentSpec;
      this._dataformRepositorySource.internalValue = value.dataformRepositorySource;
      this._directNotebookSource.internalValue = value.directNotebookSource;
      this._encryptionSpec.internalValue = value.encryptionSpec;
      this._gcsNotebookSource.internalValue = value.gcsNotebookSource;
      this._workbenchRuntime.internalValue = value.workbenchRuntime;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // execution_timeout - computed: false, optional: true, required: false
  private _executionTimeout?: string; 
  public get executionTimeout() {
    return this.getStringAttribute('execution_timeout');
  }
  public set executionTimeout(value: string) {
    this._executionTimeout = value;
  }
  public resetExecutionTimeout() {
    this._executionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutInput() {
    return this._executionTimeout;
  }

  // execution_user - computed: false, optional: true, required: false
  private _executionUser?: string; 
  public get executionUser() {
    return this.getStringAttribute('execution_user');
  }
  public set executionUser(value: string) {
    this._executionUser = value;
  }
  public resetExecutionUser() {
    this._executionUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionUserInput() {
    return this._executionUser;
  }

  // gcs_output_uri - computed: false, optional: true, required: false
  private _gcsOutputUri?: string; 
  public get gcsOutputUri() {
    return this.getStringAttribute('gcs_output_uri');
  }
  public set gcsOutputUri(value: string) {
    this._gcsOutputUri = value;
  }
  public resetGcsOutputUri() {
    this._gcsOutputUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsOutputUriInput() {
    return this._gcsOutputUri;
  }

  // job_state - computed: true, optional: false, required: false
  public get jobState() {
    return this.getStringAttribute('job_state');
  }

  // kernel_name - computed: false, optional: true, required: false
  private _kernelName?: string; 
  public get kernelName() {
    return this.getStringAttribute('kernel_name');
  }
  public set kernelName(value: string) {
    this._kernelName = value;
  }
  public resetKernelName() {
    this._kernelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelNameInput() {
    return this._kernelName;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notebook_runtime_template_resource_name - computed: false, optional: true, required: false
  private _notebookRuntimeTemplateResourceName?: string; 
  public get notebookRuntimeTemplateResourceName() {
    return this.getStringAttribute('notebook_runtime_template_resource_name');
  }
  public set notebookRuntimeTemplateResourceName(value: string) {
    this._notebookRuntimeTemplateResourceName = value;
  }
  public resetNotebookRuntimeTemplateResourceName() {
    this._notebookRuntimeTemplateResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookRuntimeTemplateResourceNameInput() {
    return this._notebookRuntimeTemplateResourceName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // schedule_resource_name - computed: true, optional: false, required: false
  public get scheduleResourceName() {
    return this.getStringAttribute('schedule_resource_name');
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // custom_environment_spec - computed: false, optional: true, required: false
  private _customEnvironmentSpec = new GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference(this, "custom_environment_spec");
  public get customEnvironmentSpec() {
    return this._customEnvironmentSpec;
  }
  public putCustomEnvironmentSpec(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec) {
    this._customEnvironmentSpec.internalValue = value;
  }
  public resetCustomEnvironmentSpec() {
    this._customEnvironmentSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEnvironmentSpecInput() {
    return this._customEnvironmentSpec.internalValue;
  }

  // dataform_repository_source - computed: false, optional: true, required: false
  private _dataformRepositorySource = new GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference(this, "dataform_repository_source");
  public get dataformRepositorySource() {
    return this._dataformRepositorySource;
  }
  public putDataformRepositorySource(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource) {
    this._dataformRepositorySource.internalValue = value;
  }
  public resetDataformRepositorySource() {
    this._dataformRepositorySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataformRepositorySourceInput() {
    return this._dataformRepositorySource.internalValue;
  }

  // direct_notebook_source - computed: false, optional: true, required: false
  private _directNotebookSource = new GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSourceOutputReference(this, "direct_notebook_source");
  public get directNotebookSource() {
    return this._directNotebookSource;
  }
  public putDirectNotebookSource(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDirectNotebookSource) {
    this._directNotebookSource.internalValue = value;
  }
  public resetDirectNotebookSource() {
    this._directNotebookSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directNotebookSourceInput() {
    return this._directNotebookSource.internalValue;
  }

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // gcs_notebook_source - computed: false, optional: true, required: false
  private _gcsNotebookSource = new GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference(this, "gcs_notebook_source");
  public get gcsNotebookSource() {
    return this._gcsNotebookSource;
  }
  public putGcsNotebookSource(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource) {
    this._gcsNotebookSource.internalValue = value;
  }
  public resetGcsNotebookSource() {
    this._gcsNotebookSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsNotebookSourceInput() {
    return this._gcsNotebookSource.internalValue;
  }

  // workbench_runtime - computed: false, optional: true, required: false
  private _workbenchRuntime = new GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference(this, "workbench_runtime");
  public get workbenchRuntime() {
    return this._workbenchRuntime;
  }
  public putWorkbenchRuntime(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime) {
    this._workbenchRuntime.internalValue = value;
  }
  public resetWorkbenchRuntime() {
    this._workbenchRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workbenchRuntimeInput() {
    return this._workbenchRuntime.internalValue;
  }
}
export interface GoogleVertexAiScheduleCreateNotebookExecutionJobRequest {
  /**
  * User specified ID for the NotebookExecutionJob.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#notebook_execution_job_id GoogleVertexAiSchedule#notebook_execution_job_id}
  */
  readonly notebookExecutionJobId?: string;
  /**
  * The resource name of the Location to create the NotebookExecutionJob. Format: 'projects/{project}/locations/{location}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#parent GoogleVertexAiSchedule#parent}
  */
  readonly parent: string;
  /**
  * notebook_execution_job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#notebook_execution_job GoogleVertexAiSchedule#notebook_execution_job}
  */
  readonly notebookExecutionJob: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob;
}

export function googleVertexAiScheduleCreateNotebookExecutionJobRequestToTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notebook_execution_job_id: cdktf.stringToTerraform(struct!.notebookExecutionJobId),
    parent: cdktf.stringToTerraform(struct!.parent),
    notebook_execution_job: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobToTerraform(struct!.notebookExecutionJob),
  }
}


export function googleVertexAiScheduleCreateNotebookExecutionJobRequestToHclTerraform(struct?: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestOutputReference | GoogleVertexAiScheduleCreateNotebookExecutionJobRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notebook_execution_job_id: {
      value: cdktf.stringToHclTerraform(struct!.notebookExecutionJobId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notebook_execution_job: {
      value: googleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobToHclTerraform(struct!.notebookExecutionJob),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiScheduleCreateNotebookExecutionJobRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiScheduleCreateNotebookExecutionJobRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notebookExecutionJobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookExecutionJobId = this._notebookExecutionJobId;
    }
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._notebookExecutionJob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookExecutionJob = this._notebookExecutionJob?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notebookExecutionJobId = undefined;
      this._parent = undefined;
      this._notebookExecutionJob.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notebookExecutionJobId = value.notebookExecutionJobId;
      this._parent = value.parent;
      this._notebookExecutionJob.internalValue = value.notebookExecutionJob;
    }
  }

  // notebook_execution_job_id - computed: false, optional: true, required: false
  private _notebookExecutionJobId?: string; 
  public get notebookExecutionJobId() {
    return this.getStringAttribute('notebook_execution_job_id');
  }
  public set notebookExecutionJobId(value: string) {
    this._notebookExecutionJobId = value;
  }
  public resetNotebookExecutionJobId() {
    this._notebookExecutionJobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookExecutionJobIdInput() {
    return this._notebookExecutionJobId;
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

  // notebook_execution_job - computed: false, optional: false, required: true
  private _notebookExecutionJob = new GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference(this, "notebook_execution_job");
  public get notebookExecutionJob() {
    return this._notebookExecutionJob;
  }
  public putNotebookExecutionJob(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob) {
    this._notebookExecutionJob.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookExecutionJobInput() {
    return this._notebookExecutionJob.internalValue;
  }
}
export interface GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata {
}

export function googleVertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataToTerraform(struct?: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataToHclTerraform(struct?: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList extends cdktf.ComplexList {

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
  public get(index: number): GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference {
    return new GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec {
  /**
  * Resource name of the Cloud KMS key used to protect the resource. The Cloud KMS key must be in the same region as the resource. It must have the format 'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#kms_key_name GoogleVertexAiSchedule#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function googleVertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecToTerraform(struct?: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference | GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function googleVertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecToHclTerraform(struct?: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference | GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec): any {
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

export class GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec | undefined) {
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
export interface GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs {
  /**
  * The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#domain GoogleVertexAiSchedule#domain}
  */
  readonly domain: string;
  /**
  * The VPC network name in the target_project where the DNS zone specified by 'domain' is visible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#target_network GoogleVertexAiSchedule#target_network}
  */
  readonly targetNetwork: string;
  /**
  * The project ID hosting the Cloud DNS managed zone that contains the 'domain'. The Vertex AI Service Agent requires the dns.peer role on this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#target_project GoogleVertexAiSchedule#target_project}
  */
  readonly targetProject: string;
}

export function googleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsToTerraform(struct?: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs | cdktf.IResolvable): any {
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


export function googleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsToHclTerraform(struct?: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs | cdktf.IResolvable): any {
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

export class GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs | cdktf.IResolvable | undefined) {
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

export class GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference {
    return new GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig {
  /**
  * The name of the Compute Engine [network attachment](https://cloud.google.com/vpc/docs/about-network-attachments) to attach to the resource within the region and user project. To specify this field, you must have already [created a network attachment] (https://cloud.google.com/vpc/docs/create-manage-network-attachments#create-network-attachments). This field is only used for resources using PSC-I.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#network_attachment GoogleVertexAiSchedule#network_attachment}
  */
  readonly networkAttachment?: string;
  /**
  * dns_peering_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#dns_peering_configs GoogleVertexAiSchedule#dns_peering_configs}
  */
  readonly dnsPeeringConfigs?: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs[] | cdktf.IResolvable;
}

export function googleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigToTerraform(struct?: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference | GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_attachment: cdktf.stringToTerraform(struct!.networkAttachment),
    dns_peering_configs: cdktf.listMapper(googleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsToTerraform, true)(struct!.dnsPeeringConfigs),
  }
}


export function googleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigToHclTerraform(struct?: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference | GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig): any {
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
      value: cdktf.listMapperHcl(googleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsToHclTerraform, true)(struct!.dnsPeeringConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig | undefined {
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

  public set internalValue(value: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig | undefined) {
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
  private _dnsPeeringConfigs = new GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList(this, "dns_peering_configs", false);
  public get dnsPeeringConfigs() {
    return this._dnsPeeringConfigs;
  }
  public putDnsPeeringConfigs(value: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs[] | cdktf.IResolvable) {
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
export interface GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig {
  /**
  * Possible values: PIPELINE_FAILURE_POLICY_FAIL_SLOW PIPELINE_FAILURE_POLICY_FAIL_FAST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#failure_policy GoogleVertexAiSchedule#failure_policy}
  */
  readonly failurePolicy?: string;
  /**
  * A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline. It is used by the system to generate the paths of output artifacts. The artifact paths are generated with a sub-path pattern '{job_id}/{task_id}/{output_key}' under the specified output directory. The service account specified in this pipeline must have the 'storage.objects.get' and 'storage.objects.create' permissions for this bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#gcs_output_directory GoogleVertexAiSchedule#gcs_output_directory}
  */
  readonly gcsOutputDirectory: string;
  /**
  * The runtime artifacts of the PipelineJob. The key will be the input artifact name and the value would be one of the InputArtifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#input_artifacts GoogleVertexAiSchedule#input_artifacts}
  */
  readonly inputArtifacts?: { [key: string]: string };
  /**
  * The runtime parameters of the PipelineJob. The parameters will be passed into PipelineJob.pipeline_spec to replace the placeholders at runtime. This field is used by pipelines built using 'PipelineJob.pipeline_spec.schema_version' 2.1.0, such as pipelines built using Kubeflow Pipelines SDK 1.9 or higher and the v2 DSL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#parameter_values GoogleVertexAiSchedule#parameter_values}
  */
  readonly parameterValues?: { [key: string]: string };
}

export function googleVertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigToTerraform(struct?: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference | GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_policy: cdktf.stringToTerraform(struct!.failurePolicy),
    gcs_output_directory: cdktf.stringToTerraform(struct!.gcsOutputDirectory),
    input_artifacts: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.inputArtifacts),
    parameter_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameterValues),
  }
}


export function googleVertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigToHclTerraform(struct?: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference | GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_policy: {
      value: cdktf.stringToHclTerraform(struct!.failurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_output_directory: {
      value: cdktf.stringToHclTerraform(struct!.gcsOutputDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_artifacts: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.inputArtifacts),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    parameter_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameterValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.failurePolicy = this._failurePolicy;
    }
    if (this._gcsOutputDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsOutputDirectory = this._gcsOutputDirectory;
    }
    if (this._inputArtifacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputArtifacts = this._inputArtifacts;
    }
    if (this._parameterValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValues = this._parameterValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failurePolicy = undefined;
      this._gcsOutputDirectory = undefined;
      this._inputArtifacts = undefined;
      this._parameterValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failurePolicy = value.failurePolicy;
      this._gcsOutputDirectory = value.gcsOutputDirectory;
      this._inputArtifacts = value.inputArtifacts;
      this._parameterValues = value.parameterValues;
    }
  }

  // failure_policy - computed: false, optional: true, required: false
  private _failurePolicy?: string; 
  public get failurePolicy() {
    return this.getStringAttribute('failure_policy');
  }
  public set failurePolicy(value: string) {
    this._failurePolicy = value;
  }
  public resetFailurePolicy() {
    this._failurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePolicyInput() {
    return this._failurePolicy;
  }

  // gcs_output_directory - computed: false, optional: false, required: true
  private _gcsOutputDirectory?: string; 
  public get gcsOutputDirectory() {
    return this.getStringAttribute('gcs_output_directory');
  }
  public set gcsOutputDirectory(value: string) {
    this._gcsOutputDirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsOutputDirectoryInput() {
    return this._gcsOutputDirectory;
  }

  // input_artifacts - computed: true, optional: true, required: false
  private _inputArtifacts?: { [key: string]: string }; 
  public get inputArtifacts() {
    return this.getStringMapAttribute('input_artifacts');
  }
  public set inputArtifacts(value: { [key: string]: string }) {
    this._inputArtifacts = value;
  }
  public resetInputArtifacts() {
    this._inputArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputArtifactsInput() {
    return this._inputArtifacts;
  }

  // parameter_values - computed: true, optional: true, required: false
  private _parameterValues?: { [key: string]: string }; 
  public get parameterValues() {
    return this.getStringMapAttribute('parameter_values');
  }
  public set parameterValues(value: { [key: string]: string }) {
    this._parameterValues = value;
  }
  public resetParameterValues() {
    this._parameterValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValuesInput() {
    return this._parameterValues;
  }
}
export interface GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJob {
  /**
  * The display name of the Pipeline. The name can be up to 128 characters long and can consist of any UTF-8 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#display_name GoogleVertexAiSchedule#display_name}
  */
  readonly displayName?: string;
  /**
  * The labels with user-defined metadata to organize PipelineJob. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. Note there is some reserved label key for Vertex AI Pipelines. - 'vertex-ai-pipelines-run-billing-id', user set value will get overrided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#labels GoogleVertexAiSchedule#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to which the Pipeline Job's workload should be peered. For example, 'projects/12345/global/networks/myVPC'. [Format](/compute/docs/reference/rest/v1/networks/insert) is of the form 'projects/{project}/global/networks/{network}'. Where {project} is a project number, as in '12345', and {network} is a network name. Private services access must already be configured for the network. Pipeline job will apply the network configuration to the Google Cloud resources being launched, if applied, such as Vertex AI Training or Dataflow job. If left unspecified, the workload is not peered with any network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#network GoogleVertexAiSchedule#network}
  */
  readonly network?: string;
  /**
  * A compiled definition of a pipeline, represented as a 'JSON' object. Defines the structure of the pipeline, including its components, tasks, and parameters. This specification is generated by compiling a pipeline function defined in 'Python' using the 'Kubeflow Pipelines SDK'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#pipeline_spec GoogleVertexAiSchedule#pipeline_spec}
  */
  readonly pipelineSpec?: string;
  /**
  * Whether to do component level validations before job creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#preflight_validations GoogleVertexAiSchedule#preflight_validations}
  */
  readonly preflightValidations?: boolean | cdktf.IResolvable;
  /**
  * A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload. If set, we will deploy the Pipeline Job's workload within the provided ip ranges. Otherwise, the job will be deployed to any ip ranges under the provided VPC network. Example: ['vertex-ai-ip-range'].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#reserved_ip_ranges GoogleVertexAiSchedule#reserved_ip_ranges}
  */
  readonly reservedIpRanges?: string[];
  /**
  * The service account that the pipeline workload runs as. If not specified, the Compute Engine default service account in the project will be used. See https://cloud.google.com/compute/docs/access/service-accounts#default_service_account Users starting the pipeline must have the 'iam.serviceAccounts.actAs' permission on this service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#service_account GoogleVertexAiSchedule#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported. Reference to https://cloud.google.com/vertex-ai/docs/pipelines/create-pipeline-template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#template_uri GoogleVertexAiSchedule#template_uri}
  */
  readonly templateUri?: string;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#encryption_spec GoogleVertexAiSchedule#encryption_spec}
  */
  readonly encryptionSpec?: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec;
  /**
  * psc_interface_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#psc_interface_config GoogleVertexAiSchedule#psc_interface_config}
  */
  readonly pscInterfaceConfig?: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig;
  /**
  * runtime_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#runtime_config GoogleVertexAiSchedule#runtime_config}
  */
  readonly runtimeConfig?: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig;
}

export function googleVertexAiScheduleCreatePipelineJobRequestPipelineJobToTerraform(struct?: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference | GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    network: cdktf.stringToTerraform(struct!.network),
    pipeline_spec: cdktf.stringToTerraform(struct!.pipelineSpec),
    preflight_validations: cdktf.booleanToTerraform(struct!.preflightValidations),
    reserved_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reservedIpRanges),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    template_uri: cdktf.stringToTerraform(struct!.templateUri),
    encryption_spec: googleVertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecToTerraform(struct!.encryptionSpec),
    psc_interface_config: googleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigToTerraform(struct!.pscInterfaceConfig),
    runtime_config: googleVertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigToTerraform(struct!.runtimeConfig),
  }
}


export function googleVertexAiScheduleCreatePipelineJobRequestPipelineJobToHclTerraform(struct?: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference | GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_spec: {
      value: cdktf.stringToHclTerraform(struct!.pipelineSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preflight_validations: {
      value: cdktf.booleanToHclTerraform(struct!.preflightValidations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reserved_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reservedIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_uri: {
      value: cdktf.stringToHclTerraform(struct!.templateUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_spec: {
      value: googleVertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecToHclTerraform(struct!.encryptionSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecList",
    },
    psc_interface_config: {
      value: googleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigToHclTerraform(struct!.pscInterfaceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigList",
    },
    runtime_config: {
      value: googleVertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigToHclTerraform(struct!.runtimeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._pipelineSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineSpec = this._pipelineSpec;
    }
    if (this._preflightValidations !== undefined) {
      hasAnyValues = true;
      internalValueResult.preflightValidations = this._preflightValidations;
    }
    if (this._reservedIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedIpRanges = this._reservedIpRanges;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._templateUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateUri = this._templateUri;
    }
    if (this._encryptionSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionSpec = this._encryptionSpec?.internalValue;
    }
    if (this._pscInterfaceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscInterfaceConfig = this._pscInterfaceConfig?.internalValue;
    }
    if (this._runtimeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeConfig = this._runtimeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._labels = undefined;
      this._network = undefined;
      this._pipelineSpec = undefined;
      this._preflightValidations = undefined;
      this._reservedIpRanges = undefined;
      this._serviceAccount = undefined;
      this._templateUri = undefined;
      this._encryptionSpec.internalValue = undefined;
      this._pscInterfaceConfig.internalValue = undefined;
      this._runtimeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._labels = value.labels;
      this._network = value.network;
      this._pipelineSpec = value.pipelineSpec;
      this._preflightValidations = value.preflightValidations;
      this._reservedIpRanges = value.reservedIpRanges;
      this._serviceAccount = value.serviceAccount;
      this._templateUri = value.templateUri;
      this._encryptionSpec.internalValue = value.encryptionSpec;
      this._pscInterfaceConfig.internalValue = value.pscInterfaceConfig;
      this._runtimeConfig.internalValue = value.runtimeConfig;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // pipeline_spec - computed: false, optional: true, required: false
  private _pipelineSpec?: string; 
  public get pipelineSpec() {
    return this.getStringAttribute('pipeline_spec');
  }
  public set pipelineSpec(value: string) {
    this._pipelineSpec = value;
  }
  public resetPipelineSpec() {
    this._pipelineSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineSpecInput() {
    return this._pipelineSpec;
  }

  // preflight_validations - computed: false, optional: true, required: false
  private _preflightValidations?: boolean | cdktf.IResolvable; 
  public get preflightValidations() {
    return this.getBooleanAttribute('preflight_validations');
  }
  public set preflightValidations(value: boolean | cdktf.IResolvable) {
    this._preflightValidations = value;
  }
  public resetPreflightValidations() {
    this._preflightValidations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preflightValidationsInput() {
    return this._preflightValidations;
  }

  // reserved_ip_ranges - computed: true, optional: true, required: false
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

  // schedule_name - computed: true, optional: false, required: false
  public get scheduleName() {
    return this.getStringAttribute('schedule_name');
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // template_metadata - computed: true, optional: false, required: false
  private _templateMetadata = new GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList(this, "template_metadata", false);
  public get templateMetadata() {
    return this._templateMetadata;
  }

  // template_uri - computed: false, optional: true, required: false
  private _templateUri?: string; 
  public get templateUri() {
    return this.getStringAttribute('template_uri');
  }
  public set templateUri(value: string) {
    this._templateUri = value;
  }
  public resetTemplateUri() {
    this._templateUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUriInput() {
    return this._templateUri;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec) {
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
  private _pscInterfaceConfig = new GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference(this, "psc_interface_config");
  public get pscInterfaceConfig() {
    return this._pscInterfaceConfig;
  }
  public putPscInterfaceConfig(value: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig) {
    this._pscInterfaceConfig.internalValue = value;
  }
  public resetPscInterfaceConfig() {
    this._pscInterfaceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscInterfaceConfigInput() {
    return this._pscInterfaceConfig.internalValue;
  }

  // runtime_config - computed: false, optional: true, required: false
  private _runtimeConfig = new GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference(this, "runtime_config");
  public get runtimeConfig() {
    return this._runtimeConfig;
  }
  public putRuntimeConfig(value: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig) {
    this._runtimeConfig.internalValue = value;
  }
  public resetRuntimeConfig() {
    this._runtimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigInput() {
    return this._runtimeConfig.internalValue;
  }
}
export interface GoogleVertexAiScheduleCreatePipelineJobRequest {
  /**
  * The resource name of the Location to create the PipelineJob in. Format: 'projects/{project}/locations/{location}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#parent GoogleVertexAiSchedule#parent}
  */
  readonly parent: string;
  /**
  * The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. If not provided, an ID will be automatically generated. This value should be less than 128 characters, and valid characters are '/a-z-/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#pipeline_job_id GoogleVertexAiSchedule#pipeline_job_id}
  */
  readonly pipelineJobId?: string;
  /**
  * pipeline_job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#pipeline_job GoogleVertexAiSchedule#pipeline_job}
  */
  readonly pipelineJob: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJob;
}

export function googleVertexAiScheduleCreatePipelineJobRequestToTerraform(struct?: GoogleVertexAiScheduleCreatePipelineJobRequestOutputReference | GoogleVertexAiScheduleCreatePipelineJobRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    pipeline_job_id: cdktf.stringToTerraform(struct!.pipelineJobId),
    pipeline_job: googleVertexAiScheduleCreatePipelineJobRequestPipelineJobToTerraform(struct!.pipelineJob),
  }
}


export function googleVertexAiScheduleCreatePipelineJobRequestToHclTerraform(struct?: GoogleVertexAiScheduleCreatePipelineJobRequestOutputReference | GoogleVertexAiScheduleCreatePipelineJobRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_job_id: {
      value: cdktf.stringToHclTerraform(struct!.pipelineJobId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_job: {
      value: googleVertexAiScheduleCreatePipelineJobRequestPipelineJobToHclTerraform(struct!.pipelineJob),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiScheduleCreatePipelineJobRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiScheduleCreatePipelineJobRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._pipelineJobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineJobId = this._pipelineJobId;
    }
    if (this._pipelineJob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineJob = this._pipelineJob?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiScheduleCreatePipelineJobRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._pipelineJobId = undefined;
      this._pipelineJob.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._pipelineJobId = value.pipelineJobId;
      this._pipelineJob.internalValue = value.pipelineJob;
    }
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

  // pipeline_job_id - computed: false, optional: true, required: false
  private _pipelineJobId?: string; 
  public get pipelineJobId() {
    return this.getStringAttribute('pipeline_job_id');
  }
  public set pipelineJobId(value: string) {
    this._pipelineJobId = value;
  }
  public resetPipelineJobId() {
    this._pipelineJobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineJobIdInput() {
    return this._pipelineJobId;
  }

  // pipeline_job - computed: false, optional: false, required: true
  private _pipelineJob = new GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJobOutputReference(this, "pipeline_job");
  public get pipelineJob() {
    return this._pipelineJob;
  }
  public putPipelineJob(value: GoogleVertexAiScheduleCreatePipelineJobRequestPipelineJob) {
    this._pipelineJob.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineJobInput() {
    return this._pipelineJob.internalValue;
  }
}
export interface GoogleVertexAiScheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#create GoogleVertexAiSchedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#delete GoogleVertexAiSchedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#update GoogleVertexAiSchedule#update}
  */
  readonly update?: string;
}

export function googleVertexAiScheduleTimeoutsToTerraform(struct?: GoogleVertexAiScheduleTimeouts | cdktf.IResolvable): any {
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


export function googleVertexAiScheduleTimeoutsToHclTerraform(struct?: GoogleVertexAiScheduleTimeouts | cdktf.IResolvable): any {
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

export class GoogleVertexAiScheduleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleVertexAiScheduleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleVertexAiScheduleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule google_vertex_ai_schedule}
*/
export class GoogleVertexAiSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleVertexAiSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleVertexAiSchedule to import
  * @param importFromId The id of the existing GoogleVertexAiSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleVertexAiSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_schedule google_vertex_ai_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVertexAiScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleVertexAiScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_schedule',
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
    this._allowQueueing = config.allowQueueing;
    this._cron = config.cron;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._endTime = config.endTime;
    this._id = config.id;
    this._location = config.location;
    this._maxConcurrentActiveRunCount = config.maxConcurrentActiveRunCount;
    this._maxConcurrentRunCount = config.maxConcurrentRunCount;
    this._maxRunCount = config.maxRunCount;
    this._project = config.project;
    this._startTime = config.startTime;
    this._createNotebookExecutionJobRequest.internalValue = config.createNotebookExecutionJobRequest;
    this._createPipelineJobRequest.internalValue = config.createPipelineJobRequest;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_queueing - computed: false, optional: true, required: false
  private _allowQueueing?: boolean | cdktf.IResolvable; 
  public get allowQueueing() {
    return this.getBooleanAttribute('allow_queueing');
  }
  public set allowQueueing(value: boolean | cdktf.IResolvable) {
    this._allowQueueing = value;
  }
  public resetAllowQueueing() {
    this._allowQueueing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowQueueingInput() {
    return this._allowQueueing;
  }

  // catch_up - computed: true, optional: false, required: false
  public get catchUp() {
    return this.getBooleanAttribute('catch_up');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // cron - computed: false, optional: true, required: false
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  public resetCron() {
    this._cron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
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

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // last_pause_time - computed: true, optional: false, required: false
  public get lastPauseTime() {
    return this.getStringAttribute('last_pause_time');
  }

  // last_resume_time - computed: true, optional: false, required: false
  public get lastResumeTime() {
    return this.getStringAttribute('last_resume_time');
  }

  // last_scheduled_run_response - computed: true, optional: false, required: false
  private _lastScheduledRunResponse = new GoogleVertexAiScheduleLastScheduledRunResponseList(this, "last_scheduled_run_response", false);
  public get lastScheduledRunResponse() {
    return this._lastScheduledRunResponse;
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

  // max_concurrent_active_run_count - computed: false, optional: true, required: false
  private _maxConcurrentActiveRunCount?: string; 
  public get maxConcurrentActiveRunCount() {
    return this.getStringAttribute('max_concurrent_active_run_count');
  }
  public set maxConcurrentActiveRunCount(value: string) {
    this._maxConcurrentActiveRunCount = value;
  }
  public resetMaxConcurrentActiveRunCount() {
    this._maxConcurrentActiveRunCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentActiveRunCountInput() {
    return this._maxConcurrentActiveRunCount;
  }

  // max_concurrent_run_count - computed: false, optional: false, required: true
  private _maxConcurrentRunCount?: string; 
  public get maxConcurrentRunCount() {
    return this.getStringAttribute('max_concurrent_run_count');
  }
  public set maxConcurrentRunCount(value: string) {
    this._maxConcurrentRunCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRunCountInput() {
    return this._maxConcurrentRunCount;
  }

  // max_run_count - computed: false, optional: true, required: false
  private _maxRunCount?: string; 
  public get maxRunCount() {
    return this.getStringAttribute('max_run_count');
  }
  public set maxRunCount(value: string) {
    this._maxRunCount = value;
  }
  public resetMaxRunCount() {
    this._maxRunCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRunCountInput() {
    return this._maxRunCount;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next_run_time - computed: true, optional: false, required: false
  public get nextRunTime() {
    return this.getStringAttribute('next_run_time');
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

  // start_time - computed: true, optional: true, required: false
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

  // started_run_count - computed: true, optional: false, required: false
  public get startedRunCount() {
    return this.getStringAttribute('started_run_count');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // create_notebook_execution_job_request - computed: false, optional: true, required: false
  private _createNotebookExecutionJobRequest = new GoogleVertexAiScheduleCreateNotebookExecutionJobRequestOutputReference(this, "create_notebook_execution_job_request");
  public get createNotebookExecutionJobRequest() {
    return this._createNotebookExecutionJobRequest;
  }
  public putCreateNotebookExecutionJobRequest(value: GoogleVertexAiScheduleCreateNotebookExecutionJobRequest) {
    this._createNotebookExecutionJobRequest.internalValue = value;
  }
  public resetCreateNotebookExecutionJobRequest() {
    this._createNotebookExecutionJobRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createNotebookExecutionJobRequestInput() {
    return this._createNotebookExecutionJobRequest.internalValue;
  }

  // create_pipeline_job_request - computed: false, optional: true, required: false
  private _createPipelineJobRequest = new GoogleVertexAiScheduleCreatePipelineJobRequestOutputReference(this, "create_pipeline_job_request");
  public get createPipelineJobRequest() {
    return this._createPipelineJobRequest;
  }
  public putCreatePipelineJobRequest(value: GoogleVertexAiScheduleCreatePipelineJobRequest) {
    this._createPipelineJobRequest.internalValue = value;
  }
  public resetCreatePipelineJobRequest() {
    this._createPipelineJobRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPipelineJobRequestInput() {
    return this._createPipelineJobRequest.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVertexAiScheduleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVertexAiScheduleTimeouts) {
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
      allow_queueing: cdktf.booleanToTerraform(this._allowQueueing),
      cron: cdktf.stringToTerraform(this._cron),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      display_name: cdktf.stringToTerraform(this._displayName),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      max_concurrent_active_run_count: cdktf.stringToTerraform(this._maxConcurrentActiveRunCount),
      max_concurrent_run_count: cdktf.stringToTerraform(this._maxConcurrentRunCount),
      max_run_count: cdktf.stringToTerraform(this._maxRunCount),
      project: cdktf.stringToTerraform(this._project),
      start_time: cdktf.stringToTerraform(this._startTime),
      create_notebook_execution_job_request: googleVertexAiScheduleCreateNotebookExecutionJobRequestToTerraform(this._createNotebookExecutionJobRequest.internalValue),
      create_pipeline_job_request: googleVertexAiScheduleCreatePipelineJobRequestToTerraform(this._createPipelineJobRequest.internalValue),
      timeouts: googleVertexAiScheduleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_queueing: {
        value: cdktf.booleanToHclTerraform(this._allowQueueing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cron: {
        value: cdktf.stringToHclTerraform(this._cron),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
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
      max_concurrent_active_run_count: {
        value: cdktf.stringToHclTerraform(this._maxConcurrentActiveRunCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_concurrent_run_count: {
        value: cdktf.stringToHclTerraform(this._maxConcurrentRunCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_run_count: {
        value: cdktf.stringToHclTerraform(this._maxRunCount),
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
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_notebook_execution_job_request: {
        value: googleVertexAiScheduleCreateNotebookExecutionJobRequestToHclTerraform(this._createNotebookExecutionJobRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiScheduleCreateNotebookExecutionJobRequestList",
      },
      create_pipeline_job_request: {
        value: googleVertexAiScheduleCreatePipelineJobRequestToHclTerraform(this._createPipelineJobRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiScheduleCreatePipelineJobRequestList",
      },
      timeouts: {
        value: googleVertexAiScheduleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleVertexAiScheduleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
