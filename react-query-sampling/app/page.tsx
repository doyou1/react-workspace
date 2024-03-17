"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Wrap from "@/components/Wrap";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Wrap />
      </QueryClientProvider>
    </>
  );
}
