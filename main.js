var { Router, Route, IndexRoute, IndexLink, Link} = ReactRouter;

var  App ='./Components/App'
var Home = './Components/Home'
var Stuff = './Components/Stuff'
var Contact = './Components/Contact'



ReactDOM.render(
    <Router>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='stuff' component={Stuff}/>
            <Route path='contact' component={Contact}/>
        </Route>
    </Router>,
    document.getElementById('app')
)
