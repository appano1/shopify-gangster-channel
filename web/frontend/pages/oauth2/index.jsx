import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Hello() {
  const [searchParams] = useSearchParams()
  const authorizationCode = searchParams.get('code');

  return <div>{authorizationCode}</div>;
}
