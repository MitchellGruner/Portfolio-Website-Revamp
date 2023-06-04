import ProjectsInfo from '../../components/ProjectsInfo';

import {useRouter} from 'next/router';
import productDetailsData from "../../data/project-details.json";

export function getStaticProps(staticProps) {
    const params = staticProps.params;

    return {
        props: {
            productDetails: productDetailsData.find((productDetails) => {
                return productDetails.id.toString() === params.id;
            })
        }
    }
}

export function getStaticPaths() {
    return {
        paths: [
            {params: {id: "0"}},
            {params: {id: "1"}},
            {params: {id: "2"}},
            {params: {id: "3"}},
            {params: {id: "4"}},
            {params: {id: "5"}}
        ],
        fallback: false,
    }
}

const ProductDetails = (props) => {
    const router = useRouter();
    
    return (
        <div className="pt-24 xs:pt-14 sm:pt-8">
            <ProjectsInfo project={props} />
        </div>
    );
};

export default ProductDetails;