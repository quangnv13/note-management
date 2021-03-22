import React from 'react';
import PropTypes from 'prop-types';
import { Button, CssBaseline, TextField, Link, Box, Typography, Container } from '@material-ui/core';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://quangnguyen.info/">
                Quang Nguyễn
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            inValidUserName: false,
            inValidPassword: false
        }
    }

    userNameInput = (event) => {
        if (event.target.value) {
            this.setState({
                userName: event.target.value,
                inValidUserName: false
            });
        } else {
            this.setState({
                inValidUserName: true
            });
        }
    }

    passwordInput = (event) => {
        if (event.target.value) {
            this.setState({
                password: event.target.value,
                inValidPassword: false
            });
        } else {
            this.setState({
                inValidPassword: true
            });
        }
    }

    btnLoginClick = (event) => {
        event.preventDefault();
        this.props.btnLoginClick(this.state.userName, this.state.password);
    };

    loginResponse = (isLogged) => {
        if (isLogged !== undefined && !isLogged) {
            this.setState({
                inValidUserName: true,
                inValidPassword: true
            });
        }
    }

    render() {
        const { inValidUserName, inValidPassword } = this.state;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div>
                    <img className="m-auto d-flex" alt="Sign in icon" height="100px" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png"></img>
                    <Typography component="h1" variant="h5" className="text-center">
                        Log in
                    </Typography>
                    <form noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Username"
                            name="email"
                            autoFocus
                            error={inValidUserName}
                            onInput={this.userNameInput}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            error={inValidPassword}
                            onInput={this.passwordInput}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.btnLoginClick}
                        >
                            Login
                        </Button>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        );
    }
}

Login.propTypes = {
    btnLoginClick: PropTypes.func.isRequired
};

Login.defaultProps = {
};