import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
        <footer style={{textAlign:'center',color:'gold', border:'1px solid gold'}}>
            &copy; Shaikh Taukir Ahmad {new Date().getFullYear()}
        </footer>
    </div>
  )
}

export default Footer