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
    let mockStore;
    let mockAwn;
    let username = "";
    let password = "";

    afterEach(function() {
        wrapper = null;
        username = "";
        password = "";
        mockStore = null;
        mockAwn = null;
    });
    it("calls login action with correct values", async function() {
        // Arrange
        username = "admin";
        password = "password";
        mockStore = {
            dispatch: sinon.stub().resolves(true)
        };
        wrapper = shallowMount(Login, {
            mocks: {
                $store: mockStore
            },
        });
        // Act
        let usernameInput = wrapper.find("#username");
        let passwordInput = wrapper.find("#password");
        let loginButton = wrapper.find(".login__button");
        usernameInput.setValue(username);
        passwordInput.setValue(password);
        await loginButton.trigger("click");
        // Assert
        expect(mockStore.dispatch).to.have.been.calledWith("login", {username: username, password: password});
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
        mockStore = {
            dispatch: sinon.stub().resolves(true)
        };
        wrapper = shallowMount(Login, {
            localVue: localVue,
            router: router,
            mocks: {
                $store: mockStore
            },
        });
        // Act
        let usernameInput = wrapper.find("#username");
        let passwordInput = wrapper.find("#password");
        let loginButton = wrapper.find(".login__button");
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