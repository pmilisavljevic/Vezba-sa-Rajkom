import { PropsWithChildren, createContext, useState } from "react";

type Props = PropsWithChildren;

type NameContext = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

export const NameContext = createContext<NameContext | null>(null);

const BoilerplateContextProvider = ({ children }: Props) => {
  const [name, setName] = useState("");
  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

export default BoilerplateContextProvider;

// Wrapovati context f oko komponenti gde hocemo pristup statu (provide value)
// Pozvati useContext u komp. gde hocemo info | const {name, setName} = useContext(NameContext) (consume value)

// CUSTOM HOOK

// export function useNameContext() {
//   const context = useContext(NameContext);
//   if (!context) {
//     throw new Error("useNameContext must be used within a Provider");
//   }
//   return context;
// }

// u komponenti - const {name, setName} = useNameContext();
