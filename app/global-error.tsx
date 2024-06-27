"use client";

import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import Error from "next/error";
import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error;
  statusCode: number;
}

export default function GlobalError( {error,statusCode} : GlobalErrorProps) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <NextError statusCode={statusCode} />
      </body>
    </html>
  );
}
