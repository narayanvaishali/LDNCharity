// Authorization HOC
export function Authorization (WrappedComponent, allowedRoles, user, userRole){
//const Authorization = (WrappedComponent, allowedRoles, user, userRole) => {
  return class WithAuthorization extends React.Component {
    constructor(props) {
      super(props)

      // In this case the user is hardcoded, but it could be loaded from anywhere.
      // Redux, MobX, RxJS, Backbone...
      this.state = {
        
      }
    }

    render() {
      const role = userRole
      if (allowedRoles.includes(role)) {
        return <WrappedComponent {...this.props} user={user} userRole={userRole} />
      } else {
        return <Redirect to="/dashboard" />
      }
    }
  }
}