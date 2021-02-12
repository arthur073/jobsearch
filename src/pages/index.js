import React from "react"
import { Link } from "gatsby"
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import Layout from '../components/layout/layout'

const IndexPage = () => (
  <Layout>
    <main role="main" class="container">
        <h1 class="text-center mt-5"><FaSearch /></h1>
        <div class="form-outline mt-4">
            <input type="search" id="form1" class="form-control form-control-lg" placeholder="Search for any job keyword (i.e. Product Manager)" aria-label="Search" />
        </div>
    </main>

  </Layout>
)

export default IndexPage