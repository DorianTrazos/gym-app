import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../config/firebase.config';
import { AuthContext } from '../contexts/Auth.context';
import { getLocalStorageData, saveLocalStorageData } from '../utils/local-storage';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const storageData = getLocalStorageData(user.uid);
    setData(storageData);
  }, [user]);

  useEffect(() => {
    if (!user || !Object.keys(data)?.length) return;

    // Solo guardamos si hay datos en `data`
    saveLocalStorageData(user.uid, data);
  }, [data, user]);

  return <AuthContext.Provider value={{ user, loading, data, setData }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
