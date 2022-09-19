import React from "react";
import { Button, FormLayout, TextField } from "@shopify/polaris";
import { useState } from "react";

export default function ConnectForm() {
  const [clientId, setClientId] = useState("818ce6a6ad151bdc3c6e5e2987f72372");
  const [clientSecret, setClientSecret] = useState(
    "a95a4056a829a9a709a243b49672615f"
  );
  console.log(window.location.host);
  console.log(window.location.hostname);
  const redirectUrl = `https://${window.location.host}/api/oauth2`;
  // const redirectUrl =
  //   "https://my-sample-app.myshopify.com/admin/apps/gangster-channel/oauth2";

  return (
    <FormLayout>
      <TextField
        label="Client ID"
        value={clientId}
        onChange={(value) => setClientId(value)}
      />
      <TextField
        label="Client Secret"
        value={clientSecret}
        onChange={(value) => setClientSecret(value)}
      />
      <Button
        primary
        onClick={() => {
          if (clientId.length === 0 || clientSecret.length === 0) {
            return;
          }

          const newWindow = window.open(
            `http://localhost:3000/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}`,
            "name",
            "height=550,width=950"
          );
          if (window.focus) newWindow.focus();
        }}
      >
        Connect gangster account
      </Button>
    </FormLayout>
  );
}
