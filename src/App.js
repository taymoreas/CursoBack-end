import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [pessoas, setpessoas] = useState([]);
  const [formData, setFormData] = useState({
    cpf: '',
    sexo: '',
    nacionalidade: '',
    dataNasc: ''
  });

  useEffect(() => {
    // Carrega os veículos ao montar o componente
    fetchpessoas();
  }, []);

  const fetchpessoas = async () => {
    try {
      // Faz uma requisição GET para obter a lista de veículos
      const response = await axios.get(`http://localhost:3000/pessoas`);
      // Atualiza o estado com os veículos obtidos
      setpessoas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = e => {
    // Atualiza o estado do formulário quando o valor de um input é alterado
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreatepessoa = async e => {
    e.preventDefault();
    try {
      // Faz uma requisição POST para criar um novo veículo
      await axios.post(`http://localhost:3000/pessoas`, formData);
      // Limpa o formulário após o cadastro
      setFormData({
        cpf: '',
        sexo: '',
        nacionalidade: '',
        dataNasc: ''
      });
      // Atualiza a lista de veículos
      fetchpessoas();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdatepessoa = async cpf => {
    try {
      // Faz uma requisição PUT para atualizar as informações de um veículo
      await axios.put(`http://localhost:3000/pessoas/${cpf}`, formData);
      // Limpa o formulário após a atualização
      setFormData({
        cpf: '',
        sexo: '',
        nacionalidade: '',
        dataNasc: ''
      });
      // Atualiza a lista de veículos
      fetchpessoas();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeletepessoa = async cpf => {
    try {
      // Faz uma requisição DELETE para excluir um veículo
      await axios.delete(`http://localhost:3000/pessoas/${cpf}`);
      // Atualiza a lista de veículos
      fetchpessoas();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Veículos</h1>
      <form onSubmit={handleCreatepessoa}>
        <label>
          cpf:
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleInputChange}
          />
        </label>
        <label>
          sexo:
          <input
            type="text"
            name="sexo"
            value={formData.sexo}
            onChange={handleInputChange}
          />
        </label>
        <label>
          nacionalidade:
          <input
            type="text"
            name="nacionalidade"
            value={formData.nacionalidade}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Ano:
          <input
            type="text"
            name="dataNasc"
            value={formData.dataNasc}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
      <ul>
        {pessoas.map(pessoa => (
          <li key={pessoa.cpf}>
            {pessoa.cpf} - {pessoa.sexo} - {pessoa.nacionalidade} - {pessoa.dataNasc}
            <button onClick={() => handleUpdatepessoa(pessoa.cpf)}>Atualizar</button>
            <button onClick={() => handleDeletepessoa(pessoa.cpf)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
