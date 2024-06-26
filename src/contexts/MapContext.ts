'use client'

import { SetStateAction, createContext, Dispatch } from "react"
import { accountOpt} from "./MapProvider"

interface Account {
    date: string;
    cnpjEnterprise: string;
    consumptionGoal: number;
    bill: number;
    consumption: number;
    billGoal: number;
    id: string;
}

interface User {
        id: string,
        companyName: string,
        cnpj: string,
        email: string
}

interface MapValues {

    hasOpen: boolean
    setHasOpen: Dispatch<SetStateAction<boolean>>
    accountType: accountOpt
    setAccountType: Dispatch<SetStateAction<accountOpt>>
    user: User | null
    fetchUserData: () => void
    isAuth: boolean
    waterAccounts: Account[] | null
    energyAccounts: Account[] | null
    modalIsOpen: boolean
    setModalIsOpen: Dispatch<SetStateAction<boolean>>
    editGoalModalIsOpen: boolean
    setEditGoalModalIsOpen: Dispatch<SetStateAction<boolean>>
    getAccounts: (cnpj: string) => void
}


export const MapContext = createContext({} as MapValues)





