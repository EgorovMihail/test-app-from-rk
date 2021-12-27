import { makeAutoObservable } from "mobx";

class StateCheckbox {
  enabledChecked = true;
  autoRefrashChecked = false;

  constructor() {
    makeAutoObservable(this);
  }
  setEnabledChecked() {
    this.enabledChecked = !this.enabledChecked;
  }
  setAutoRefrashChecked(state) {
    this.autoRefrashChecked = !this.autoRefrashChecked;
  }
}

export default new StateCheckbox();
