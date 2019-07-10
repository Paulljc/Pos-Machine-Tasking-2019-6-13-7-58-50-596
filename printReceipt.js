function countBarcode(barcode) {
    let item = {};
    barcode.forEach((value, index) => {
      if (item[value] == undefined) {
        item[value] = 1;
      } else {
        item[value]++;
      }
    })
    return item;
  }
  
  function createReceipt(items) {
    let totalMoney = 0;
    let receiptContent = '';
    receiptContent += ('Receipts\n' +
        '------------------------------------------------------------\n');
  
    for(id in items) {
      const item = findItemByBracode(id);
      if (item !== undefined) {
        receiptContent += item['name'] + '\t' + item['price'] + '\t' + items[id] + '\n';
        totalMoney += item['price'] * items[id];
      } else {
        receiptContent = '[ERROR]: not found item[id=' + id + '].Please input correctly.'
        return receiptContent;
      }
    }

    receiptContent += '------------------------------------------------------------\nPrice: ' + totalMoney;
    return receiptContent;
  }
  
  function findItemByBracode(id) {
    const goodsDB = [
      {"id": "0001", "name": "Coca Cola", "price": 3},
      {"id": "0002", "name": "Diet Coke", "price": 4},
      {"id": "0003", "name": "Pepsi-Cola", "price": 5},
      {"id": "0004", "name": "Mountain Dew", "price": 6},
      {"id": "0005", "name": "Dr Pepper", "price": 7},
      {"id": "0006", "name": "Sprite", "price": 8},
      {"id": "0007", "name": "Diet Pepsi", "price": 9},
      {"id": "0008", "name": "Diet Mountain Dew", "price": 10},
      {"id": "0009", "name": "Diet Dr Pepper", "price": 11},
      {"id": "0010", "name": "Fanta", "price": 12}
    ];
  
    let item;
    goodsDB.forEach((value, index) => {
      if (id == value['id']) {
        item = {'id': value['id'], 'name': value['name'], 'price': value['price']};
      }
    })
    return item;
  }
  
  function printReceipt(barcodes) {
    const items = countBarcode(barcodes);
    const receipts = createReceipt(items);
    return receipts;
  }
  
  module.exports = {printReceipt, countBarcode, createReceipt, findItemByBracode};