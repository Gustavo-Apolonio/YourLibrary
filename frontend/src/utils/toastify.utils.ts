import { toast } from "react-toastify";

export const ToastifyUtils = {
  error: (message: string) => (toast.error(message, { className: 'app-toastify' })),
};
