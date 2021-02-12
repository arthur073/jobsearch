import React from 'react'
import { Link } from 'gatsby'

interface Props {
  title: string
  location: Location
}

const Navibar: React.FC<Props> = ({ location, title }: Props) => {
  return (
    <nav className="navbar navbar-expand navbar-light flex-column flex-md-row bg-light">
      <div className="container">
        <Link className="text-center" to="/">
          <h1 className="navbar-brand mb-0">{title}</h1>
        </Link>
        <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
      </div>
    </nav>
  )
}

export default Navibar
