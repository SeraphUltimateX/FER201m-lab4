const setLargeScreenVariables = () => {
    let root = document.querySelector(":root")

    var right
    let vw = window.innerWidth;
    if (vw > 1800) {
        right = -18
    } else if (vw > 1300) {
        right = -(18 - ((1800 - window.innerWidth) / 60))
    } else if (vw > 1080) {
        right = -(10 - ((1300 - window.innerWidth) / 28))
    } else {
        right = -(2.7 - ((1080 - window.innerWidth) / 15))
    }

    root.style.setProperty("--brand-logo-position", `${right}vw`)
}

export { setLargeScreenVariables }