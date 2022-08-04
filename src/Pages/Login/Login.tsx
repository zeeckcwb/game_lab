import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, TextField } from "@mui/material";

import { useStyles } from "./Login.styles";

const Login = () => {
  const classes = useStyles();
  const [errorInput, setErrorInput] = useState(false);

  const createEventFormSchema = yup.object().shape({
    name: yup.string()
  });

  const {
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(createEventFormSchema) });

  const handleLogin = (value: any) => {
    if(value.name === "") {
      setErrorInput(true);
    } else {
      setErrorInput(false);
    }
  };

  return (
    <Grid container className={classes.loginContainer}>
      <Grid item className={classes.loginInputs}>
        <form action="" onSubmit={handleSubmit(handleLogin)}>
          <TextField
            label="Nome de usuário"
            variant="outlined"
            {...register("name")}
            error={errorInput}
            helperText={errorInput && "Nome é obrigatório"}
          />
          <Button type="submit">Login</Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
