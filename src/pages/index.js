import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import Layout from '../components/layout/layout'

const IndexPage = () => {
    const Data = "arthur"

    const [starsCount, setStarsCount] = useState(0)
        useEffect(() => {
            // get data from GitHub api
            fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
            .then(response => response.json()) // parse JSON from request
            .then(resultData => {
                setStarsCount(resultData.stargazers_count)
            }) // set data for the number of stars
        }, [])

    return (   
    <Layout>
        <main role="main" class="container">
            <h1 class="text-center mt-5"><FaSearch /></h1>
            <div class="form-outline mt-4">
                <input type="search" id="form1" class="form-control form-control-lg" placeholder="Search for any job keyword (i.e. Product Manager)" aria-label="Search" />
            </div>
            <p>test {Data} {starsCount} </p>
        </main>

    </Layout>
    )
}

export default IndexPage