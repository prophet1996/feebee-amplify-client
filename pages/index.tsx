import React, { useEffect, useState, SetStateAction } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignOut,
} from "@aws-amplify/ui-react";

import { createTodo } from "../src/graphql/mutations";
import { listTodos } from "../src/graphql/queries";

import awsExports from "../src/aws-exports";
import { TodoData,Todo } from '../src/types/todo';
Amplify.configure(awsExports);

const initialState = { name: "", description: "" };

const App = () => {
  const [formState, setFormState]:SetStateAction<any> = useState(initialState);
  const [todos, setTodos]= useState<Todo[]|[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key:string, value:string) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos)) as TodoData;
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createTodo, { input: todo }));
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Todos</h2>
      <input
        onChange={(event) => setInput("name", event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={(event) => setInput("description", event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo}>
        Create Todo
      </button>
      {(todos as Todo[]).map((todo:Todo, index:number) => (
        <div key={todo.id ? todo.id : index} style={styles.todo}>
          <p style={styles.todoName}>{todo.name}</p>
          <p style={styles.todoDescription}>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flex: 1,
    flexDirection: "column" as "column",
    justifyContent: "center",
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: "bold" as "bold" },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

const AuthenticatedApp = () => {
  const handleAuthStateChange = () => {
    window.location.reload();
  };

  return (
    <AmplifyAuthenticator>
      <AmplifySignUp
        headerText="My Custom Sign Up Text"
        slot="sign-up"
        handleAuthStateChange={handleAuthStateChange}
        formFields={[
          { type: "phone_number", label: "Phone Number" },
          { type: "address", label: "Address" },
          { type: "username", label: "Username" },
          { type: "password", label: "Password" },
        ]}
      ></AmplifySignUp>

      <div>
        <App />
        <AmplifySignOut></AmplifySignOut>
      </div>
    </AmplifyAuthenticator>
  );
};

export default AuthenticatedApp;
