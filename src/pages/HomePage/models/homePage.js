
export default {
  state: {
    userInfo: {
      name: '章三',
      age: 18,
      sex: '美少女',
    }
  },

  effects: (dispatch) => ({
    async asyncQuery () {
      await setTimeout(() => { console.log('执行一次') }, 3000);
      dispatch.homepage.update({ userInfo: { name: '李四', age: 22, sex: '小男孩' } });
    },
  }),

  reducers: {
    update (prevState, payload) {
      return { ...prevState, ...payload };
    },
  },
};
