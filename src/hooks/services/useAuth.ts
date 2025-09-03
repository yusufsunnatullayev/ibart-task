import { login, register } from "@/lib/api/auth";
import { useMutation } from "@tanstack/react-query";

export function useAuthLogin() {
  return useMutation({
    mutationFn: login,
    onSuccess: () => {},
  });
}

export function useAuthRegister() {
  return useMutation({
    mutationFn: register,
    onSuccess: () => {},
  });
}
