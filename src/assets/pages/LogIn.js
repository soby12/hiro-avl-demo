import React from 'react';
// import ReactDOM from 'react-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";


import pick from '../img/pic.jpg';



// const useStyles = makeStyles(theme => ({
//   root: {
//     height: '100vh',
//   },
//   image: {
//     backgroundImage: pick,
//     backgroundRepeat: 'no-repeat',
//     backgroundColor:
//       theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));




export default class SignInSide extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      devices:[],
    }
}

    
    EmailChange(e) {
    this.setState({email:e.target.value})    
    }
    PasswordChange(e) {
    this.setState({password:e.target.value})
    }
    handleLogin(event) {
      event.preventDefault();
      const { email, password } = this.state;
      console.log(password);
      console.log(email);  
      
      fetch("/api/session", {
        method: "POST",
        body: new URLSearchParams(`email=${email}&password=${password}`)
      }).then(response => {
        // console.log(response.json());
        
        if (response.ok) {
          this.props.history.push('/dash'); // TODO avoid calling sessions twice
        } else {
          this.setState({
            failed: true,
            password: ""
          });
        }
      }).catch(err=>{console.log(err);
      });



      fetch('/api/devices').then(response => {
        if (response.ok) {
          response.json().then(devices => {
            console.log(devices);            
          });
        }
      });
      // let history = useHistory();  
      // history.push("/dash");
      // return (
      //   <Redirect to='http://localhost:3000/dash'/>
      //   this.props.history.push('/dash')
      // )
    };
// export default function SignInSide() {
  
  render(){
    const classes = makeStyles(theme => ({
      root: {
        height: '100vh',
      },
      image: {
        backgroundImage: pick,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '1000%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      resize:{
        fontSize:50
      },
      TextField:{
        fontSize:50
      }
    }));

    return (
  
    <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={9} className={classes.image} style={{height:'1010px',background:'red'}}>
            <img alt='photo' src={pick} style={{height:'1010px',}}/>
        </Grid>
        <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
        <div className={classes.paper}>
            <Avatar className={classes.avatar} style={{background:'transparent',width:'150px',height:'150px',margin:'auto'}}>
            {/* <LockOutlinedIcon /> */}
            <img alt='logo'  src={require('../img/logo1.png')} style={{width:'140px',height:'140px'}}/>
            </Avatar>
            <Typography component="h1" variant="h5" style={{margin:'auto',marginTop:'25px',width:'101px'}}>
                {/* <h2 style={{font:'Bold 35px/47px Segoe UI',fontSize:'25px'}}> */}
Log in
                {/* </h2> */}
            </Typography>
            <form className={classes.form} noValidate style={{width:'70%',margin: 'auto'}} /*onSubmit={Submit()}*/> 
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="نام کاربری"
                className={classes.textField}
                name="email"
                autoComplete="email"
                autoFocus
                onChange={e=>this.EmailChange(e)}
                style={{color:'blue',fontSize:'50px'}}
                />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="رمز عبور"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e=>this.PasswordChange(e)}
                />
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="مرا به یاد بسپار"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{height:'60px'}}
                onClick={e=>this.handleLogin(e)}
                >
                  {/* <a href='local'>

                  </a> */}
                    <h2 style={{font:'Bold 35px/47px Segoe UI',fontSize:'25px',marginTop:'0px'}}>
                        ورود
                    </h2>
                </Button>
                <Grid container style={{marginTop:'20px'}}>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                {/* <Copyright /> */}
                </Box>
            </form>
        </div>
        </Grid>
    </Grid>
  );
}
}










// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles(theme => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignIn() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar} style={{background:'transparent'}}>
//           {/* <LockOutlinedIcon /> */}
//           <img  src={require('../img/logo1.png')} style={{width:'45px',height:'45px'}}/>
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="نام کاربری"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="رمز عبور"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="#" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={8}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }
