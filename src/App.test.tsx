// import { Provider } from "react-redux";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import App from "./App";

describe("AppContainer", () => {
  const store = configureStore()({}) ;

  const wrapper = shallow(<App store={store} />);
  it("will render", () => expect(wrapper.find(".bg-app").length).toEqual(1));
});



// describe("/dashboard/DashboardChooserContainer", () => {
//   const mockStore = configureStore();

//   const renderedComponent = shallow(
//     <Provider store={mockStore()}>
//       <App />
//     </Provider>,
//   );
//   it("some test will go here", () => {
//     expect(
//       renderedComponent.contains("div")
//     ).toBe(true);
//   });
// });
