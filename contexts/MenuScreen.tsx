import React, { createContext, useContext, useState, ReactNode } from 'react';
import AddMenuItemScreen from './addMenuItemScreen';

interface MenuItem {
    id: number;
    name: string;
    course: string;
    price: number;
    tags: string [];
}

interface MenuContextType {
    menuItem: MenuItem [];
    addMenuItem: (item: MenuItem) => void;
    removeMenuItem: (id: number) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [menuItem, setMenuItems] = useState<MenuItem[]>([]);

    const addMenuItem = (item: MenuItem) => {
        setMenuItems((prevItems) => [...prevItems, item]);
    };

    const removeMenuItem = (id: number ) => {
        setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <MenuContext.Provider value={{ menuItem, addMenuItem, removeMenuItem}}>
            { children }
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
};

export default AddMenuItemScreen;