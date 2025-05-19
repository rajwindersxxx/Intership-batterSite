import { useEffect } from "react";
import { useLocation } from "react-router-dom"

function ScrollToTop() {
  // use to fix wired scroll problem with react router
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    },)
  }, [pathname])
  return null
}

export default ScrollToTop
