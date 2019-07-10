function trans2Object(barCode) {
    var item = {};
    barCode.forEach((value, index) => {
      if (item[value] == undefined) {
        item[value] = 1;
      } else {
        item[value]++;
      }
    })
    return item;
  }
  
  function createReceipt(items) {
    var totalMoney = 0;
    var receiptContent = '';
    receiptContent += ('Receipts\n' +
        '------------------------------------------------------------\n');
  
    for(id in items) {
      var item = findItemById(id);
      if (item !== undefined) {
        receiptContent = receiptContent + item['name'] + '\t' + item['price'] + '\t' + items[id] + '\n';
        totalMoney = totalMoney + item['price']*items[id];
      } else {
        receiptContent = '';
        receiptContent = '[ERROR]: not found item[id=' + id + '].Please input correctly.'
        return receiptContent;
      }
    }
  
    receiptContent += ('------------------------------------------------------------\nPrice: ' + totalMoney);
  
    return receiptContent;
  }
  
  function findItemById(id) {
    var goodsDB = [
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
  
    var item;
    goodsDB.forEach((value, index) => {
      if (id == value['id']) {
        item = {'id': value['id'], 'name': value['name'], 'price': value['price']};
      }
    })
    return item;
  }
  
  function printReceipt(barcodes) {
    var items = trans2Object(barcodes);
    var Receipts = createReceipt(items);
    console.log(Receipts);
    return Receipts;
  }
  
  //printReceipt(['0001','0003', '0005', '0003'])
  
  module.exports = printReceipt;