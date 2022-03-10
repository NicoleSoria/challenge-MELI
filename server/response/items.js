class ItemsResponse {
    constructor(items) {
        this.id = items.id;
        this.title = items.title;
        this.free_shipping = items.shipping.free_shipping;
        this.picture = items.thumbnail;
        this.condition = items.condition;
    }
}

module.exports = ItemsResponse;
