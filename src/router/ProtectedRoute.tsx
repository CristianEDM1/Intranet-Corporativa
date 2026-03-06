import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import type { UserRole } from "../types/auth";

interface Props {
  children: React.ReactNode;
  allowedRoles: UserRole[];
}

const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/app" />;
  }

  return children;
};

export default ProtectedRoute;