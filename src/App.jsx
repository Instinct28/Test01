import './App.css';
import Card from './components/Card';

function App() {

  return (
    <div className='cont'>
      <Card image={"http://ts2.mm.bing.net/th?id=OIP.UYjsISFqF09_P5Dnns6e2gHaE8&pid=15.1"} days={"4 Days"} id={"One"} description={"Some random text how are you i am fine how are you . tell me about yourself my name is yash esa vesa kutch bhi main hoon na"} reads={7} views={3224} comments={21}/>
      <Card image={"http://ts2.mm.bing.net/th?id=OIP.UYjsISFqF09_P5Dnns6e2gHaE8&pid=15.1"} days={"2 week"} id={"Two"} description={"Some random text how are you i am fine how are you . tell me about yourself my name is yash esa vesa kutch bhi main hoon na"} reads={11} views={1699} comments={27}/>
      <Card image={"http://ts2.mm.bing.net/th?id=OIP.UYjsISFqF09_P5Dnns6e2gHaE8&pid=15.1"} days={"4 week"} id={"Three"} description={"Some random text how are you i am fine how are you . tell me about yourself my name is yash esa vesa kutch bhi main hoon na"} reads={4} views={1624} comments={17}/>
    </div>
  )
}

export default App

