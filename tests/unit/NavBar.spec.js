import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import NavBar from "@/components/NavBar";

describe("NavBar", function() {
    let wrapper;
    let expectedResult;
    let actualResult;

    after(function() {
        wrapper.destroy()
    });
    it("color changes when hovering over icon", async function() {
        // Arrange
        expectedResult = "hovering";
        wrapper = shallowMount(NavBar, {
            mocks: {
                $store: {
                    state: {
                        authenticatedUser: "Admin"
                    }
                }
            },
            // We can stub any element, such as third party components or vue elements
            // that we don't care about for this particular test
            stubs: ['router-link']
        });
        // Act
        let icon = wrapper.get(".navBar__icon");
        await icon.trigger("mouseenter");
        actualResult = icon.attributes().class;
        // Assert
        expect(actualResult).to.include(expectedResult);
    });

});