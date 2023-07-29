'use client'
import MenuProvider from "@/contexts/MenuContext";
import { ThemeProvider } from "next-themes";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (<MenuProvider>
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider></MenuProvider>)
};

export default AppProvider;