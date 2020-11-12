import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import TeamMemberListItem from "@/components/TeamMemberListItem";

describe("TeamMemberListItem", function() {
    let wrapper;
    let member;
    let expectedResult;
    let actualResult;

    beforeEach(function() {
        member = {
            name: "Jacob Bundren",
            startDate: "3/16/2020",
            count: 10
        }
    });
    afterEach(function() {
        wrapper.destroy();
        member = null;
        expectedResult = null;
        actualResult = null;
    });

    describe("Renders all elements correctly", function() {
        it("renders name of team member", function() {
            // Arrange
            expectedResult = member.name;
            // Act
            wrapper = shallowMount(TeamMemberListItem, {
                propsData: {
                    member: member
                }
            });
            actualResult = wrapper.find(".teamMemberListItem__name").text();
            // Assert
            expect(actualResult).to.equal(expectedResult);
        });
        it("Demo - renders the correct level of dumbness", function() {

        });
    });

    describe("Methods", function() {
        it("test addDumb through public interface", async function() {
            // Arrange
            wrapper = shallowMount(TeamMemberListItem, {
                propsData: {
                    member: member
                }
            });
            expect(wrapper.find(".teamMemberListItem__count").text()).to.equal("10");
            let button = wrapper.find(".teamMemberListItem__button");
            // Act
            await button.trigger("click");
            actualResult = wrapper.find(".teamMemberListItem__count").text();
            // Assert
            expect(actualResult).to.equal("11");
        });
        it("Demo - test addDumb through direct method call", function() {
            // Arrange

            // Act

            // Assert
        });
    });

});