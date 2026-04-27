/**
 * Custom hooks para gestionar preferencias persistidas en localStorage.
 * Centraliza la lógica de tema e idioma para evitar duplicación.
 */

import { useState, useEffect } from 'react';

/**
 * Hook para gestionar la preferencia de idioma con persistencia en localStorage.
 * @param {string} defaultLanguage - Idioma por defecto (default: 'en')
 * @param {string} storageKey - Clave en localStorage (default: 'language')
 * @returns {[string, Function]} - [idioma actual, función para cambiar idioma]
 */
export const useLanguagePreference = (defaultLanguage = 'en', storageKey = 'language') => {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem(storageKey);
        return saved || defaultLanguage;
    });

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        localStorage.setItem(storageKey, newLanguage);
    };

    return [language, changeLanguage];
};

/**
 * Hook para gestionar la preferencia de tema con persistencia en localStorage.
 * @param {string} storageKey - Clave en localStorage (default: 'dark-mode')
 * @returns {[boolean, Function]} - [isDarkMode, función para cambiar tema]
 */
export const useThemePreference = (storageKey = 'dark-mode') => {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem(storageKey);
        return saved !== null ? JSON.parse(saved) : false;
    });

    const toggleTheme = () => {
        setIsDark(prev => {
            const nextValue = !prev;
            localStorage.setItem(storageKey, JSON.stringify(nextValue));
            return nextValue;
        });
    };

    // Sincronizar con la clase del body
    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDark]);

    return [isDark, toggleTheme];
};
