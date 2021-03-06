import Vue from "vue";
import App from "./App.vue";
import VCharts from "v-charts";
import elementui from "./elementui";
import "./styles/index.scss";

elementui(Vue);
Vue.config.productionTip = false;
Vue.use(VCharts);
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  // console.log("react app bootstraped", a);
  // a?.callBack(121212);
  new Vue({
    render: (h) => h(App),
  }).$mount("#app");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: any) {
  // console.log("home", props);
  props.onGlobalStateChange((state: any, prev: any) => {
    // state: 变更后的状态; prev 变更前的状态
    // console.log("home", state);
  });
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log("unmount");
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props: any) {
  console.log("update props", props);
}

if (process.env.NODE_ENV === "development") {
  bootstrap();
}
