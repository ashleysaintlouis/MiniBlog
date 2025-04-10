import { db, auth } from "../firebase/config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';

import { useState, useEffect } from 'react';

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [cancelled, setCancelled] = useState(false);

    function checkIfIsCancelled () {
        if (cancelled) {
            console.log("Cancelled.");
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled();
        setLoading(true);
        setError("")

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.displayName
            });

            setLoading(false);

            return user;
        } 
        catch (error) {
            console.log(error.message);
            console.log(typeof error.message);
      
            let systemErrorMessage;
      
            if (error.message.includes("Password")) {
              systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
            } else if (error.message.includes("email-already")) {
              systemErrorMessage = "E-mail já cadastrado.";
            } else {
              systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
            }
      
            setLoading(false);
            setError(systemErrorMessage);
        }
      
    };

    //logout - sign out
    const logout = () => {
        checkIfIsCancelled();

        signOut(auth)
    }
      
    //Login sign in
    const login = async(data) => {
        checkIfIsCancelled();
        setLoading(true);
        setError(false);

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            setLoading(false);
        } 
        catch (error) {
            console.log(error.message);
            console.log(typeof error.message);
      
            let systemErrorMessage;

            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não encontrado!";
            }
            else if (error.message.includes("invalid-credential")) {
                systemErrorMessage = "Credenciais inválidas.";
            }
            else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }

            setLoading(false);
            setError(systemErrorMessage)
        }
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, []);
    
    return {
        auth,
        createUser,
        error,
        loading, 
        logout,
        login,
    };
}