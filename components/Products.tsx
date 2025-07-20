'use client';

const Products = ({ cat }: { cat: string }) => {
  const url = 'https://belshawlimited.com/product-category/' + cat + '/';

  return (
    <>
      <div className="iframeContainer">
        <iframe src={url} className="iframeContent"></iframe>
      </div>
    </>
  );
};

export default Products;
