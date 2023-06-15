/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

export const StoreContext = React.createContext(null);

// eslint-disable-next-line react/display-name
export default ({ children }) => {







    const context = {

    };

    return (
        <StoreContext.Provider value={context}>
            {children}
        </StoreContext.Provider>
    );
};