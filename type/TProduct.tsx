

export default TProduct 

type TProduct = {
    id: number,
    image: string,
    name: string,
    price: number,
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







