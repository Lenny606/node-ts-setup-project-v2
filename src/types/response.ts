export interface User {
    id: number;
    email: string;
    username: string;
}

export interface Health extends BaseResponse{

}
export interface ErrorResponse extends BaseResponse{

}

interface BaseResponse {
    success: boolean;
    status: number;
    message: string;
}