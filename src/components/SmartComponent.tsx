import * as React from 'react';

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
      showName: false,
      showAddress: false,
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
      <button onClick={() => this.onShowName} >Click</button>
      {
        this.state.showName && <div>{this.state.userName}</div>
      }
      </div>
    )
  }
}

export default SmartComponent;