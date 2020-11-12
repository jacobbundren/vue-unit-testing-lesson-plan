import { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Login from "@/views/Login";
import chai from "chai";
import VueRouter from "vue-router";

chai.use(sinonChai);

describe("Login", function() {
    let wrapper;
    let stubStore;
    // eslint-disable-next-line no-unused-vars
    let mockAwn;
    let username = "";
    let password = "";

    afterEach(function() {
        wrapper = null;
        username = "";
        password = "";
        stubStore = null;
        mockAwn = null;
    });
    it("calls login action with correct values", async function() {
        // Arrange
        username = "admin";
        password = "password";
        stubStore = {
            dispatch: sinon.stub().resolves(true)
        };
        wrapper = shallowMount(Login, {
            mocks: {
                $store: stubStore
            },
        });
        // Act
        let usernameInput = wrapper.get("#username");
        let passwordInput = wrapper.get("#password");
        let loginButton = wrapper.get(".login__button");
        usernameInput.setValue(username);
        /*
        same as saying:
        usernameInput.element.value = username;
        await usernameInput.trigger("change");
         */
        passwordInput.setValue(password);
        await loginButton.trigger("click");
        // Assert
        expect(stubStore.dispatch).to.have.been.calledWith("login", {username: username, password: password});
    });
    it("pushes correct path to the router", async function() {
        // Arrange
        const localVue = createLocalVue();
        localVue.use(VueRouter);
        const routes = [
            {
                path: "/home"
            }
        ];
        const router = new VueRouter({
            routes
        });
        username = "admin";
        password = "password";
        stubStore = {
            dispatch: sinon.stub().resolves(true)
        };
        wrapper = shallowMount(Login, {
            localVue: localVue,
            router: router,
            mocks: {
                $store: stubStore
            },
        });
        // Act
        let usernameInput = wrapper.get("#username");
        let passwordInput = wrapper.get("#password");
        let loginButton = wrapper.get(".login__button");
        usernameInput.setValue(username);
        passwordInput.setValue(password);
        await loginButton.trigger("click");
        // Assert
        expect(wrapper.vm.$route.path).to.equal(routes[0].path);
    });

    it("calls an error toast when inputs are empty", async function() {
        // Arrange

        // Act

        // Assert

    });

    it("calls an error toast when promise is rejected in dispatch", function() {

    });

});