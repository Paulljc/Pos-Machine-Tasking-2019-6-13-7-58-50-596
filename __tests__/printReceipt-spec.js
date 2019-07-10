const printReceipt = require("../printReceipt")

it('should be print receipt', () => {
    //given
    const items = ['0001', '0003', '0005', '0003'];
    //when
    const result = printReceipt.printReceipt(items);
    //then
    expect(result).toMatch("Receipts\n------------------------------------------------------------\nCoca Cola\t3\t1\nPepsi-Cola\t5\t2\nDr Pepper\t7\t1\n------------------------------------------------------------\nPrice: 20");
  });

  it('should count barcode', () => {
    //given
    const barcode = ['0001', '0003', '0005', '0003'];
    //when
    const result = printReceipt.countBarcode(barcode);
    //then
    expect(result).toEqual({'0001':1, '0003':2, '0005':1});
  });

  it('should find item by bracode', () => {
    //given
    const barcode = ['0003'];
    //when
    const result = printReceipt.findItemByBracode(barcode);
    //then
    expect(result).toEqual({'id':'0003', 'name':'Pepsi-Cola', 'price':5});
  });