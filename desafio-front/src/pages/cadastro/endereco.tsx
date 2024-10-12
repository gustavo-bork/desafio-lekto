'use client'

import { useState } from 'react';
import { Container, TextField, Box, Typography, Grid, Button, CircularProgress, Grid2 } from '@mui/material';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';

const EnderecoForm = () => {
  const router = useRouter();
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState(0);
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!cpf || !nome || !endereco || !numero || !bairro || !estado || !cidade) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    try {
      toast.success('Usuário cadastrado com sucesso');
      router.push('/home');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      toast.error('Erro ao enviar dados. Por favor, tente novamente.');
    }
  };

  return (
    <Container maxWidth="md">
      <ToastContainer />
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Typography variant="h4" gutterBottom>Endereço</Typography>
        <Grid2 container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              label="CPF"
              name="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Nome do Usuário"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Endereço"
              name="endereco"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="number"
              label="Número"
              name="numero"
              value={numero}
              onChange={(e) => setNumero(+e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Bairro"
              name="bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Estado"
              name="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Cidade"
              name="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid2>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={false}
          startIcon={<CircularProgress size={24} />}
        >
          Cadastrar
        </Button>
      </Box>
    </Container>
  );
};

export default EnderecoForm;