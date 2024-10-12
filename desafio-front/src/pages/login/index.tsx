'use client'

import { useState } from 'react';
import { Container, TextField, Button, Box, Typography, Grid2 } from '@mui/material';
import { useRouter } from 'next/router';
import { FazerLogin } from '../../app/api/login';
import { toast, ToastContainer } from 'react-toastify';
import { Metadata } from 'next';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "Login"
};

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const usuario = {
      email,
      password
    };

    FazerLogin(usuario)
      .then(res => {
        localStorage.setItem('token', res.access_token);
        router.push('/');
      })
      .catch(error => {
        console.log(error?.message);
        toast.error("Usuário ou senha incorretos", { toastId: 'login-error' });
      });
  };

  return (
    <Container maxWidth="xs">
      <ToastContainer />
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" px={4}>
        <Typography variant='h4'>Login</Typography>
        <TextField
          label="E-mail"
          margin="normal"
          variant="outlined"
          color="info"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Senha"
          type="password"
          margin="normal"
          variant="outlined"
          color="info"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Grid2 container spacing={2}>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Entrar
          </Button>
          <Button
            variant="contained"
            color="primary"
            LinkComponent={Link}
            onClick={e => {
              e.preventDefault();
              router.push('/cadastro');
            }}
          >
            Cadastrar
          </Button>
        </Grid2>
      </Box>
    </Container>
  );
};

export default Login;
