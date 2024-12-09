import {getUsers} from "../../handlers/users";
import {mockRequest, mockResponse} from "../../__mocks__";

describe('get Users', () => {
    it('should return array', () => {
        // Arrange
        const expectedResult: [] = []

        // Act
        const result = getUsers(mockRequest, mockResponse)
        expect(mockResponse.send).toHaveBeenCalledWith([])

    })
})