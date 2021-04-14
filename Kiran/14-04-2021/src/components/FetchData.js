
import React from 'react'
export class FetchData extends React.Component {
        render() {
            console.log(this.props)
          return (
            <div className="card">
                <p>Welcome to {this.props.message}</p>
                <p>Contact us on:{this.props.email}</p>
            </div>
          );
        }
      }


      export default FetchData;