// import React from 'react';
// import {Router, Route, IndexRoute} from 'react-router-dom';
// import {browserHistory} from 'react-router';
// // import TopViceHeader from '../components/TopViceHeader';
// // import Header from '../components/Header';
// // import ShowCard from '../components/Showcard';
// const TopViceHeader = require('../components/TopViceHeader');
// // const Header = require('../components/Header');
// const ShowCard = require('../components/Showcard')


// const routes = (
// 	<Router history={browserHistory}>
// 		<Route path={'/'} component={TopViceHeader}>
// 			<Route path={'/shows'} component={ShowCard} />
// 		</Route>
// 	</Router>
// )

// export default routes;

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router';

export class Routes extends React.component {
	render(){
		return (
				<Router>
					<Route path='/' component={TopViceHeader}>
						<Route path='/shows' component={ShowCard} />
						<Route path='/shows/:id' component={ShowCard}/>
					</Route>
				</Router>
			)
	}
}

// import TopViceHeader from '../components/TopViceHeader';
// import Header from '../components/Header';
// import ShowCard from '../components/Showcard';
// import Shows from '../shows';
// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from 'react-router-dom';

// class ModalSwitch extends React.Component{
//  previousLocation = this.props.location,

//   componentWillUpdate(nextProps) {
//     const { location } = this.props
//     // set previousLocation if props.location is not modal
//     if (
//       nextProps.history.action !== 'POP' &&
//       (!location.state || !location.state.modal)
//     ) {
//       previousLocation = this.props.location
//     }
//   },

//   render() {
//     const { location } = this.props
//     const isModal = !!(
//       location.state &&
//       location.state.modal &&
//       previousLocation !== location // not initial render
//     )
//     return (
//       <div>
//         <Switch location={isModal ? previousLocation : location}>
//           <Route exact path='/' component={TopViceHeader}/>
//           <Route path='/shows' component={ShowCard}/>
//           <Route path='/shows/:id' component={ImageView}/>
//         </Switch>
//         {isModal ? <Route path='/img/:id' component={Modal} /> : null}
//       </div>
//     )
//   }
// };

// const ImageView = ({ match }) => {
//   const show = Shows[parseInt(match.params.id, 10)]
//   if (!image) {
//     return <div>Image not found</div>
//   }

//   return (
//     <div>
//       <h1>{show.title}</h1>
//     </div>
//   )
// }

// const Modal = ({ match, history }) => {
//   const show = Shows[parseInt(match.params.id, 10)]
//   if (!image) {
//     return null
//   }
//   const back = (e) => {
//     e.stopPropagation()
//     history.goBack()
//   }
//   return (
//     <div
//       onClick={back}
//       style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         bottom: 0,
//         right: 0,
//         background: 'rgba(0, 0, 0, 0.15)'
//       }}
//     >
//       <div className='modal' style={{
//       position: 'absolute',
//         background: '#fff',
//         top: 25,
//         left: '10%',
//         right: '10%',
//         padding: 15,
//         border: '2px solid #444'
//       }}>
//         <h1>{show.title}</h1>
//         <button type='button' onClick={back}>
//           Close
//         </button>
//       </div>
//     </div>
//   )
// }

// const ModalGallery = () => (
//   <Router>
//     <Route component={ModalSwitch} />
//   </Router>
// )

// export default ModalGallery