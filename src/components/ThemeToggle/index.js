import { ToggleButton, toggleContainerStyles } from "./theme-toggle.styled";
import React from 'react';

export default function ThemeToggle() {

    return 
    <div css={toggleContainerStyles}>
        <ToggleButton>
            Cambiar Tema
        </ToggleButton>
    </div>
}