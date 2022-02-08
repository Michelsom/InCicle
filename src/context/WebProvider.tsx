import { createContext, ReactNode, useState } from "react";
import dataJson from "../../data.json";
import { DataJson } from "../Models/InterfaceData";
import management from "../../management.json";
import { DataModels, ManagementProps } from "../Models/InterfaceManagement";

interface ContextData {
  filter: "release" | "publication" | "event" | undefined;
  setFilter: React.Dispatch<
    React.SetStateAction<"release" | "publication" | "event" | undefined>
  >;
  removeEvent: number | undefined;
  setRemoveEvent: React.Dispatch<React.SetStateAction<number | undefined>>;
  receptJson: DataJson[];
  removeEventFn: (id: number) => void;
  removeItemFn: (title: string) => void;
  receptManagement: ManagementProps[];
}
interface ProviderProps {
  children: ReactNode;
}
const WebContext = createContext<ContextData>({} as ContextData);

export function WebProvider({ children }: ProviderProps) {
  const [filter, setFilter] = useState<
    "release" | "publication" | "event" | undefined
  >();
  const [receptJson, setReceptJson] = useState<DataJson[]>(dataJson.data);
  const [receptManagement, setReceptManagement] = useState<ManagementProps[]>(
    management.data
  );
  
  const [removeEvent, setRemoveEvent] = useState<number | undefined>();

  function removeEventFn(id: number) {
    let response = receptJson.filter((e) => e.id !== id);
    setReceptJson(response);
  }
  function removeItemFn(title: string) {
    let boards = receptManagement[0].boards.filter((e)=>e.title !== title)
    setReceptManagement([{boards}]);
  
  }

  return (
    <WebContext.Provider
      value={{
        removeItemFn,
        receptManagement,
        setFilter,
        filter,
        setRemoveEvent,
        removeEventFn,
        removeEvent,
        receptJson,
      }}
    >
      {children}
    </WebContext.Provider>
  );
}
export default WebContext;
