import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { IdNowAutoIdentViewProps } from './IdNowAutoIdent.types';

const NativeView: React.ComponentType<IdNowAutoIdentViewProps> =
  requireNativeViewManager('IdNowAutoIdent');

export default function IdNowAutoIdentView(props: IdNowAutoIdentViewProps) {
  return <NativeView {...props} />;
}
