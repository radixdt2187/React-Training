
import React,{Component} from 'react'
export class ProductsDetails extends Component {

    handleRedirect()
    {
this.props.history.replace('/LoginForm')
    }
        render() {
          return (
            <div className="card">
<h1>Home</h1>
            </div>
          );
        }
      }


      export default ProductsDetails;