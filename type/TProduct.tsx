

export default TProduct 

type TProduct = {
    _id: string,
    at: number,
    name: string,
    price: number,
    array: object[],
    
}

export type TUpdateProduct = Partial<Omit<TProduct, "_id" | "at">>

export type SCREENS = {
    HOME: 'HOME',
}

export type TKeyScreen = keyof SCREENS
const a :TKeyScreen = "HOME"


const b : {[key:string]:number} = {
    "aslla":3,
    // "sdfas":"dsfasf"
}







