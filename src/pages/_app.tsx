import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  // const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    // <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    // </SessionContextProvider>
  );
}
