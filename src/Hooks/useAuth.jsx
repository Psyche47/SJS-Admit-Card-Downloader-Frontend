import axios from "axios";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [auth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  axios.defaults.withCredentials = true;
  const checkAuth = async () => {
    try {
      const res = await axios.get("https://server.hcscr.net/verifyToken");
      if (res.data.Status === "Success") {
        setAuth(true);
        setIsLoading(false);
      }
    } catch (err) {
      setAuth(false);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    checkAuth();
  }, [auth]);

  const handleLogout = () => {
    axios
      .get("https://server.hcscr.net/logout")
      .then((res) => {
        location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return [auth, isLoading, handleLogout];
};

export default useAuth;
