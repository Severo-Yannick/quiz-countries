import { FC } from "react";
import { GlobalStyles, CssBaseline, AppBar, Toolbar, Link } from "@mui/material";
import { QUIZZES } from "../utils/constants";
import { upperFirst } from "../utils/upperFirst";

export const Header: FC = () => {
  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Link href={"/"} underline="none" variant="h5" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Quizz Countries
          </Link>
          <nav>
            {QUIZZES.map(quiz => {
              return <Link
                key={quiz}
                underline="none"
                variant="button"
                color="text.primary"
                href={`/${quiz}`}
                sx={{ my: 1, mx: 1.5 }}
              >
                {upperFirst(quiz)}
              </Link>
            })}
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
}