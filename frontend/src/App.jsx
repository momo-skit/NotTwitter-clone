import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";

import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";

import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";

import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./components/common/LoadingSpinner";

function App() {
  const {
    data: authUser, //this boy is part of response objet, not as an input queyFn. But again as a resovoled value from queryFn
    isLoading,
  } = useQuery({
    // by default useQuery will automatically fetch, and it begins with 3 fetches unitl get response
    // we use queryKey to give a unique name to our query and refer to it later
    queryKey: ["authUser"], // later on we refer and use this again whihc lead to the queryFn, which all enable by queryClient this is the main manager of all your queryKey,Fn of all kind if u have mroe
    queryFn: async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json(); // resloved value of queryFn pass int data then pass to authUse state above
        if (data.error) return null; // to get away with logout, when user not really kicked out, used this tp kind of invoke the condiional render of ching auth user and send to /logiin page-- cuz u dont jave logout page below
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }

        console.log("authUser is here:", data);
        return data;
      } catch (error) {
        throw new Error(error);
      }
    },

    retry: false,
  });

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="flex max-w-6xl mx-auto">
      {/* Common component (sidebar and right pannel)cuz it's not wrapped with Routes */}
      {authUser && <Sidebar />}
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route
          path="/notifications"
          element={authUser ? <NotificationPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile/:username"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
        />
      </Routes>
      {authUser && <RightPanel />}
      <Toaster />
    </div>
  );
}

export default App;
