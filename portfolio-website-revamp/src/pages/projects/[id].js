import {useRouter} from 'next/router';
import Link from "next/link";
import Head from "next/head";

import productDetailsData from "../../data/project-details.json";

// export function getStaticProps(staticProps) {
//     const params = staticProps.params;

//     return {
//         props: {
//             productDetails: productDetailsData.find((productDetails) => {
//                 return productDetails.id === 0;
//             }),
//         },
//     };
// }

// export function getStaticPaths() {
//     return {
//         paths: [{ params: { id: "0"}}, { params: { id: "1"}}],
//         fallback: false,
//     }
// }

const ProductDetails = (props) => {
    console.log("props", props);
    return (
        <div>Hello</div>
    )
};

export default ProductDetails;