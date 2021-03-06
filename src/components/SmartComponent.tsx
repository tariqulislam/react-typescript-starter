import * as React from 'react';
// Import Dump Component from DumpComponent.tsx file
import DumpComponent from './DumpComponent'
// Import Dump SFC Component from DumpSFCComponent.tsx file
import DumpSFCComponent from './DumpSFCComponent'
export interface Props {
  name: string,
  address: string
}

export interface State {
  showName: boolean,
  showAddress: boolean
  userName: string
}

class SmartComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      showAddress: false,
      showName: false,
      userName: ''
    }
  }

  public onShowName = (userName: string) : void => {
    this.setState({ showName: true, userName: userName });
  }

  public render() {
    return (
      <div>
        <h1>This is Typescript Smart Component </h1>
        <button onClick={() => this.onShowName("tariqulislamronnie")} >Click</button>
        {
          this.state.showName && <div>{this.state.userName}</div>
        }
        <p> Dump Component </p>
        {/* Add the Dump Component with Properties */}
        <DumpComponent addressInfo={"this is sample address"} />
        <p> Dump SFC Component </p>
          {/* Add the Dump SFC Component with Properties */}
        <DumpSFCComponent emailInfo={"tariqul.islam.rony@gmail.com"} />
      </div>
    )
  }
}

export default SmartComponent;