const ItemResponse = require("../response/item.response");
const ItemsResponse = require("../response/items.response");
const PriceResponse = require("../response/price.response");

function mapperItems(data) {
    return new Promise((resolve, reject) => {
        try {
            let items = [];

            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                let splitPrice = JSON.stringify(element.price).split('.');
                let price = new PriceResponse(splitPrice[0], element.currency_id, splitPrice[1])
                let item = new ItemsResponse(element, price);
                items.push(item);
            }

            return resolve(items);
        }
        catch(error) {
          return reject(error);
    
        }
    })
}

function mapperCategories(filters) {
    return new Promise((resolve, reject) => {
        try {
            let items = [];
            for (let i = 0; i < filters.path_from_root.length; i++) {
                const element = filters.path_from_root[i];
                items.push(element.name)
            }
            return resolve(items);
        }
        catch(error) {
          return reject(error);
    
        }
    })
}

function mapperItem(data, description) {
    return new Promise((resolve, reject) => {
        try {
            let splitPrice = JSON.stringify(data.price).split('.');
            let price = new PriceResponse(splitPrice[0], data.currency_id, splitPrice[1]);
            let item = new ItemResponse(data, price, description);

            return resolve(item);
        }
        catch(error) {
          return reject(error);
    
        }
    })
}

module.exports = {
    mapperItems,
    mapperCategories,
    mapperItem
}