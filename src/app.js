import React from 'react';
import { connect } from 'react-redux';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer';
import './app.scss';

class App extends React.Component {


  render() {

    return (
      <React.Fragment>
        <section>
          <Navbar />
        </section>

        <Footer />

      </React.Fragment>
    )
  }
}

const mapStateToProps = props => (props);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAsyncPostsHandler: (count) => {
//       dispatch(getAsyncPosts(count));
//     }
//   };
// };

export default connect(mapStateToProps, null)(App);

