import { PRODUCT_URL } from "../constants";
import { apislice} from "./apiSlice";

export const productsilce = apislice.injectEndpoints({
    endpoints:(builder) => ({
        getProducts:builder.query({
            query:()=> ({
                url:PRODUCT_URL
            })
        })
    })
})

export const {useGetProductsQuery} = productsilce;

