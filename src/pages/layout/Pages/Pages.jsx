import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import style from './Pages.module.scss'

const Pages = ({
  children,
  pageMeta: { title = "", description = "" } = ""
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <main className={style.pageWrap}>
        <Container>
          <Box
            component="section"
            display="flex"
            flexGrow={1}
            justifyContent="center"
            alignItems="center"
          >
            <div className={style.formParent}>{children}</div>
          </Box>
        </Container>
      </main>
    </>
  );
};
export default Pages;
