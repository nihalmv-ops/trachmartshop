import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

const AuthContext = createContext(null);

const STORAGE_KEY = "technest_user";

export function AuthProvider({ children }) {
  // --------------------------------
  // USER
  // --------------------------------

  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // --------------------------------
  // SAVE USER
  // --------------------------------

  useEffect(() => {
    if (user) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  // --------------------------------
  // REGISTER
  // --------------------------------

  function register(formData) {
    if (formData.password !== formData.confirm) {
      toast.error("Passwords do not match");
      return false;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      profileImage: null,
    };

    setUser(newUser);

    toast.success("Account created successfully", {
      icon: "👤",
    });

    return true;
  }

  // --------------------------------
  // LOGIN
  // --------------------------------

  function login(email, password) {
    const savedUser = localStorage.getItem(STORAGE_KEY);

    if (!savedUser) {
      toast.error("Account not found");
      return false;
    }

    try {
      const existingUser = JSON.parse(savedUser);

      if (
        existingUser.email === email &&
        existingUser.password === password
      ) {
        setUser(existingUser);

        toast.success("Login successful", {
          icon: "✅",
        });

        return true;
      }

      toast.error("Invalid email or password");
      return false;
    } catch {
      toast.error("Unable to login");
      return false;
    }
  }

  // --------------------------------
  // LOGOUT
  // --------------------------------

  function logout() {
    setUser(null);

    toast.success("Logged out successfully", {
      icon: "👋",
    });
  }

  // --------------------------------
  // UPDATE PROFILE
  // --------------------------------

  function updateProfile(data) {
    if (!user) {
      toast.error("Please login first");
      return false;
    }

    const updatedUser = {
      ...user,
      name: data.name,
      email: data.email,
    };

    setUser(updatedUser);

    toast.success("Profile updated successfully", {
      icon: "✅",
    });

    return true;
  }

  // --------------------------------
  // UPDATE PROFILE IMAGE
  // --------------------------------

  function updateProfileImage(image) {
    if (!user) {
      toast.error("Please login first");
      return false;
    }

    const updatedUser = {
      ...user,
      profileImage: image,
    };

    setUser(updatedUser);

    toast.success("Profile photo updated", {
      icon: "📸",
    });

    return true;
  }

  // --------------------------------
  // CONTEXT VALUE
  // --------------------------------

  const value = {
    user,
    isLoggedIn: !!user,

    register,
    login,
    logout,

    updateProfile,
    updateProfileImage,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// --------------------------------
// HOOK
// --------------------------------

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }

  return context;
}