const { default: NavigationBar } = require("../components/NavigationBar")
import NavigationBar from '../components/NavigationBar';

const Container = (props) => {

  return (
    <>
      <NavigationBar />
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Container