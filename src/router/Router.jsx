import { useState, useEffect } from 'react';

const Router = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);

  const changePath = () => {
    setPath(window.location.pathname);
    // window.history.pushState("", "", path);
  }

  

  useEffect(() => {
    window.addEventListener("popstate", changePath);

    return () => {
      window.removeEventListener("popstate", changePath);
    }
  }, [])
  return (
    <>
      {children.filter(child => child.props.path === path)}
    </>
  )
}

export default Router;