"use client";
import { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();
function Providers({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default Providers;
