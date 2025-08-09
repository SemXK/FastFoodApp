import { User } from '@/interfaces';
import { getCurrentUser } from '@/lib/appwrite';
import { create } from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;

  setIsAuthenticated: (value: boolean) => void;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;

  fetchAuthenticatedUser: () => Promise<void>;
}

 const useAuthStore = create<AuthState>((set) => ({

  isAuthenticated: false,
  user: null,
  isLoading: true,

  setIsAuthenticated: (value) => set({isAuthenticated: value}),
  setUser: (user) => set({user: user}),
  setLoading: (loading) => set({isLoading: loading}),

  fetchAuthenticatedUser: async () =>{
    set({isLoading: true})
    try{
      const user = await getCurrentUser()
      if(user) {
        set({isAuthenticated: true, user: user as any})
      }
      else {
        set({isAuthenticated: false, user: null})
      }
    }
    catch(e:any) {
      set({isAuthenticated: false, user:null})
      throw new Error(e)
    }
    finally{
      set({isLoading: false})
    }
  } 
}))

export default useAuthStore