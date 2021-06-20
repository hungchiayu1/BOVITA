// Passes down searchQuery state to context

import { createContext, useState } from "react";

const SiteFilter = createContext({
  searchQuery: "",
});

function SiteFilterProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <SiteFilter.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SiteFilter.Provider>
  );
}

export { SiteFilterProvider, SiteFilter };
