
import React,{Component} from 'react'
import FetchData from './FetchData'

export class products extends Component {

    
        render() {
          return (
            <div>
                  <FetchData message={"RadixWeb"} email={"radixweb.com"}/>

            </div>
          );
        }
      }


      export default products;