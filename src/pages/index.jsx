import React from "react"

import ContentGrid from "../components/contentGrid"
import Layout from "../components/layout"

const contentData = [
  {
    title: "Google",
    subtitle: "Ads Infra",
    color: "#DFE6E9",
    image: "ads_logo.svg",
    imageSize: "38%",
    to: "/under_construction/",
  },
  {
    title: "Facebook",
    subtitle: "IG Growth Ranking",
    color: "#E56969",
    image: "ig_logo_2.svg",
    imageSize: "43%",
    to: "/under_construction/",
  },
  {
    title: "Google",
    subtitle: "Skia Graphics",
    color: "#463F3A",
    image: "chrome_logo_2.svg",
    imageSize: "32%",
    to: "/under_construction/",
  },
  {
    title: "Vanderbilt",
    subtitle: "Research & TA",
    color: "#BCB8B1",
    image: "vandy_logo.png",
    imageSize: "35%",
    to: "/under_construction",
  },
]

// FFE5D9 - peach    //BB8588 - unsaturated red
// F0B67F - orangish //ffdf9e - ig light yellow
// E56969 - ig red

export default () => (
  <Layout focus="Work">
    <ContentGrid contentData={contentData} />
  </Layout>
)
