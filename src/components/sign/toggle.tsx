"use client";

import React from "react";
import SignIn from "./sign_in";
import User from "./user";
import { useAppContext } from "@/contexts/app";
import { isAuthEnabled } from "@/lib/auth";

export default function SignToggle() {
  const { user } = useAppContext();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { setMounted(true); }, []);
  if (!isAuthEnabled()) {
    return null;
  }
  if (!mounted) {
    return null;
  }
  return (
    <div className="flex items-center gap-x-2 px-2 cursor-pointer">
      {user ? <User user={user} /> : <SignIn />}
    </div>
  );
}
