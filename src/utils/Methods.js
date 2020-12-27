export const findLastFromUrl = url => {
    return url.substr(url.lastIndexOf("/") + 1)
}

export const sortMethod = (arr, val) => {
    switch (val) {
        case "NAME_DESC":
            arr = arr.sort((a, b) => a.name.localeCompare(b.name))
            return arr
        case "NAME_ASC":
            arr = arr.sort((a, b) => b.name.localeCompare(a.name))
            return arr
        default:
            return arr
    }
}