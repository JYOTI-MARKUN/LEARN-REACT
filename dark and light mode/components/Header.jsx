

export default function Header({theme}) {
  // const [isDark,setIsDark] = useState(JSON.parse(localStorage.getItem("setIsDark")))
  const [isDark,setIsDark] = theme
  // console.log(localStorage.getItem("setIsDark"))
  // console.log(typeof(localStorage.getItem("setIsDark")))
  // console.log(JSON.parse(localStorage.getItem("setIsDark")))

// if (isDark){
//   document.body.classList.add("dark")
// }else{
//   document.body.classList.remove("dark")
// }

    return (
      <header className={`header-container ${isDark?"dark":""}`}>
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          <p className="theme-changer" onClick={()=>{
          
            setIsDark(!isDark)
            localStorage.setItem("setIsDark",!isDark)
          }}>
            <i className={`fa-solid fa-${isDark?"sun":"moon"}`}/>
            &nbsp;&nbsp;{isDark?"Light":"Dark"} Mode
          </p>
        </div>
      </header>
    )
  }