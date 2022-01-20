import React, { Component } from 'react';
import {connect} from 'react-redux'

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state ={
      noteTitle:'',
      noteContent:'', 
      id:''
    }
  }


componentWillMount() {
  if(this.props.editItem){ //edit case
    this.setState({
      noteTitle:this.props.editItem.noteTitle,
      noteContent:this.props.editItem.noteContent, 
      id:this.props.editItem.id
    });
  }
}


  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
       this.setState({
       [name]:value
     }); 
  }
  addData = (title,content) => {
      if(this.state.id){
        var editObject ={};
        editObject.id = this.state.id;
        editObject.noteTitle = this.state.noteTitle;
        editObject.noteContent = this.state.noteContent;
       this.props.editDataStore(editObject);        
       this.props.changeEditStatus()
      }
      else{
        var item = {};
        item.noteTitle=title;
        item.noteContent=content;
        // console.log(item);
        // this.props.getData(item)
        // gửi item này lên app,để app xử lý
        this.props.addDataContent(item);
      }
      }
    render() {
        return (
            <div className="col-4">
            <h3>SỮA NỘI DUNG NOTE</h3>
            <form>
            <div className="form-group">
              <label htmlFor="noteTitle">Tiêu Đề Note</label>
              <input  
               defaultValue={this.props.editItem.noteTitle}
               onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdTitle" placeholder="Tiêu đề note" />
              <small id="helpIdTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
            </div>
            <div className="form-group">
              <label htmlFor="noteTitle">Nội Dung note</label>
              <textarea
              defaultValue={this.props.editItem.noteTitle} 
              onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteTitle" aria-describedby="helpIdTitle" placeholder="Nôi dung note"  />
              <small id="helpIdTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
            </div>
            <button type="reset"  onClick={() => this.addData(this.state.noteTitle,this.state.noteContent)} className="btn btn-primary btn-block">Lưu</button>
            </form>
          </div>         
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editItem: state.editItem
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataContent: (getItem) => {
      dispatch({type:"ADD_DATA",getItem})
    },
    editDataStore: (getItem) => {
      dispatch({type:"EDIT",getItem})
    },
    changeEditStatus: () => {
      dispatch({
          type:"CHANGE_EDIT_STATUS"
      })
  }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
// export default NoteForm;