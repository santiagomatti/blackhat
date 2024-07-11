export const ItemQuantitySelector = ({ stock, quantity, onQuantityChange }) => {
    return (
        <input
            className="form-control text-center me-3"
            id="inputQuantity"
            type="number"
            value={quantity}
            min={1}
            max={stock}
            onChange={onQuantityChange}
            style={{ maxWidth: '3rem' }}
        />
    );
};
