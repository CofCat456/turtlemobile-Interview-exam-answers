// 初始獎項數量
let prizes = [1, 2, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]

// 定義獎項中獎機率
const prizeWeight = [1, 23, 130, 180, 250];

// 計算總權重
const weightSum = prizeWeight.reduce((pre, arr) => pre + arr);

const lotty = () => {
  // 產生隨機權重 0 - 584
  const randomNumber = Math.round(Math.random() * (weightSum));

  // 計算抽到幾等獎
  const concatWeightArr = prizeWeight.concat(Number(randomNumber))
  const sortedWeightArr = concatWeightArr.toSorted()
  const randomIdx = sortedWeightArr.indexOf(randomNumber);
  const getIndex = randomIdx === prizeWeight.length ? randomIdx : randomIdx + 1


  // 抽取獎項
  // 當抽到重複的時，跳出重新抽
  if (prizes.indexOf(getIndex) !== -1) {
    prizes.splice(prizes.indexOf(getIndex), 1)

    if (prizes.length === 0)
      console.log(`抽到${getIndex} 號獎 獎勵均已抽完`)
    else
      console.log(`抽到${getIndex} 號獎 目前尚未抽取的獎勵為 ${JSON.stringify((prizes))}`)
  }
  else
    return lotty()

  return prizes.length === 0 ? null : lotty();
}

lotty();
