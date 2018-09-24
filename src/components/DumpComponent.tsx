
import * as React from 'react';

export interface Props {
  addressInfo: string
}

const DumpComponent: React.StatelessComponent<Props> =  ({addressInfo}) => {
  return (<div>{addressInfo}</div>)
}

export default DumpComponent