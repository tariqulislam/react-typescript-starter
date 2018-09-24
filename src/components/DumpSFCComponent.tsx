
import * as React from 'react';

export interface Props {
  emailInfo: string
}

const DumpSFCComponent: React.SFC<Props> =  ({emailInfo}) => {
  return (<div>{emailInfo}</div>)
}

export default DumpSFCComponent