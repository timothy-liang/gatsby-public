import React from "react"

import { withTheme } from "styled-components"
import ContentGrid from "../components/contentGrid"
import Layout from "../components/layout"

const contentData = [
  {
    title: "Google",
    subtitle: "Ads Infrastructure",
    color: "#DFE6E9",
    image: "ads_logo.svg",
    imageSize: "38%",
    to: "/under_construction/",
  },
  {
    title: "Instagram",
    subtitle: "Growth Ranking",
    color: "#E56969",
    image: "ig_logo_2.svg",
    imageSize: "43%",
    to: "/under_construction/",
  },
  {
    title: "Google",
    subtitle: "Skia Graphics",
    color: "#141B41",
    image: "chrome_logo_2.svg",
    imageSize: "32%",
    to: "/under_construction/",
  },
  {
    title: "Vanderbilt",
    subtitle: "Research & TA",
    color: "#EBD2B4",
    image: "vandy_logo.png",
    imageSize: "35%",
    to: "/under_construction",
  },
]

// TODO - make a file for this
// FFE5D9 - peach
// F0B67F - orangish
// E56969 - ig red
// E1306C - ig red v2
// BCB8B1 - Black Shadows
// 463F3A - Taupe
// D8AB4C - VanderbiltGold
// EBD2B4 - Desert Sand
// EADBC9 - Pearl
// 141B41 - Yankees Blue
// BB8588 - unsaturated red
// ffdf9e - ig light yellow
// DFE6E9 - Platinum
// 252C54 - Space Cadet
// 273043 - Gun Metal
// 403F4C - Arsenic
// 241623 - Raisin Black

export default () => (
  <Layout focus="Work">
    <ContentGrid contentData={contentData} />
  </Layout>
)
