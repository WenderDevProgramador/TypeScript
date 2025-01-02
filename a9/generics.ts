function first(array: any[]) {
    return array[0]
}

function last<Type>(array: Type[]) {
    return array[array.length - 1]
}