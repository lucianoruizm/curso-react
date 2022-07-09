import { ToggleButton, ToggleContainer } from "./theme-toggle.styled";
import React, { useContext } from 'react';
import { ThemeContext } from "../../App";

export default function ThemeToggle() {
    const themeStyles = useContext(ThemeContext)


    return (
    <ToggleContainer themeStyles={themeStyles}>
        <ToggleButton>
            Cambiar Tema
        </ToggleButton>
    </ToggleContainer>
    )
}