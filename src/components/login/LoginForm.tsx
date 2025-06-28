import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

interface LoginFormData {
  email: string;
  password: string;
}

type LoginFormProps = {
  onSubmit: (data: LoginFormData) => void;
  isSubmitting?: boolean;
  error?: string;
};

export default function LoginForm({
  onSubmit,
  isSubmitting,
  error,
}: LoginFormProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  return (
    <div className="fixed inset-0 z-50 bg-blue-100 bg-opacity-50 flex items-center justify-center p-4 w-full-screen h-screen">
      <div className="flex bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full">
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-6">
            <button
              type="button"
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
            </button>
          </div>

          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Đăng nhập bằng email
            </h1>
            <p className="text-gray-600 text-sm">
              Nhập email và mật khẩu tài khoản Tiki
            </p>
            {error && (
              <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>
            )}
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="email"
                placeholder="acb@email.com"
                className={`w-full px-4 py-3 border-2 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-colors ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 focus:border-blue-500"
                }`}
                {...register("email", {
                  required: "Email là bắt buộc",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email không hợp lệ",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
                className={`w-full px-4 py-3 border-2 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-colors pr-12 ${
                  errors.password
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 focus:border-blue-500"
                }`}
                {...register("password", {
                  required: "Mật khẩu là bắt buộc",
                  minLength: {
                    value: 6,
                    message: "Mật khẩu phải có ít nhất 6 ký tự",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
            >
              {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
          </form>

          <div className="text-center mt-4">
            <button
              type="button"
              className="text-blue-500 text-sm hover:text-blue-600"
            >
              Quên mật khẩu?
            </button>
          </div>

          <div className="text-center text-sm text-gray-600 mt-2">
            Chưa có tài khoản?{" "}
            <button
              type="button"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Tạo tài khoản
            </button>
          </div>
        </div>
        <div className="md:block md:w-1/2 bg-gradient-to-br from-blue-100 to-blue-200 p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="w-52 h-52 mx-auto mb-6 flex items-center justify-center">
              <img
                src="https://salt.tikicdn.com/ts/upload/df/48/21/b4d225f471fe06887284e1341751b36e.png"
                alt=""
              />
            </div>
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              Mua sắm tại Tiki
            </h2>
            <p className="text-blue-700">Siêu ưu đãi mỗi ngày</p>
          </div>
        </div>
      </div>
    </div>
  );
}
