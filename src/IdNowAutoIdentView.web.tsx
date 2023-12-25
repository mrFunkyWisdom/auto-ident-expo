import * as React from 'react';

import { IdNowAutoIdentViewProps } from './IdNowAutoIdent.types';

export default function IdNowAutoIdentView(props: IdNowAutoIdentViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
