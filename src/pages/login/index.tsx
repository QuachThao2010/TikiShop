import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import LoginForm from "@/components/login/LoginForm";
import { BookWithQuantity } from "@/interfaces/BookWithQuantity";
import { Book } from "@/interfaces/Book";

export default function LoginPage() {
  const router = useRouter();
  const { callbackUrl } = router.query;

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (data: { email: string; password: string }) => {
    setIsSubmitting(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl: (callbackUrl as string) || "/",
    });

    if (res?.ok) {
      router.push("/home");
    } else {
      setError("Email hoặc mật khẩu không đúng");
    }

    setIsSubmitting(false);
  };

  return (
    <LoginForm
      onSubmit={handleLogin}
      isSubmitting={isSubmitting}
      error={error}
    />
  );
}
