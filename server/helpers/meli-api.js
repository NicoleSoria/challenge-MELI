const https = require('https');

function getData(url) {
    return new Promise((resolve, reject) => {
        try {
            https.get(url, (resp) => {
                let data = '';
            
                resp.on('data', (chunk) => {
                  data += chunk;
                });
            
                resp.on('end', async () => {
                  let dataResult = JSON.parse(data);
                 return resolve(dataResult);
                });
            
              }).on("error", (err) => {
                return reject(err)
              });
        }
        catch(error) {
          return reject(error);
        }
    })
}

module.exports = {
    getData
}