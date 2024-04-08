import { GLOBAL } from "../config";


function _connectToServer(...path: string[]) {
    return `${GLOBAL.SERVER_URL}/${path.join('/')}`;
}

export const PATH_SERVER = {
    SERVICES: _connectToServer('services'),
}
