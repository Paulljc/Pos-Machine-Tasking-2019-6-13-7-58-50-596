const printReceipt = require("../printReceipt")

it('should be print receipt', () => {
    //given
    const items = ['0001', '0003', '0005', '0003'];
    //when
    const result = printReceipt.printReceipt(items);
    //then
    expect(result).toMatch("Receipts\n------------------------------------------------------------\nCoca Cola\t3\t1\nPepsi-Cola\t5\t2\nDr Pepper\t7\t1\n------------------------------------------------------------\nPrice: 20");
  });