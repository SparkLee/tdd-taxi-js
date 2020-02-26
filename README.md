## Kata介绍

1. 通过文本文件向应用程序提供输入数据 testData.txt (`src/fixtures/testData.txt`)。
2. 在 `src/index.js` 中**集成**你自己所写的代码，并将结果赋值给 `receipt` 变量。
    * `testDataFile` 为 `/fixtures` 文件夹下的测试数据文件名，例如传入的值为 "testData.txt"。
    * 你写的程序将把 `testDataFile` 作为参数加载此文件并读取文件内的测试数据，并对每条测试数据计算结果。
    * 将所有计费结果拼接并使用 `\n` 分割，然后保存到 receipt 变量中。
3. 请按照提示把你的的代码逻辑写在 `function main()` 之外，充分做好单元测试。
4. 不得修改 `package.json` 文件和 `.eslintrc`, `.prettierc` 等配置文件。

### 出租车计价：

1. 不大于2公里时只收起步价6元。
2. 超过2公里的部分每公里收取0.8元。
3. 超过8公里的部分，每公里加收50%长途费。
4. 停车等待时加收每分钟0.25元。
5. 最后计价的时候司机会四舍五入只收到元。

### 测试数据：

```text
1公里,等待0分钟\n
3公里,等待0分钟\n
10公里,等待0分钟\n
2公里,等待3分钟
```
### 期望输出：

```text
收费6元\n
收费7元\n
收费13元\n
收费7元\n
```
### 开始考试

1. 点击`开始考试`。
2. 下载考题模板并解压，重命名为`tdd-taxi-js`。
3. `cd tdd-taxi-js`。
4. `git init`。
5. `git remote add origin <github自有仓库>`。
6. `git add .`。
7. `git commit -m "Initial commit"`。
8. `git push -u origin master`。
9. 接着答题，使用`npm run test` 和 `npm run lint`验证本地结果。
10. 本地验证无误后，push到远程仓库，并将git地址提交到科举。
11. 提交之后等待科举出考试结果。

### 考试通过的标准

1. 通过 checkstyle 规则(配置文件见 `.eslintrc` )：
    * 单个 JavaScript 文件不得超过50行。
    * 单行代码长度不得超过80个字符。
    * 单个方法长度不得超过10行。
    * 单个方法的圈复杂度不得超过4。
    * 单个方法参数个数不得超过3。
    * 友好的方法命名。
2. 在规定考试时间内完成答题，并完成所有需求。
3. 测试覆盖率100%，没有严重的Sonar问题。
4. 采用TDD开发模式。
