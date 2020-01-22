import React from'react';
import axios from 'axios';



// ****************
class LoginPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filled: false,
        loading: false,
        failed: false,
        email: "",
        password: ""
      };
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleRegister = this.handleRegister.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
    }


handleLogin(event) {
    event.preventDefault();
    const { email, password } = this.state;
    fetch("/api/session", {
      method: "POST",
      body: new URLSearchParams(`email=${email}&password=${password}`)
    }).then(response => {
      if (response.ok) {
        this.props.history.push('/'); // TODO avoid calling sessions twice
      } else {
        this.setState({
          failed: true,
          password: ""
        });
      }
    });
  }

}



// export default class DataTrac extends React.Component{
//     constructor(props){
//         super(props),
//         this.state={
//             persons:[],
//         }
//     }
//     componentDidMount(){
//         axios.get('http://shahrdari.dynu.net:8082/api/devices')
//         .then(res => {
//             const persons = res.data;
//             this.setState({ persons });
//         }
//     }

// }
// function DataTrac(){
//     axios.get('http://shahrdari.dynu.net:8082/api/devices')
//         .then(res => {
//             const persons = res.data;
//             this.setState({ persons });
//             }
//         )
// }
// export default DataTrac;

// *******************************************************

// fetch('http://shahrdari.dynu.net:8082/api/devices')
//     .then(res=>res.jason())
//     .then(data=>console.log(data))
//     .catch(e=>console.log(e))




