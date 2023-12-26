console.log(`
  總共分為 4 個元件
  1.聊天室的 Header
  2.聊天室的 訊息畫面區塊
  3.聊天室的 訊息(頭像＋內容)
  4.聊天室的 底部輸入訊息區塊


  結構為：

  <section>
    頭像
    <Header />

    聊天室元件(管理內容狀態)
    <div>
      訊息畫面
      <div>
        {
          messages.map((msg) => {
            const {
              id,             每一則訊息獨有的 id 
              isShowAuthor,   控制頭像是否顯示
              isReverse,      訊息方向反轉
            } = msg

            return <Message {...msg} key={id} isShowAuthor={isShowAuthor} isReverse={isReverse} />
          })
        }
      </div>

      聊天室底部(輸入訊息)
      <Footer />
    </div>
  </section>
`)
