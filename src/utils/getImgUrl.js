function getImgUrl (name) {
    return new URL(`../assets/videogames/${name}`, import.meta.url)
}

export {getImgUrl}