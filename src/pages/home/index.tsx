import HomeContent from "@/components/homeContent";
import MainLayout from "@/layouts/mainLayout";
import { useState } from "react";

export default function HomeTiki() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <HomeContent />
    </>
  );
}

HomeTiki.getLayout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;
