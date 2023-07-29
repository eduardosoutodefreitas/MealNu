import MenuProvider from "./MenuContext";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <MenuProvider>{children}</MenuProvider>;
};

export default AppProvider;
