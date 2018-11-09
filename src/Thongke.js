import React, { Component } from "react";
import './Card.css'
class ThongKe extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[
        {
            name:'Số chủ đề',
            num:12
        },
        {
            name:'Số câu hỏi hiện có',
            num:12
        },
        {
            name:'Số câu hỏi mới',
            num:40
        }
    ]};
  }
  render() {
    return (
        <div style={{display: 'flex',
            justifyContent: 'space-around' }}>
        {
            this.state.data.map((obj) => {
                return (
                    <div className="fullCard" id="thumbnail">
                        <div className="cardContent">
                            <div className="cardText">
                                <h4>{obj.name}</h4>
                                <hr />

                            </div>
                            <div class="text-center" style={{ fontSize: 150 }}>
                                {obj.num}
                            </div>
                        </div>
                    </div>
                );
            })
        }
      </div>
    );
  }
}

export default ThongKe;
