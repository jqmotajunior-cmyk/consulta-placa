const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/placa/:placa', async (req, res) => {
  const placa = req.params.placa;

  try {
    const resposta = await axios.get(
      `https://brasilapi.com.br/api/placa/v1/${placa}`
    );

    res.json(resposta.data);
  } catch (erro) {
    res.status(404).json({
      erro: "Placa não encontrada"
    });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});