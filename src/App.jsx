import { Component } from 'react'

class App extends Component {
  state = {
    visible: false,
    info: {
      info1: '哈哈',
      info2: '呵呵'
    }
  }

  go = () => {
    this.setState({
      visible: true,
      info: null
    })
    setTimeout(() => {
      this.setState({
        info: {
          info1: '1',
          info2: '2'
        }
      })
    })
  }

  render() {
    const { visible, info } = this.state;
    return (
      <div>
        <button onClick={this.go}>中文</button>
        中文中文
        {visible && (
          <div>
            中文啊啊
            {info?.info1}
            中文哦哦
            {info?.info2}
            中文嗯嗯
          </div>
        )}
      </div>
    )
  }
}

export default App
