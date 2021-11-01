import {AuthActionCreators} from "./auth/action-creators";
import {EventActionCreatores} from "./event/action-creators";

export const allActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreatores
}