import { onAuthStateChanged } from "firebase/auth";
import { createContext,useContext,useState,React,useEffect } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        //To check if there is a current user
       const unsub = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
        });

        //Use cleanup function in order to avoid memory leaks
        return () => {
           unsub();
        }

    }, []);
    
    // The below code snippet can be accessed by components once wrapped around render component(in this case)
    return(
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    );
}

//Create authentication provider and create a user so that user can be accessed in every component in the application