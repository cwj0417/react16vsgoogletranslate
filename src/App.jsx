import { Component } from 'react'

class App extends Component {
  state = {
    visible: false
  }

  go = () => {
    this.setState({
      visible: true,
    })
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <button onClick={this.go}>中文</button>
        {visible && (
          <div>
            哈哈
          </div>
        )}
        中文中文
      </div>
    )
  }
}

export default App
