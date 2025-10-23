
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/contexts/app";
import { useTranslations } from "next-intl";

export default function SignIn() {
  const t = useTranslations();
  const { setShowSignModal } = useAppContext();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return (
    <Button
      variant="default"
      onClick={() => setShowSignModal(true)}
      className="cursor-pointer"
    >
      {t("user.sign_in")}
    </Button>
  );
}
