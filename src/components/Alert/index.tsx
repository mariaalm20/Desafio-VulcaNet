import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";

import { ButtonSubmit } from "./styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

export default function TransitionAlerts() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function handleSubmit() {
    setOpen(true);

    console.log("Usuário contratou");
  }

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          style={{ marginTop: -400, marginRight: -80 }}
        >
          Compra efetuada com sucesso
        </Alert>
      </Collapse>

      <ButtonSubmit disabled={open} onClick={handleSubmit}>
        Contratar
      </ButtonSubmit>
    </div>
  );
}
