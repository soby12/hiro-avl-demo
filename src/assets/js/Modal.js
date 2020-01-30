import React from 'react';
import {Button,Modal} from 'react-bootstrap';





export default class ModalSet extends React.Component {
    constructor(props){
        super(props);
        this.state={
            modaldis:this.props.dis
        }      
    }
    modal(dis){
        this.setState({modaldis:dis})
        console.log('modal hide //--------------');
        
    }
    render(){
        const {modaldis}=this.state;
        console.log(modaldis);
        
        return(
            // <Modal
            //     size="lg"
            //     show={modal}
            //     onHide={() => this.modal(false)}
            //     aria-labelledby="example-modal-sizes-title-lg"
            //     style={{background:'red'}}
            // >
            //     <Modal.Header closeButton>
            //         <Modal.Title id="example-modal-sizes-title-lg">
            //             Large Modal
            //         </Modal.Title>
            //     </Modal.Header>
            //     <Modal.Body>...</Modal.Body>
            // </Modal> 
            <div className='modal-con'style={{width:'100%',height:'100%',background:'#adad9166',position:'absolute',zIndex: '2001',display:modaldis}}>

                <div className='modal' style={{background:'red',width:'200px',height:'200px',zIndex:'200',position:'reletive',margin:'128px auto'}} onClick={()=>this.modal('none')}>

                </div>

            </div>
        )
    }
}