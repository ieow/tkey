/* tslint:disable */
/* eslint-disable */
/**
* @param {boolean} enable_logging
* @param {string} postbox_key
* @param {string} curve_n
* @returns {number}
*/
export function service_provider(enable_logging: boolean, postbox_key: string, curve_n: string): number;
/**
* @param {number} ptr
*/
export function service_provider_free(ptr: number): void;
/**
* @param {string} repo
* @returns {Promise<any>}
*/
export function run(repo: string): Promise<any>;
/**
* @param {string} curve_n
* @returns {string}
*/
export function generate_private_key(curve_n: string): string;
/**
* @param {boolean} enable_logging
* @param {string} host_url
* @param {bigint} server_time_offset
* @returns {number}
*/
export function storage_layer(enable_logging: boolean, host_url: string, server_time_offset: bigint): number;
/**
* @param {number} ptr
*/
export function storage_layer_free(ptr: number): void;
/**
* @param {number} metadata
* @param {number} shares
* @param {number} storage_layer
* @param {number} service_provider
* @param {number} local_metadata_transitions
* @param {number} last_fetch_cloud_metadata
* @param {boolean} enable_logging
* @param {boolean} manual_sync
* @returns {number}
*/
export function threshold_key(metadata: number, shares: number, storage_layer: number, service_provider: number, local_metadata_transitions: number, last_fetch_cloud_metadata: number, enable_logging: boolean, manual_sync: boolean): number;
/**
* @param {number} ptr
*/
export function threshold_key_free(ptr: number): void;
/**
* @param {number} threshold_key
* @param {string | undefined} import_share
* @param {number} input
* @param {boolean} never_initialize_new_key
* @param {boolean} include_local_metadata_transitions
* @param {string} curve_n
* @returns {number}
*/
export function threshold_key_initialize(threshold_key: number, import_share: string | undefined, input: number, never_initialize_new_key: boolean, include_local_metadata_transitions: boolean, curve_n: string): number;
/**
* @param {number} threshold_key
* @param {string} curve_n
* @returns {any}
*/
export function threshold_key_reconstruct(threshold_key: number, curve_n: string): any;
/**
* @param {number} ptr
* @returns {number}
*/
export function test_ptr(ptr: number): number;
/**
* @returns {number}
*/
export function null_ptr(): number;
/**
* @param {string} name
* @returns {string}
*/
export function greet(name: string): string;
/**
* @param {string} x
* @param {string} y
* @returns {Point}
*/
export function new_point(x: string, y: string): Point;
/**
* @param {Point} point
* @returns {string}
*/
export function from_point(point: Point): string;
/**
* @param {string} encoding
* @returns {Point}
*/
export function point_from_decode(encoding: string): Point;
/**
* @param {Point} point
* @returns {string}
*/
export function compress_pubkey(point: Point): string;
/**
* @param {Point} point
* @returns {string}
*/
export function new_metadata(point: Point): string;
/**
* @param {Point} point
* @returns {number}
*/
export function new_mut_metadata(point: Point): number;
/**
* @param {number} metadata
*/
export function metadata_free(metadata: number): void;
/**
* @param {number} metadata
* @returns {string}
*/
export function metadata_get_pubkey(metadata: number): string;
/**
*/
export class Point {
  free(): void;
}
