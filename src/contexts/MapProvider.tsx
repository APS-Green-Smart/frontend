'use client'

import { useState, useEffect, useCallback } from "react";
import { MapContext } from "./MapContext";
import useAuth from "@/app/hooks/useAuth";
import { jwtDecode } from "jwt-decode";

interface MapProviderProps {
   children: React.ReactNode;
}

export enum accountOpt {
   WATER = "water",
   ENERGY = "energy",
}

interface User {
   id: string,
   companyName: string,
   cnpj: string,
   email: string
}

interface DecodedToken {
   sub: string;
   cnpj: string;
   exp: number;
}

export const MapProvider = ({ children }: MapProviderProps) => {
   const [accountType, setAccountType] = useState<accountOpt>(accountOpt.WATER);
   const [user, setUser] = useState<User | null>(null);
   const [isAuth, setIsAuth] = useState(false);
   const { getUserInfo } = useAuth();

   const [waterAccounts, setWaterAccounts] = useState<any>(null);
   const [energyAccounts, setEnergyAccounts] = useState<any>(null);

   const fetchUserData = async () => {
      const data = getUserInfo();
      if (data) {
         const response = await fetch(`http://127.0.0.1:8080/api/auth/getuser/${data.email}`, {
            method: 'GET'
         });

         const output: User = await response.json();
         if (output) {
            setUser(output);
            await getAccounts(output.cnpj)
            
         }
      }
   };

   const getAccounts = async (cnpj: string) => {
      try {
         const [responseWater, responseEnergy] = await Promise.all([
            fetch("http://127.0.0.1:8080/account/water/list", {
               method: "POST",
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                  cnpjEnterprise: cnpj, // Usando output.cnpj
                  includeGoals: true
               })
            }),
            fetch("http://127.0.0.1:8080/account/energy/list", {
               method: "POST",
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                  cnpjEnterprise: cnpj, // Usando output.cnpj
                  includeGoals: true
               })
            })
         ]);

         if (!responseWater.ok || !responseEnergy.ok) {
            throw new Error('Failed to fetch accounts');
         }

         const waterAccounts = await responseWater.json();
         const energyAccounts = await responseEnergy.json();

         setWaterAccounts(waterAccounts);
         setEnergyAccounts(energyAccounts);
      } catch (error) {
         console.error('Error fetching accounts:', error);
      }
   }

   const isAuthenticated = useCallback(() => {
      const token = localStorage.getItem('token');
      if (!token) return false;
      try {
         const decodedToken: DecodedToken = jwtDecode(token);
         return decodedToken.exp > Date.now() / 1000;
      } catch (error) {
         console.error('Failed to decode token:', error);
         return false;
      }
   }, []);

   useEffect(() => {
      const checkAuth = async () => {
         const authStatus = isAuthenticated();
         setIsAuth(authStatus);
         if (authStatus) {
            await fetchUserData();
         }
      };
      checkAuth();
   }, [isAuthenticated]);

   const [hasOpen, setHasOpen] = useState<boolean>(false);
   const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
   const [editGoalModalIsOpen, setEditGoalModalIsOpen] = useState<boolean>(false);

   return (
      <MapContext.Provider value={{ getAccounts, modalIsOpen, setModalIsOpen, editGoalModalIsOpen, setEditGoalModalIsOpen, waterAccounts, energyAccounts, fetchUserData, isAuth, user, hasOpen, setHasOpen, accountType, setAccountType }}>
         {children}
      </MapContext.Provider>
   );
};