import React from 'react';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  ClickOpen() {
    this.setState({isModalOpen: true});
  }
   
  ClickClose(){
    this.setState({isModalOpen:false});
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-lesson'>
              <h2>{this.props.name}</h2>
              <p>{this.props.lesson1}</p>
              <p>{this.props.lesson2}</p>
            </div>

            <button
              className='modal-close-btn'
              onClick={()=>{this.ClickClose()}}
            >
              Tutup
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className='lesson-card'>
        <div
          className='lesson-item'
          onClick={() => {this.ClickOpen()}}
        >
          <p>{this.props.name}</p>
        </div>
        {modal}
      </div>
    );
  }
}

export default Lesson;