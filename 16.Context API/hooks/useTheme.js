import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


function useTheme() {

    const [isDark, setDark] = useContext(ThemeContext);
    
    return [isDark, setDark];

}

export default useTheme;