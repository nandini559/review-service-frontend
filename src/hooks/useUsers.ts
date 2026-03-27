import {useEffect, useState} from "react";
import {getUsers} from "../services/userService";

export const useUsers = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data);
    }).catch(() => {
      setError("Failed to fetch 😭");
    }). finally(() => {
      setLoading(false);
    });
  }, []);

  return {users, loading, error};
};
