import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to IdNowAutoIdent.web.ts
// and on native platforms to IdNowAutoIdent.ts
import IdNowAutoIdentModule from './IdNowAutoIdentModule';
import IdNowAutoIdentView from './IdNowAutoIdentView';
import { ChangeEventPayload, IdNowAutoIdentViewProps } from './IdNowAutoIdent.types';

// Get the native constant value.
export const PI = IdNowAutoIdentModule.PI;

export function hello(): string {
  return IdNowAutoIdentModule.hello();
}

export async function setValueAsync(value: string) {
  return await IdNowAutoIdentModule.setValueAsync(value);
}

const emitter = new EventEmitter(IdNowAutoIdentModule ?? NativeModulesProxy.IdNowAutoIdent);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { IdNowAutoIdentView, IdNowAutoIdentViewProps, ChangeEventPayload };
