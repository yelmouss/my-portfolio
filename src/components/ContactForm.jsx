"use client";

import { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function ContactForm({ copy }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || copy.error);
      form.reset();
      setStatus("success");
    } catch (submitError) {
      setStatus("error");
      setError(submitError.message);
    }
  }

  return (
    <Stack component="form" onSubmit={handleSubmit} spacing={2.25}>
      <TextField name="name" label={copy.name} required fullWidth />
      <TextField name="email" type="email" label={copy.email} required fullWidth />
      <TextField name="subject" label={copy.subject} required fullWidth />
      <TextField name="message" label={copy.message} required fullWidth multiline minRows={6} />
      {status === "success" && <Alert severity="success">{copy.success}</Alert>}
      {status === "error" && <Alert severity="error">{error}</Alert>}
      <Button type="submit" variant="contained" disabled={status === "sending"} sx={{ alignSelf: "flex-start" }}>
        {status === "sending" ? copy.sending : copy.submit}
      </Button>
      {status === "success" && (
        <Typography variant="body2" color="text.secondary">{copy.success}</Typography>
      )}
    </Stack>
  );
}
