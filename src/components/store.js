import {noteData} from './FirebaseConnect';
 
var redux = require('redux');

const noteInitialState = {
    isEdit: false,
    editItem:{}
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.getItem);
            console.log('Dữ liệu ' + JSON.stringify(action.getItem) + 'đã thêm vào');
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state,isEdit:!state.isEdit}
        case "GET_EDIT_DATA":
            return {...state,editItem:action.editObject}
        case "EDIT":
            //updata dữ liệu lên trên firebase
            noteData.child(action.getItem.id).update({
                noteTitle:action.getItem.noteTitle,
                noteContent:action.getItem.noteContent
            })
            console.log(' Đã cập nhật dữ liệu:' + JSON.stringify(action.getItem) + "Thành Công");       
            return {...state,editItem:{}}
            case "DELETE_DATA":
                console.log('đã nhận được id '+action.deleteId);
                noteData.child(action.deleteId).remove();
                console.log('Đã xóa địa chỉ có id là :' + action.deleteId);                
                return state
        default:
            return state
    }
}

var store1 =redux.createStore(allReducer);
store1.subscribe(function(){
    console.log(JSON.stringify(store1.getState()));
    
})
export default store1;