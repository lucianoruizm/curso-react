import { ToggleButton, ToggleContainer } from "./theme-toggle.styled";
import React, { useContext } from 'react';
import { ThemeContext } from "../../contexts/ThemeContext";

export default function ThemeToggle() {
    const { themeStyles, updateThemeStyles } = useContext(ThemeContext)


    return (
    <ToggleContainer themeStyles={themeStyles}>
        <ToggleButton onClick={updateThemeStyles}>
            Cambiar Tema
        </ToggleButton>
    </ToggleContainer>
    )
}