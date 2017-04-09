/**
 * Created by Tia on 4/6/2017.
 */
import React from "react";
import Header from "./Header";
import ContestPreview from "./ContestPreview";
import axios from "axios";

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
        headerMessage: "Message Component with State",
        contests: []
    };
    componentDidMount() {
        setTimeout(() => {
            axios.get("/api/contests")
             .then(resp => {
                 this.setState({contests: resp.data.contests});
             })
             .catch(console.error);
        }, 4000);
    };
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Header message={this.state.headerMessage}/>
                <div>
                    {this.state.contests.map(contest => <ContestPreview key={contest.id} {...contest}/>)}
                </div>
            </div>
        );
    }
}
export default App;