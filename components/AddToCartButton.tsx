const AddToCartButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="transform translate-x-1/2  bg-blue-500 text-white px-4 py-2 rounded"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
