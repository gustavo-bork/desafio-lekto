'use client'

import { useState } from 'react';
import { TextField, Button, Box, Typography, CircularProgress, Grid2, Tabs, Tab } from '@mui/material';
import { useRouter } from 'next/router';
import { CadastrarUsuario } from '../../app/api/login';
import { toast, ToastContainer } from 'react-toastify';
import { Metadata } from 'next';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import 'react-toastify/dist/ReactToastify.css';
import EnderecoForm from './endereco';

export const metadata: Metadata = {
  title: "Cadastro"
};

const Cadastro = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tab, setTab] = useState<'1' | '2'>('1');
  const [loading, setLoading] = useState(false);

  const handleCadastro = () => {
    if (!email) {
      toast.error("O email é obrigatório");
      return;
    }

    if (!password) {
      toast.error("A senha é obrigatória");
      return;
    }

    setLoading(true);
    const usuario = {
      email,
      password
    };

    CadastrarUsuario(usuario)
      .then(() => {
        toast.success("Usuário cadastrado com sucesso!", { toastId: 'cadastro-success' });
        router.push('/');
      })
      .catch(() => {
        toast.error("Erro ao cadastrar usuário", { toastId: 'cadastro-error' });
      });

    setLoading(false);
  };

  return (
    <Grid2 container>
      <ToastContainer />
      <Grid2 container display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" px={4}>
        <Typography variant='h4' gutterBottom>Cadastre-se</Typography>
        <TabContext value={tab}>
          <Tabs centered value={tab} onChange={(e, newTab) => setTab(newTab)}>
            <TabList>
              <Tab value='1' label="Dados básicos" />
              <Tab value='2' label="CPF e endereços" />
            </TabList>
            <TabPanel value='1'>
              <Box mt={2}>
                <TextField
                  label="E-mail"
                  type="email"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <TextField
                  label="Senha"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <Grid2 container spacing={2}>
                  <Button variant="contained" color="primary" onClick={() => router.back()}>Voltar</Button>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    onClick={handleCadastro}
                  >
                    {loading ? <CircularProgress size={24} /> : 'Avançar'}
                  </Button>
                </Grid2>
              </Box>
            </TabPanel>
            <TabPanel value='2'>
              <EnderecoForm />
            </TabPanel>
          </Tabs>
        </TabContext>
      </Grid2>
    </Grid2>
  );
};

export default Cadastro;