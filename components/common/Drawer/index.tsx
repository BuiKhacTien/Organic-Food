import React, { useEffect, useState } from 'react'

type TProps = {
   children?: React.ReactNode;
   open: Boolean;
   setOpen: Function;
   anchor: string;
}

const Index = ({ children, open, setOpen, anchor = "left" }: TProps) => {
   const [style, addStyle] = useState<Object>({ display: 'none' })
   const handleOpen = () => {
      setOpen(!open)
      
   }
   const handleAnimation = () => {
      if (!open) {
         setTimeout(() => {
            addStyle({ display: 'none' })
         }, 300);
      } else {
         addStyle({})
      }
   }
   useEffect(() => {
      handleAnimation()
   }, [open])
   return (
      <div style={style} className={open ? "sidebar open" : "sidebar"}>
         <div onClick={handleOpen} className="overlay"></div>
         <div style={{ margin: 0}} className={`sidebar__block ${anchor}`}>
            {children}
         </div>
      </div>
   )
}

export default Index
