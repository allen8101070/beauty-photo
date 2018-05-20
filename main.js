console.clear();

const vm = new Vue({
  el: "#app",
  data: {
    array1:[],
    array2:[],
    array3:[]
  },
  methods: {
    getJson(){
      let self = this;
      axios.get("https://ptt-brauty-json.herokuapp.com/")
        .then(function(res) {
        console.log('AJAX成功');
        self.setData(res.data)
      })
        .catch(function(error) {
        console.log(error);
      });

    },
    setData: function(data) {
      //計算AJAX到的json陣列長度除3 並無條件捨去
      let data3in1 = data.length / 3;
      data3in1 = Math.floor(data3in1);
      console.log(data3in1);
      
      //取出3分之一的陣列
      for (let i = 0; i < data3in1; i++) {
        this.array1.push(data[i]);
        //移除json陣列內的一個值
        data = data.slice(1);
      }
      //取出3分之一的陣列
      for (let i = 0; i < data3in1; i++) {
        this.array2.push(data[i]);
        //移除json陣列內的一個值
        data = data.slice(1);
      }
      //取出3分之一的陣列
      for (let i = 0; i < data.length; i++) {
        //取出目前剩的json陣列
        this.array3.push(data[i]);
      }
    }
  },
  mounted(){
    this.getJson()
  }
});
