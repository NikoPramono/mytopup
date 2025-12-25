import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Simpan pilihan bahasa di sini (default: ID)
  const [lang, setLang] = useState("ID");

  const switchLanguage = (newLang) => {
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook kustom agar pemanggilan di komponen lain lebih pendek
export const useLanguage = () => useContext(LanguageContext);