import { observable, action } from 'mobx';

class GroceryStore {
    @observable count = 0;

    @action
    inc = () => {
      this.count += 1;
    };

    @action
    dec = () => {
      this.count -= 1;
    }
}

export default new GroceryStore();
