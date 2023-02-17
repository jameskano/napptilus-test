// Components
import ProductListFilter from "components/product-list-filter/ProductListFilter";
// import ProductThumbnail from "components/product-thumbnail/ProductThumbnail";

const ProductList = () => {
    const productListHandler = () => {
        return productListHandler.map(({ image, title, id }) => {
            // return <ProductThumbnail key={id} image={image} title={title} />;
        });
    };

    return (
        <div className="product-list">
            <ProductListFilter />

            <div className="product-list__container">{productListHandler}</div>
        </div>
    );
};

export default ProductList;
