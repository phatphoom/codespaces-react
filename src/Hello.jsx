// function Hello(){
//     return (
//         <>
//             <h1>Hello World</h1>
//         </>
//     )
// }
// export default Hello;

// export default function Hello(props){
//     return (<p> <i>Hello</i><b>{props.name}</b> from <i><u>{props.from}</u></i></p>)
// }
// export default function Hello(){
//     return (
//         <>
//             <h2>Hello World</h2>
//             <br />
//             <h2>Hello Phoom</h2>
//         </>
//     )
// }

// import "./profile.css"
// function Profile() {
//     return (
//       <img
//         src="https://i.imgur.com/MK3eW3As.jpg"
//         alt="Katherine Johnson"
//       />
//     );
//   }

//   export default function Hello() {
//     return (
//       <section>
//         <h1>Amazing scientists</h1>
//         <div className="profile">
//         <Profile />
//         <Profile />
//         <Profile />
//         <Profile />
//         </div>
//       </section>
//     );
//   }

// export default function (){
//   let name = "Phoom"
//   let from = "science"
//   let codename = "s19"
//   return (
//     <div>
//       <h1>Hello,{name} from <i>{from}</i> (<small>{codename}</small>)</h1>
//     </div>
//   )
// }

// let can re assign 
// const can't re assign 
// const Hello = () =>{
//   let name = "Phoom"
//   let from = "science"
//   let codename = "s19"
//   return (
//     <div>
//       <h1>Hello,{name} from <i>{from}</i> (<small>{codename}</small>)</h1>
//     </div>
//   )
// }
// const Hello = (props)=><h1>Hello {props.name} <from>props.from</from></h1>
// export default Hello;

// export default function Hello(props){
//   return (<p> <i>Hello</i><b>{props.name}</b> from <i><u>{props.from}</u></i></p>)
// }

// export default function (props) {
//   return <div>
//     <h2>Hello {props.name}</h2>
//     <p>from {props.from}</p>
//   </div>
// }
// export default function ({name,codename,where="science"}) {
//   return <div>
//     <h2>Hello {name}</h2>
//     <p>from {where}</p>
//     <p>codename {codename}</p>
//   </div>
// }
// const Line = ({children})=>{
//   return (
//     <>
//     <hr />
//     <h2>This is Line component </h2>
//     <p>Learn component children</p>
//     <p>children inside children</p>
//     {children}
//     <hr />
//     </>
//   )
// }
const Profile = (props) =>{
  return (
    <h1>
      Hello <span className="my_name">{props.name}</span> from <span className="from">{props.codename}</span>
    </h1>
  )
}

// from index sending props in <hello/> tag
// in hello.jsx have profile for รับ props in Profile function
// then export from Hello(props) then using sperate operator

import "./Hello.css"

export default function Hello(props){
  return (
    <>
    <img src="Octocat.png" className="app_logo" alt="logo" />
    <Profile {...props}/>
    </>
  )
}