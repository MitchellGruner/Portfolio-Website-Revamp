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
            {params: {url: "quiz-list"}},
            {params: {url: "cloud-vend"}},
            {params: {url: "mobile-learning-app"}},
            {params: {url: "the-path"}},
            {params: {url: "hangman"}},
            {params: {url: "baseball-aggressive-analytics"}},
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