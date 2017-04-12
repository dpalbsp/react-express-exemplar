/**
 * Created by Tia on 4/6/2017.
 */
import React from 'react';
import Header from './Header';
import ContestList from './ContestList';

// import axios from 'axios';

// const App = () => {
//     return(
//         <div>
//             <Header message="React App"/>
//             <div>...</div>
//         </div>
//     );
// };

class App extends React.Component {
  state = {
    headerMessage: 'Message Component with State',
    contests: this.props.initialContests
  };
  componentDidMount() {
    // setTimeout(() => {
    //   axios.get('/api/contests')
    //          .then(resp => {
    //            this.setState({contests: resp.data.contests});
    //          })
    //          .catch(console.error);
    // }, 4000);
  }
  render() {
    return (
            <div style={{textAlign: 'center'}}>
                <Header message={this.state.headerMessage}/>
                <ContestList contests={this.state.contests}/>
            </div>
    );
  }
}
export default App;