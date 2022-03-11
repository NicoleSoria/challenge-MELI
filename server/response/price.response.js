class PriceResponse {
  constructor(amount, currency, decimals) {
    this.currency = currency;
    this.amount = amount;
    this.decimals = decimals || null;
  }
}

module.exports = PriceResponse;