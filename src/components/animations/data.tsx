export const fromTheLeft = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0},
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.5 }
}


export const fromTheRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0},
    exit: { opacity: 0, x: 100 },
    transition: { duration: 0.5 }
}


export const fromTheBotton = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0},
    exit: { opacity: 0, x: 50 },
    transition: { duration: 0.3 }
}
