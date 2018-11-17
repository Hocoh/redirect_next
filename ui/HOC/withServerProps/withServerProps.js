export default WrappedComponent => 
  class extends React.Component {

    static async getInitialProps({ pathname}) { 
      return { pathname }
    }

    render() {
      return <WrappedComponent pathname={this.props.pathname} />
    }
  }