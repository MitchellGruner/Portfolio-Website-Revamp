import ProjectsInfo from '../../components/ProjectsInfo';
import productDetailsData from "../../data/project-details.json";

export function getStaticProps(staticProps) {
    const params = staticProps.params;

    return {
        props: {
            productDetails: productDetailsData.find((productDetails) => {
                return productDetails.url === params.url;
            })
        }
    }
}

export function getStaticPaths() {
    return {
        paths: [
            {params: {url: "cloud-vend"}},
            {params: {url: "averys-pet-sitting"}},
            {params: {url: "quiz-list"}},
            {params: {url: "little-lemon"}},
            {params: {url: "rebate-center"}},
            {params: {url: "cart-page"}},
            {params: {url: "product-details-card"}},
        ],
        fallback: false,
    }
}

const ProductDetails = (props) => {
    return (
        <div className="pt-24 xs:pt-14 sm:pt-8">
            <ProjectsInfo project={props} />
        </div>
    );
};

export default ProductDetails;