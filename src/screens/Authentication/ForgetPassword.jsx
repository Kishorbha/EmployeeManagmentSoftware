import React from "react"

import Helmet from "react-helmet"

//@material-ui
import { Box, Container } from "@material-ui/core"

export const ForgetPassword = (setActivePage) => {
  return (
    <div>
      <Helmet>
        <title>C M S | Reset Password</title>
      </Helmet>
      <Container>
        <Box>
          <h1>Reset password</h1>
        </Box>
      </Container>
    </div>
  )
}
