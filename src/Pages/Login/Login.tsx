import React from "react";
import * as yup from "yup";
import { useForm, useFormState } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from '@hookform/error-message';
import { Button, Grid, TextField } from "@mui/material";

import { useStyles } from "./Login.styles";

const Login = () => {
  const classes = useStyles();

  const createEventFormSchema = yup.object().shape({
    name: yup.string()
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createEventFormSchema) });

  let errorField = false

  const handleLogin = (value: any) => {
    if(value.name === "") {
      errorField = true
    } 
    console.log({ value });
    console.log({ errors });
    console.log({ errorField });
  };

  return (
    <Grid container className={classes.loginContainer}>
      <Grid item className={classes.loginInputs}>
        <form action="" onSubmit={handleSubmit(handleLogin)}>
          <TextField
            id="outlined-basic"
            label="Nome de usuário"
            variant="outlined"
            value={this}
            {...register("name")}
            error={true}
          />
          <Button type="submit">Login</Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
