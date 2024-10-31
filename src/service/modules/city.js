import MyRequest from "../requests";
export function getCityAll() {
    return MyRequest.get({
        url: 'city/all'
    })
}