function your_function_from_another_module() {
  // TODO: rename and start coding, pls move your function out of this file
  return 'Hello World!';
}

export default function main(testDataFile = 'testData.txt') {
  /* TODO
    1. testDataFile为fixtures文件夹下的测试数据文件名，例如传入的值为"testData.txt"，注意并不包含文件路径。
    2. 你写的程序将把testDataFile作为参数加载此文件并读取文件内的测试数据，并对每条测试数据计算结果。
    3. 将所有计费结果拼接并使用\n分割，然后保存到receipt变量中。
   */
  const receipt = your_function_from_another_module(testDataFile);
  console.log(receipt);
  return receipt;
}

main();
