import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    buscarTarefas();
  }, []);

  const buscarTarefas = () => {
    axios
      .get("http://localhost:8080/tasks")
      .then((res) => setTarefas(res.data))
      .catch((err) => console.error("Erro ao buscar tarefas:", err));
  };

  const criarTarefa = (e) => {
    e.preventDefault();

    const novaTarefa = {
      titulo,
      descricao,
      concluida: false,
    };

    axios
      .post("http://localhost:8080/tasks", novaTarefa)
      .then(() => {
        setTitulo("");
        setDescricao("");
        buscarTarefas();
      })
      .catch((err) => console.error("Erro ao criar tarefa:", err));
  };

  const alternarConclusao = (tarefa) => {
    const tarefaAtualizada = {
      ...tarefa,
      concluida: !tarefa.concluida,
    };

    axios
      .put(`http://localhost:8080/tasks/${tarefa.id}`, tarefaAtualizada)
      .then(() => {
        setTarefas((tarefasAnteriores) =>
          tarefasAnteriores.map((t) =>
            t.id === tarefa.id ? tarefaAtualizada : t
          )
        );
      })
      .catch((err) => console.error("Erro ao atualizar tarefa:", err));
  };

  const deletarTarefa = (id) => {
    axios
      .delete(`http://localhost:8080/tasks/${id}`)
      .then(() => {
        buscarTarefas();
      })
      .catch((err) => console.error("Erro ao deletar tarefa:", err));
  };

  return (
    <>
      <div className="stars">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container">
        <h1>Lista de Tarefas</h1>

        <form onSubmit={criarTarefa} className="form">
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
          <button type="submit">Adicionar</button>
        </form>

        {tarefas.length === 0 ? (
          <p className="sem-tarefa">Nenhuma tarefa cadastrada.</p>
        ) : (
          <ul className="lista">
            {tarefas.map((tarefa) => (
              <li key={tarefa.id}>
                <strong>{tarefa.titulo}</strong>: {tarefa.descricao} -{" "}
                {tarefa.concluida ? "✅" : "❌"}
                <button
                  onClick={() => alternarConclusao(tarefa)}
                  style={{ marginLeft: "10px" }}
                >
                  Marcar como {tarefa.concluida ? "incompleta" : "concluída"}
                </button>
                <button
                  onClick={() => deletarTarefa(tarefa.id)}
                  style={{ marginLeft: "10px" }}
                >
                  🗑 Excluir
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
