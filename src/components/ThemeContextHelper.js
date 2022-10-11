const setThemeVariables = (theme) => {
    let root = document.querySelector(":root")

    root.style.setProperty("--box-shadow-color", `${theme.boxShadowColor}`)
    root.style.setProperty("--nav-text-color", `${theme.focusedTextColor}`)

    root.style.setProperty("--content-text-color", `${theme.contentTextColor}`)
    root.style.setProperty("--focused-text-color", `${theme.focusedTextColor}`)
    root.style.setProperty("--primary-bg-color", `${theme.primaryBackgroundColor}`)
    root.style.setProperty("--backdrop-bg-color", `${theme.backdropBackgroundColor}`)
    root.style.setProperty("--focused-bg-color", `${theme.focusedBackgroundColor}`)
    root.style.setProperty("--muted-bg-color", `${theme.mutedBackgroundColor}`)

    // console.log(getComputedStyle(root).getPropertyValue("--box-shadow-color"))
}

export { setThemeVariables }