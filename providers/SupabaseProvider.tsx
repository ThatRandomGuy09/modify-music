"use client";

import { Database } from "@/types_db";
// This function is used to create a Supabase client for authentication purposes in a Next.js application.
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
//It's a context provider component that manages the Supabase authentication session.
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
    //This function likely initializes a Supabase client with the specified database type 
  );

  return (
    //This means that any child components wrapped by SupabaseProvider will have access to the Supabase client through a context provided by SessionContextProvider
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};


export default SupabaseProvider;
// Every comment is written by me Vansh !!!