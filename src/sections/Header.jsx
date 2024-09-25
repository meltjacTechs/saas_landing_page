
const Header = () => {
  return (
    /* 
    *classname fixed to ensure it is always on top, Z-index 50 to ensure it stays above all elements(during scrolling) 
    */
    <header className="fixed top-0 left-0 z-50 w-full py-10">
        <div>
          <a>
            <img src="/images/xora.svg" width={115} height={55} alt="logo" />
          </a>  
        </div>
    </header>
  )
}

export default Header