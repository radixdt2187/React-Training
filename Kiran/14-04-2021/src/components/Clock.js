
import React from 'react'
class Clock extends React.Component {
        // constructor(props) {
        //   super(props);
        //   this.state = {
        //     time: new Date()
            
        //   };
          
        // this.time = this.state.time.toLocaleTimeString();
        // this.hourMin = this.time.length === 10? this.time.slice(0) : this.time.slice(0,5);
        // }

        // setTime = () => {
        //         this.setState({
        //             dateClass: new Date()
        //         })
        //         this.time = this.state.dateClass.toLocaleTimeString();
        //         this.hourMin = this.time.length === 10? this.time.slice(0) : this.time.slice(0,5);
        //     }
        // componentDidMount() {
      
        // setInterval(this.setTime, 1000)
        // }
        // componentWillUnmount() {
        //   clearInterval(this.intervalID);
        // }
       
        // render() {
        //   return (
        //     <p className="App-clock">
             
        //         {this.hourMin}
        //     </p>
        //   );
        // }

         constructor(props) {
                super(props);
                this.state = {date: new Date()};
              }
                componentDidMount() {
                this.timerID = setInterval(
                  () => this.tick(),
                  1000
                );
              }
               componentWillUnmount() {
                clearInterval(this.timerID);
              }
               tick() {
                this.setState({
                  date: new Date()
                });
              }
               render() {
                return (
                  <div>
                   
                    <h2>Time {this.state.date.toLocaleTimeString()}.</h2>
                  </div>
                );
              }
          
      }


      
       

      export default Clock;