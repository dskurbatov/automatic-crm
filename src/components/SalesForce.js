import React from 'react'
import Main from './Main'
import Info from './basic/Info'
import FormForSalesforce from './forms/FormForSalesforce'

const text = [
  'Once we’ve completed our analysis of your personal network, we synchronize your contacts along with our customized relationship score directly into your SalesForce account.',
  'This is the third step of unlocking you network.'
]

const SalesForce = (props) => {
  return (
    <Main {...props} active="salesforce" next="/analysis">
      {(errors, propsFromMain) => {
        return (
          <React.Fragment>
            <Info text={text} />
            <FormForSalesforce 
              errors={errors}
              next="/analysis"
              onSubmit={propsFromMain.onSubmit}
            />
          </React.Fragment>
        )
      }}
    </Main>
  )
}

// class SalesForce extends React.Component{
//   state = {
//     errors: {}
//   }

//   componentDidMount(){
//     this.props.setActive('salesforce')
//   }

//   onSubmit = (state) => {
//     const errors = {}
//     if(!isValidEmail(state.email)){
//       errors.email = "Please enter valid email"
//     }

//     if(!isValidPassword(state.password)){
//       errors.password = 'Password must be at least 2 characters long'
//     }
//     this.setState({errors})
    
//     if(isEmpty(errors)){
//       this.props.onSubmit(true)
//       this.props.history.push('/analysis')
//     }
//     return
//   }

//   render(){
//     const { errors } = this.state
//     return (
      
//     )
//   }
// }

export default SalesForce