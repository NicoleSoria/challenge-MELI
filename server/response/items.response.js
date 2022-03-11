class ItemsResponse {
    constructor(item, price) {
        this.id = item.id;
        this.title = item.title;
        this.free_shipping = item.shipping.free_shipping;
        this.picture = item.thumbnail;
        this.condition = item.condition;
        this.price = price;
    }
}

module.exports = ItemsResponse;
