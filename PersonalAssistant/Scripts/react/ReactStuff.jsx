class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { successMessage: '', errorMessage: '' };

        window.SpeechRecognition.acceptSpeechRecognition(
            success => {
                this.setState({ successMessage: 'You can talk to Alfred by either writing him a message below or pressing the Q button on your keyboard and then speaking.' })
            },
            err => {
                this.setState({errorMessage:'By blocking access to your microphone you will only be able to message Alfred. If you would like to speak to him, you can press the "i" button at the very beginning of the address bar and choose the "Allow" option and then reload the page.'})
            }
        );
    }

    render() {
        if (this.state.errorMessage && !this.state.successMessage) {
            return <div> {this.state.errorMessage} </div>;
        }
        if (!this.state.errorMessage && this.state.successMessage) {
            return <div> {this.state.successMessage}</div>;
        }
    }
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
)