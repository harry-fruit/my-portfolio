export const getSystemTheme = (): "dark" | "light" => {
    const html = document.querySelector("html");
    
    if (html) {
        html.classList.contains("dark");
        return "dark";
    }

    return "light";
};

export const getNewTheme = (theme?: string): "dark" | "light" => {
    if (!theme || theme === "system") theme = getSystemTheme();
    return theme === "dark" ? "light" : "dark";
};


export const getTheme = (theme?:string): "dark" | "light" => {
    if (!theme || theme === "system") return getSystemTheme();
    return theme as "dark" | "light";
};