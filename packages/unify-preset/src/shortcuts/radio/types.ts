import { RingBase, RingColorShades} from "@/types"

export type Radio = {
    ring?:RingColorShades,
    ringBase?:RingBase,
    size?:{
        sm?:number | string,
        md?:number | string,
        lg?:number | string,
        xl?:number | string
    }
}