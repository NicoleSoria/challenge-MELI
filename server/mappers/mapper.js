const ItemsResponse = require("../response/items");

function mapperItems(data) {
    return new Promise((resolve, reject) => {
        try {
            let items = [];

            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                let item = new ItemsResponse(element);
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
            for (let i = 0; i < filters.length; i++) {
                const element = filters[i];
                items.push(element.name)
            }
            return resolve(items);
        }
        catch(error) {
          return reject(error);
    
        }
    })
}

module.exports = {
    mapperItems,
    mapperCategories
}